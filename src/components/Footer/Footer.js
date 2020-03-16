import React from "react";
import "./styles.scss";
import twitter from '../../images/twitter-square.png';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin-square.png';

const Footer = () => {

    const handleDefaultClick = () => {
        console.log("Default Clicked")
    }

    const handleSocialMediaClick = (social) => {
        switch(social){
            case "twitter":
                console.log("Navigate to Twitter")
                break;
            case "instagram":
                console.log("Navigate to Instagram")
                break;
            case "linkedin":
                console.log("Navigate to LinkedIn")
                break;
            default:
                return
        }
    }

    return(
        <div className="footer">
            <div className="social">
                <img className="icon" src={twitter} onClick={() => handleSocialMediaClick("twitter")}/>
                <img className="icon" src={instagram} onClick={() => handleSocialMediaClick("instagram")}/>
                <img className="icon" src={linkedin} onClick={() => handleSocialMediaClick("linkedin")}/>
            </div>
            <div className="footer-actions">
                <div className="action">
                    <div>Claim Your Venue</div>
                    <div>Venue Login</div>
                </div>
                <div className="action">
                    <div>Terms and Conditions</div>
                    <div>Privacy Policy</div>
                </div>
                <button onClick={handleDefaultClick} className="action defualt-button">Default</button>
            </div>
            <div className="mobile-button-container">
                <button onClick={handleDefaultClick} className="action defualt-button-mobile">Default</button>
            </div>
            
        </div>
    )
};

export default Footer