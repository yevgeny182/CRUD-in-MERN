import { Table, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify'; 
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function CreateData(){
    const [data1, setData1] = useState()
    const [data2, setData2] = useState()
    const [data3, setData3] = useState()
    const navigate = useNavigate()

    const clickSubmit = () =>{
        toast.success("Success! Data has been submitted!")
    }
    const Submit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:3001/CreateData", {data1, data2, data3})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="w-full">
            <h2> Add Data </h2>
            <form onSubmit={Submit}>
                <Table>
                    <Typography className="d-flex justify-content-start mb-3 mx-1">
                        <label>Data1:</label>
                        <input type="text" placeholder="data1" className="form-control mx-2" 
                        onChange={(e) => setData1(e.target.value)}
                        />
                    </Typography>
                    <Typography className="d-flex justify-content-start mb-3 mx-1">
                        <label>Data2:</label>
                        <input type="text" placeholder="data2" className="form-control mx-2" 
                        onChange={(e) => setData2(e.target.value)}
                        />
                    </Typography>
                    <Typography className="d-flex justify-content-start mb-3 mx-1">
                        <label>Data3:</label>
                        <input type="text" placeholder="data3" className="form-control mx-2" 
                        onChange={(e) => setData3(e.target.value)}
                        />
                    </Typography>
                </Table>
                <div className="d-flex justify-content-end mb-3">
                    <button type="submit" className="btn btn-success mx-2" onSubmit={clickSubmit}>
                        Submit
                    </button>
                    <Link to="/" className="btn btn-primary">
                    Back
                    </Link>
            
                </div>
            </form>
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
    )
}

export default CreateData;