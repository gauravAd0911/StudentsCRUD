import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Studentn from './Studentn';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Studentn/>}></Route>
          <Route path='/create' element={<CreateStudent/>}></Route>
          <Route path='/update/:id' element={<UpdateStudent/>}></Route>
        </Routes>
      </BrowserRouter> 
      
    </div>
  )
}

export default App
