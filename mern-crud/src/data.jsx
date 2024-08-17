import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import toast from 'react-hot-toast'
import AddIcon from '@mui/icons-material/Add';

function Data() {
  const [data, setData] = useState([
    { data1: 'test', data2: 'testing', data3: 'lmao' }
  ]);

  return (

    <div className='w-full'>
    <div className="d-flex justify-content-start mb-3">
      <button className="btn btn-success" >
      <AddIcon /> 
      Create</button>
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
        {data.map((retVal, index) => (
          <tr key={index}>
            <td>{retVal.data1}</td>
            <td>{retVal.data2}</td>
            <td>{retVal.data3}</td>
            <td>
              <button className="btn btn-primary mx-1">Update</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>

  );
}

export default Data;
