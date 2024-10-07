import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";
import Spinner from "../components/Spinner";



const Login = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ""
    })

    const {user, isLoading, isError, isSuccess, message} = useSelector((state)=>state.auth)

    const {email, password} = formData;

    const handleChange = (e) =>{
        setFormData((prevVal) =>({
            ...prevVal,
            [e.target.name] : e.target.value,
        }))
    }

    const handleLogin = (e)=>{
        e.preventDefault();
        const userData = {email, password}
        dispatch(login(userData))
    }

    if(isLoading){
       return <Spinner></Spinner>
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
           
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Type your password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;