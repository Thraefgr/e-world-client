import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>


                    <div className='sb_footer-links_div'>
                        <h2>Team</h2>
                        <p>Ferhat Yenilmez</p>
                        <p>Bünyamin Kalkan</p>
                        <p>Barış Keskin</p>
                        <p>Hilal Dedek</p>
                        <p>Hamit Burak Koçtaş</p>
                        <p>Umut Arif</p>
                    </div>
                    <div className='sb_footer-links_div'>
                        <h2>Instagram</h2>
                        <p>@gigachadFerhad</p>
                        <p>@bnymn_klkn</p>
                        <p>@keserbaros1</p>
                        <p>@hilaldedek</p>
                        <p>@hburakkoctas</p>
                        <p>@_umut_arif</p>
                    </div>
                    <div className='sb_footer-links_div'>
                        <h2>Linkedin</h2>
                        <p>linkedin.com/ferhat-yenilmez/</p>
                        <p>linkedin.com/bunyamin-kalkan/</p>
                        <p>linkedin.com/keserbaros1/</p>
                        <p>linkedin.com/hilal-dedek/</p>
                        <p>linkedin.com/hamit-burak-koctas/</p>
                        <p>linkedin.com/oumout-arif/</p>
                        
                    </div>
                    <div className='sb_footer-links_div'>
                        <h2>Github</h2>
                        <p>https://github.com/Thraefgr/e-world-client</p>
                        <br />
                        <p>https://github.com/bunyaminkalkan/e-world-api</p>
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
