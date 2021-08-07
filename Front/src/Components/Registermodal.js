import React, { useState }  from 'react';
import { NavLink , useHistory} from "react-router-dom";

const Registermodal = () => {
    const history = useHistory();
    const [count,setCount] = useState({
		name:"",
		email:"",
		mobile:"",
		password:"",
		cpassword:""
	});
    const InputEvent = (event) => {
        const { value , name } = event.target;
        setCount({...count, [name]:value});
    }
    const PostData = async (e) =>{
        e.preventDefault();
        const { name, email, mobile, password, cpassword } = count;
        const res = await fetch("/register" , {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({ name, email, mobile, password, cpassword }) 
    });
    const data = await res.json();

    if (data.status === 422 || !data)
    {
        window.alert("Invalid Registration");
    }else 
    {
        window.alert("Registration Succesfull");
        history.push("/login");
    }
    };
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
						<div className="login-register">	
							<div className="col-md-4 col-md-offset-4" id="login">
								<section id="inner-wrapper" className="login">
									<article>
										<div className="container">
											<div className="row">
												<div className="col-md-6 col-12 " > 
													<form method="POST">
														<div className="form-group">
															<label htmlFor="name">
																<i className="zmdi zmdi-account material-icons-name"></i>
															</label>
															<input type="text" className="text-line" name="name" placeholder="Please Enter Your Name" value={count.name} onChange={InputEvent}/>
														</div>
														<div className="form-group">
															<label htmlFor="name">
																<i className="zmdi zmdi-email material-icons-name"></i>
															</label>
															<input type="text" className="text-line" name="email" placeholder="Please Enter Your Email" value={count.email} onChange={InputEvent}/>
														</div>
														<div className="form-group">
															<label htmlFor="name">
																<i className="zmdi zmdi-phone material-icons-name"></i>
															</label>
															<input type="text" className="text-line" name="mobile" placeholder="Please Enter Contact-Number" value={count.mobile} onChange={InputEvent}/>
														</div>
														<div className="form-group">
															<label htmlFor="name">
																<i className="zmdi zmdi-lock material-icons-name"></i>
															</label>
															<input type="text" className="text-line" name="password" placeholder="Please Enter Password" value={count.password} onChange={InputEvent}/>
														</div>
														<div className="form-group">
															<label htmlFor="name">
																<i className="zmdi zmdi-lock material-icons-name"></i>
															</label>
															<input type="text" className="text-line" name="cpassword" placeholder="Please Confirm Password" value={count.cpassword} onChange={InputEvent}/>
														</div>									
								  						<NavLink className="btn-get-started my-3" to="" onClick={PostData}>Register</NavLink>
														</form>
													</div>
													<div className="col-md-6 col-12 ">
													    <img className="seen" src="https://dl.dropboxusercontent.com/s/isg3w49b9yxmvrr/registration.jpg?dl=0" alt="Random_Image" />
															<div className="seen1">
																<NavLink className="seen4"  to="/login" >I am Already Register</NavLink>
															</div>
													</div>
												</div>
											</div>
									</article>
								</section>
            				</div>					
						</div>
					
                </div>
            </div>
        </div>
    )
}

export default Registermodal;
