import React , { useState } from 'react';
import { NavLink , useHistory} from "react-router-dom";

const Loginmodal = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");	
    const history = useHistory();

    const PostsData = async (e) => {
		e.preventDefault();
		const res = await fetch("/login" , {
			method : "post" ,
			headers : {"Content-Type":"application/json"},
			body : JSON.stringify({email,password})
		});
		const data = await res.status;
		if(data === 422 || !data)
		{
			window.alert("Invalid Details");
		}else
		{
			window.alert("Login Succesfully");
			history.push("/profile");
		}
	};
    return (
        <div>
			<div className="login-register">
				<div className="col-md-4 col-md-offset-4" id="login">
					<section id="inner-wrapper" className="login">
						<article>
							<div className="container">
								<div className="row">
									<div className="col-md-6 col-12 ">
										<img className="seen2" src="https://dl.dropboxusercontent.com/s/at9sxs056nqlrlr/login.png?dl=0" alt="Random_Image" />
											<div className="seen3">
												<NavLink  to="/register" className="seen4" >Create an Account</NavLink>
											</div>
									</div>
									<div className="col-md-6 col-12 " > 
										<form method="post">
											<div className="form-group">
												<label htmlFor="name">
													<i className="zmdi zmdi-account material-icons-name"></i>
												</label>
													<input type="text" className="text-line" name="Comp_name" placeholder="Email Address" value={email} onChange={(event)=>setEmail(event.target.value)} />
											</div>
											<div className="form-group">
												<label htmlFor="name">
													<i className="zmdi zmdi-lock material-icons-name"></i>
												</label>
													<input type="password" className="text-line" name="password" placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)} />
											</div>						
												<NavLink className="btn-get-started my-3" to="" onClick={PostsData}>Register</NavLink>
                                		</form>
									</div>	
								</div>
							</div>
                		</article>
            		</section>
        		</div>	
			</div>
        </div>
    )
};

export default Loginmodal;
