
import React from "react";
import { FaEnvelope, FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Footer() {
    return(
        <footer className="text-center text-lg-start bg-body-tertiary ">
            <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-light bg-dark ">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with me on social networks:</span>
                </div>

                <div>
                    <a 
                        href="https://www.facebook.com/Boukrasouhaib" 
                        rel="noreferrer"
                        target="_blank"
                        className="me-4 text-reset text-decoration-none ">
                        <i> <FaFacebook/> </i>
                    </a>
                    <a 
                        href="https://twitter.com/SouhaibBoukra" 
                        rel="noreferrer"
                        target="_blank"
                        className="me-4 text-reset text-decoration-none">
                        <i> <FaTwitter/> </i>
                    </a>
                    <a
                        href="mailto:souhaibboukra@gmail.com" 
                        rel="noreferrer"
                        target="_blank"
                        className="me-4 text-reset text-decoration-none">
                        <i><FaEnvelope/></i>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/boukra-souhaib-097902238/" 
                        rel="noreferrer"
                        target="_blank"
                        className="me-4 text-reset text-decoration-none">
                        <i> <FaLinkedin/></i>
                    </a>
                    <a 
                        href="https://github.com/Crypuim19" 
                        rel="noreferrer"
                        target="_blank"
                        className="me-4 text-reset text-decoration-none">
                        <i> <FaGithub/> </i>
                    </a>
                </div>
            </div>  
        </footer>
    );
}