import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Header from "./component/Header";
import Footer from "./component/Footer";





export default function Login () {
   
   
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState ('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);

    const navigate = useNavigate();

    const handelsubmit = (e) => {
        e.preventDefault();

        if (!username || !password){
            setError('please fill both username and password');
            setShowError(true);
            return;
        }
        
        setError('');
        navigate('/form');
    };   

    const handelClose = () => {
        setShowError(false);
    }
    

    return (
        <div>
            <Header/>

    <div 
        className="d-flex justify-content-center align-items-center vh-100 bg-secondary-subtle">
        <div 
            className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div 
                className="card-body">
                    <h4 className="card-title text-center" >Login</h4>
                <form 
                onSubmit={handelsubmit}>

                    
                    <div className="mb-3">
                        <label 
                            className="form-label"
                            htmlFor="username"
                            >username</label>
                        <input
                            className="form-control"
                            placeholder="Enter your username"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                    </div>     

                    <div className="mb-3" >   
                        <label 
                            className="form-label "
                            htmlFor="passwrod"
                            >Password</label>

                        <input 
                            className="form-control"
                            placeholder="Enter your password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="centerBtn">
                        <button 
                        className="btn btn-primary "
                        type="submit"
                        >Login
                        </button>   
                    </div>
                </form>
            </div>
        </div>   

        {showError && (
            <div className="alert alert-danger position-absolute top-0 start-50 translate-middle-x" role="alert">
                {error}
                <button type="button" className="btn-close" aria-label="close" onClick={handelClose} ></button>
                </div>
        )}
     </div> 
     <div>
                <Footer/>
    </div>    
     </div>  
    );
}