import React, { useState } from 'react'
import formValidator from '../Validators/formValidator'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../Redux/ActionCreators/EmployeeActionCreator'

export default function RegistrationPage() {
    let [data, setData] = useState({
        name: "",
        email: "",
        role: "",
    })

    let [errorMessage, setErrorMessage] = useState({
        name: "Full Name Field Is Mendatory",
        email: "email Field Is Mendatory",
        role: "role Field Is Mendatory"
    })
    let [show, setShow] = useState(false)


    const dispatch = useDispatch()

    //to navigate between pages
    let navigate = useNavigate()



    function getInput(e) {
        let { name, value } = e.target

        //first validate error 
        setErrorMessage((old) => {
            return {
                ...old,
                [name]: formValidator(e)
            }
        })

        //then set data into variables
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })

    }


    //inserting data
    function postData(e) {
        e.preventDefault()

        let error = Object.values(errorMessage).find((x) => x != "")
        if (error)
            setShow(true)

        dispatch(addEmployee({
            name: data.name,
            email: data.email,
            role: data.role
        }))
        alert(`Employee added Successfully`)
        navigate("/")

        // else {
        //     try {

        //         let response =  fetch("http://localhost:8000/employees", {

        //             method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json"
        //             },
        //             body: JSON.stringify({
        //                 name: data.name,
        //                 email: data.email,
        //                 role: data.role
        //             })
        //         })

        //         response = await response.json()
        //         if (response) {
        //             navigate("/")
        //         } else {
        //             alert(`Something went wrong`)
        //         }

        //     } catch (error) {
        //         alert(`Internal server error`)
        //     }
    }


return (
    <div className='container'>
        <h3 className='text-center text-light bg-dark p-2 mt-3'>Details for Registration</h3>

        <form onSubmit={postData}>
            <div className='row'>
                <div className="col-12 mb-3">
                    <label>Name*</label>
                    <input type="text" name="name" placeholder='Enter Full name' onChange={getInput} className='form-control' />
                    {show && errorMessage.name ? <small className='text-danger'>{errorMessage.name}</small> : null}     {/* if show and errorMesasage both are true then print message else null*/}
                    {/* { (show && errorMessage.name) && <small className='text-danger'>{errorMessage.name}</small> } */}  {/*if show and errorMesasage both are true then print message */}
                    {/* above both the lines are almost similar */}
                </div>
                <div className="col-md-6 mb-3">
                    <label>Email*</label>
                    <input type="text" name="email" placeholder='Enter email' onChange={getInput} className='form-control' />
                    {show && errorMessage.email ? <small className='text-danger'>{errorMessage.email}</small> : null}
                </div>
                <div className="col-md-6 mb-3">
                    <label>Role*</label>
                    <input type="text" name="role" placeholder='Enter role' onChange={getInput} className='form-control' />
                    {show && errorMessage.role ? <small className='text-danger'>{errorMessage.role}</small> : null}
                </div>

                <div className="col-12 mb-3">
                    <button type="submit" className="btn btn-dark text-light w-100" > Submit </button>
                </div>
            </div>
        </form>
    </div>
    )
}
