import { useState } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router";
export default function Register() {

    const navigate = useNavigate();
    const [userDetsils, setUserDetails] = useState({});

    function handleRegister(){

        axios.post("http://localhost:8080/register",userDetsils).then((Response)=>{console.log(Response)}).catch((error)=>{console.log(error)});
        navigate("/login");
    }

    function handleChange(event){
        event.preventDefault();
        setUserDetails((prev)=>({...prev,[event.target.name]:event.target.value}));
        
    }

    return (
        <>
            <div className="container" >
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-6 register-form ">
                        <div className="text-center mt-2 fs-3">SignUp Here</div>
                        <form action="#" onSubmit={handleRegister}>
                            {/* <div className="mb-3">
                                <label htmlFor="exampleInputName1" className="form-label">User Name</label>
                                <input type="text" className="form-control" id="exampleInputName1" name="name" onChange={handleChange} />
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange}/>
                            </div>
                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1" name="agreement" onChange={handleChange}>Agreement</label>
                            </div> */}
                            <div className="text-center mb-2">

                                <button type="submit" className="btn btn-warning me-4" >Submit</button>
                                <button type="reset" className="btn btn-primary">Reset</button>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}
