import './bootstrap-5.0.2-dist/css/bootstrap.min.css';
import './bootstrap-5.0.2-dist/js/bootstrap.min.js';
import{
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    useNavigate,
  } from 'react-router-dom'

function Navbar(){
    const navigate=useNavigate()
    
    const login=useNavigate()
    const home=useNavigate()
    const todo=useNavigate()
    const users=useNavigate()
    const toHome = () => {
        navigate('/');
    };
    const toTask = () => {
        navigate('/Tasks/');
    };
    const toLogin = () => {
        navigate('/Login/');
    };
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active">
                            <a onClick={toHome} className="nav-link">Home<span className="sr-only"></span></a>
                        </li> */}
                        <li className="nav-item">

                            <a onClick={toHome} className="nav-link" href="#"><span className="sr-only"/>Home</a>
                        </li>
                        <li className="nav-item">

                            <a onClick={toTask} className="nav-link" href="#">Todo</a>
                        </li>
                        <li className="nav-item dropdown" >
                            <a href="#" className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-Toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Users
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">

                            <a onClick={toLogin} className="nav-link" href="#">Login</a>
                        </li>
                    </ul>
                    {/* <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>

}
export default Navbar;