import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEmployee, getEmployees } from '../Redux/ActionCreators/EmployeeActionCreator'

export default function HomePage() {

    //redux-saga
    const dispatch = useDispatch()
    const { employees, error, loading } = useSelector(state => state.employeeState)

    useEffect(() => {
        dispatch(getEmployees())
    }, [dispatch])


    function handleDelete(id) {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            dispatch(deleteEmployee(id))
        }
    }


    return (
        <div className='container'>
            <h3 className='text-center text-light bg-dark p-2 mt-3'>Employees Details</h3>

            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">{error}</p>}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col" colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((emp) =>
                            <tr key={emp.id}>
                                <th scope="row">{emp.id}</th>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.role}</td>

                                <td><a className="btn btn-dark text-light" href={`/edit/${emp.id}`}><i className="fa fa-edit"></i></a></td>
                                <td><button onClick={() => handleDelete(emp.id)} className="btn btn-danger text-light"><i className="fa fa-trash"></i></button></td>
                            </tr>
                        )
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center">
                                No data available
                            </td>
                        </tr>
                    )
                    }
                </tbody>
            </table>



        </div>
    )
}
