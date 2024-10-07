import { useDispatch, useSelector } from "react-redux";
import { Link,  useNavigate } from "react-router-dom";
import { logOut, reset } from "../features/authSlice";


const Header = () => {
    const{user}  = useSelector(state => state.auth)
    console.log(user);
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleLogOut = () =>{
        dispatch(logOut())
        dispatch(reset())
        navigate('/')
    }


    return (
        <div className="flex justify-between">
            <div>
                <Link to="/">Kasem</Link>
            </div>
            <div>
                <ul>
                    {
                        user ? ( <li><button onClick={handleLogOut}>LogOut</button></li>) : ( 
                        <>  
                            <div className="flex gap-2">
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            </div>
                        </>)
                    }
                    
                    
                </ul>
            </div>
        </div>
    );
};

export default Header;