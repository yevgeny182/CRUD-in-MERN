import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Data from './data'
import CreateData from './createData'
import UpdateData from './updateData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Data />}>   </Route>
          <Route path ='/create' element={<CreateData />}>   </Route>
         {/*  <Route path ='/update' element={<UpdateData /> }>   </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
