import React from "react";
import Table from "react-bootstrap/Table"

function readData(){
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
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
            {/* Rows will go here */}
            <tr>
             {/*  <td>Example 1</td>
              <td>Example 2</td>
              <td>Example 3</td> */}
              <td>
                <button className="btn btn-primary">Action</button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </Table>   

            </div>
           
        </div>
    )
}

export default readData;