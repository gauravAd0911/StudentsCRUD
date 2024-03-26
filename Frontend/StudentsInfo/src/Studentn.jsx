import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Studentn = () => {

    let [student,setStudent]=useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/')
        .then(res=>setStudent(res.data))
        .catch(err => console.error(err))
    },[])


    const handledelete=async(id)=>{
        try {
            await axios.delete('http://localhost:5000/student/'+id)
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='d-flex vh-100 bg-success justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to='/create' className='btn btn-success'>ADD +</Link >
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((data,i)=>(
                            <tr key={i}>
                                <td>{data.ID}</td>
                                <td>{data.Name}</td>
                                <td>{data.Email}</td>
                                <td>
                                    <Link to={`update/${data.ID}`} className='btn btn-primary' >Update</Link >
                                    <button  className='btn btn-danger ms-2 ' onClick={e=>handledelete(data.ID)}>Delete</button >
                                </td>
                            </tr>
                        ))

                       
                    }
                </tbody>
            </table>            
        </div>
      
    </div>
  )
}

export default Studentn
