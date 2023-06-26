import { useState } from "react";
import axios from "axios";
import "./login.css";

import { useNavigate } from "react-router";

export default function Login() {

    const navigate = useNavigate();

    const [loginDetails,setLoginDetails] = useState({});

    function handleSubmit(){

        axios.post("http://localhost:8080/login",loginDetails).then((Response)=>{
            console.log(Response);
            
            localStorage.setItem("token",Response.data.token);
            localStorage.setItem("response",Response.data);
        }).catch((error)=>{
            console.log(error);
        });
        
        navigate("/");


    }

    function handleChange(event){
            event.preventDefault();
            setLoginDetails((prev)=>({...prev,[event.target.name]:event.target.value}));
           

    }

    return (
        <>
            <div className="container" >
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-5 login-form ">
                    <div className="text-center mt-2 fs-3">Login form</div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
                            </div>
                            <div className="text-center mb-2">

                            <button primary="true" type="submit" className="btn btn-warning me-4">Submit</button>
                            <button type="button" className="btn btn-primary">Reset</button>

                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}
