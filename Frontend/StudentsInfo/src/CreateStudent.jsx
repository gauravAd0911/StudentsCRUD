import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateStudent = () => {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const navigate=useNavigate();


    function handleSubmit(event) {
        event.preventDefault()
        axios.post(`http://localhost:5000/create`,{Name:name,Email:email})
        .then(res=>{
            console.log(res);  
            navigate('/');
        })
        .catch(error=>console.log(error));
    }



  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-dark text-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Students</h2>
                <div className='mb-2'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder='Enter Name' className='form-control' 
                    onChange={e=>setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='Enter Email' className='form-control'
                     onChange={e=>setEmail(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
                
            </form>
            
        </div>
      

    </div>
  )
}

export default CreateStudent
