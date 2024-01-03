import React from 'react'
import ig from '../../images/instagram.png'
import fb from '../../images/facebook.jpg'
import ln from '../../images/linkedin.png'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>


                    <div className='sb_footer-links_div'>
                        <h2>Follow us on :</h2>
                        <div className='socialmedia'>
                            <Link to='/dotnet'><img src={ig} alt="ig" /></Link>
                            <Link to='/dotnet'><img src={fb} alt="fb" /></Link>
                            <Link to='/dotnet'><img src={ln} alt="ln" /></Link>
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
