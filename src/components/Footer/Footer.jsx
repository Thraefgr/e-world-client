import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>


                    <div className='sb_footer-links_div'>
                        <h2>Follow us on :</h2>
                        <div className='socialmedia'>
                            <Link to='/dotnet'><FontAwesomeIcon className='footer_icon' icon={faInstagram} /></Link>
                            <Link to='/dotnet'><FontAwesomeIcon className='footer_icon' icon={faFacebook} /></Link>
                            <Link to='/dotnet'><FontAwesomeIcon className='footer_icon' icon={faLinkedin} /></Link>
                        </div>
                    </div>
                    <div className='sb_footer-links_div'>
                        <h2>Github</h2>
                        <a href="https://github.com/Thraefgr/e-world-client"><p>https://github.com/Thraefgr/e-world-client</p></a>
                        <br />
                        <a  href="https://github.com/bunyaminkalkan/e-world-api"><p>https://github.com/bunyaminkalkan/e-world-api</p></a>
                    </div>

                    <hr />
                    <div className='sb_footer-below'></div>
                    <div className='sb_footer-copyright'>
                        <p>@{(new Date().getFullYear())} Copyright © All rights reserved.</p>
                    </div>
                    <div className='sb_footer-below-links'>
                        <a href=""><p>Terms and Conditions</p></a>
                        <a href=""><p>Privacy</p></a>
                        <a href=""><p>Security</p></a>
                        <a href=""><p>Cookie Declaration</p></a>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer