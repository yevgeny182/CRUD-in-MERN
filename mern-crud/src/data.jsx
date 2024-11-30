import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import AddIcon from '@mui/icons-material/Add';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import axios from "axios";

function Data() {
  const [data, setData] = useState([
    //{ data1: 'test', data2: 'testing', data3: 'lmao' }
  ]);

  const clickUpdate = () =>{
    toast.success("Update has been clicked")
  }
  
  const clickDelete = () =>{
    toast.warn("Delete your data? ")
  }
  
  useEffect(() =>{
    axios.get('http://localhost:3001')
    .then(result => 
      setData(result.data)
    )
  }, [])

  return (

    <div className='w-full'>
    <div className="d-flex justify-content-start mb-3">
      <Link to="/create" className="btn btn-success" >
      <AddIcon /> 
      Create</Link>
    </div>
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>data1</th>
          <th>data2</th>
          <th>data3</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((retVal) => (
          <tr>
            <td>{retVal.data1}</td>
            <td>{retVal.data2}</td>
            <td>{retVal.data3}</td>
            <td>
              <button className="btn btn-primary mx-1" onClick={clickUpdate}>Update</button>
              <button className="btn btn-danger" onClick={clickDelete}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>


    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition: Bounce
/>
  </div>

  );
}

export default Data;
