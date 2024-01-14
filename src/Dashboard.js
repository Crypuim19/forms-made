import { useNavigate } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function Dashboard () {

   
    const navigate = useNavigate();

    const handelSignupClick = () => {
        navigate('/Signup');
    };

    const handelLoginClick = () => {
        navigate('/login');
    };

    return(

        <div>
            <Header/>

        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-secondary-subtle">
                <div className="mb-4">
                    <h3>Create form easy with <span >Cryform</span></h3>
                </div>

                <div className="btns">
                    <button 
                        className="btn btn-primary m-2"
                        onClick={handelSignupClick}
                        >Signup
                    </button>   
                    <button 
                        className="btn btn-primary "
                        onClick={handelLoginClick}
                        >Login
                    </button>   
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}