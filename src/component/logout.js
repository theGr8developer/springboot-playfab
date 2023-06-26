import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";



export default function Logout() {
    
    const navigate = useNavigate();
    function handleLogoutOk(){
        axios.post("http://localhost:8080/logout",{logout:"confirm"})
        .then((response)=>{console.log(response)})
        .catch((errors)=>{
            console.log(errors);
        });
    }

    
    function handleLogoutCancel(){
    
       navigate("/");
    }

    return (
        <>
            <div className="container" >
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-5 login-form ">
                    <div className="text-center mt-2 fs-3">Do you Confirm to logout?</div>

                       <div className="text-center mt-3 pb-3">
                       <button className="btn btn-primary" style={{marginInline:"30px"}} onClick={handleLogoutOk}>OK</button>
                       <button className="btn btn-warning" onClick={handleLogoutCancel}>CANCEL</button>
                       </div>
                    </div>

                </div>
            </div>
        </>
    );
}
