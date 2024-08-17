import { Table, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify'; 

function CreateData(){
    const clickSubmit = () =>{
        toast.success("Success! Data has been submitted!")
    }
    return(
        <div className="w-full">
            <h2> Add Data </h2>
            <form>
                <Table striped bordered hover>
                    <Typography className="d-flex justify-content-start mb-3 mx-1">
                        <label>Data1:</label>
                        <input type="text" placeholder="data1" className="form-control mx-2" />
                    </Typography>
                    <Typography className="d-flex justify-content-start mb-3 mx-1">
                        <label>Data2:</label>
                        <input type="text" placeholder="data2" className="form-control mx-2" />
                    </Typography>
                    <Typography className="d-flex justify-content-start mb-3 mx-1">
                        <label>Data3:</label>
                        <input type="text" placeholder="data3" className="form-control mx-2" />
                    </Typography>
                </Table>
                <div className="d-flex justify-content-end mb-3">
                    <button type="submit" className="btn btn-success mx-2">
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