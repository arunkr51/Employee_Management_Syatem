import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import formValidator from '../Validators/formValidator'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployees, updateEmployee } from '../Redux/ActionCreators/EmployeeActionCreator'

export default function EditPage() {
  let { id } = useParams()
  let navigate = useNavigate()

  let [empData, setEmpData] = useState({
    name: "",
    email: "",
    role: ""
  })
  let [errors, setErrors] = useState({})

  let dispatch = useDispatch()
  let { employees } = useSelector(state => state.employeeState)

  useEffect(() => {
    if (employees.length === 0) {
      dispatch(getEmployees())
    }
    else {
      let employee = employees.find(emp => emp.id === parseInt(id))
      if (employee)
        setEmpData(employee)
    }
  }, [id, employees, dispatch])

  function handleChange(e) {
    let { name, value } = e.target

    setEmpData((old) => {
      return {
        ...old,
        [name]: value
      }
    })

    setErrors((old) => {
      return {
        ...old,
        [name]: formValidator(e)
      }
    })
  }

  function update(e) {
    e.preventDefault()

    // Run all validations before submitting
    const validationErrors = {}

    for (const key in empData) {
      const fakeEvent = {
        target: {
          name: key,
          value: empData[key]
        }
      }

      const msg = formValidator(fakeEvent)
      if (msg) 
        validationErrors[key] = msg
    }
    setErrors(validationErrors)

    // Stop submission if any validation errors
    if (Object.values(validationErrors).some(msg => msg)) {
      alert("Please correct the errors before submitting.")
      return
    }

    dispatch(updateEmployee(empData))
    alert(`Employee successfully updated`)
    navigate("/")
  }

  return (
    <div className='container'>
      <h3 className='text-center text-light bg-dark p-2 mt-3'>Edit Employee</h3>

      <form onSubmit={update}>
        <div className='row'>
          <div className="col-12 mb-3">
            <label>Name*</label>
            <input type="text" name="name" value={empData.name} placeholder='Enter Full name' onChange={handleChange} className='form-control' />
            {errors.name && <small className="text-danger">{errors.name}</small>}

          </div>
          <div className="col-md-6 mb-3">
            <label>Email*</label>
            <input type="text" name="email" value={empData.email} placeholder='Enter email' onChange={handleChange} className='form-control' />
            {errors.email && <small className="text-danger">{errors.email}</small>}    {/* if errors.email exists then print message*/}
            {/* {errors.email ? <small className="text-danger">{errors.email}</small> : null} */} {/* if errors.email exists then print message otherwise null*/}
            {/* above both lines are almost same */}
          </div>

          <div className="col-md-6 mb-3">
            <label>Role*</label>
            <input type="text" name="role" value={empData.role} placeholder='Enter role' onChange={handleChange} className='form-control' />
            {errors.role && <small className="text-danger">{errors.role}</small>}
          </div>

          <div className="col-12 mb-3">
            <button type="submit" className="btn btn-dark text-light w-100" > Update </button>
          </div>
        </div>
      </form>
    </div>
  )
}























