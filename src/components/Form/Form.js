import React, { useState } from "react";
import "./styles.scss";

const Form = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const initialValidation = {}
    const [validation, setValidation] = useState(initialValidation)

    const validated = () => {
        let newValidation = {}
        const allValidated = () => {
            for (let key of Object.keys(newValidation)){
                if(newValidation[key] === false){
                    return false;
                }
            }
            return true;
        }
        if(name === ""){
            newValidation.name = true
        }
        if(email === ""){
            newValidation.email = true
        }
        if(phoneNumber === ""){
            newValidation.phoneNumber = true
        }
        if(message === ""){
            newValidation.message = true
        }

        setValidation(newValidation);
        console.log(newValidation)

        if(allValidated()){
            return true;
        }
        return false;
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(validated()){
            console.log("name: ", name)
            console.log("phoneNumber: ", phoneNumber)
            console.log("email: ", email)
            console.log("message: ", message)
        }
    }

    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="report">Report a Problem</div>
                <div className="field">
                    <label>Your Name</label>
                    <input 
                        type="text" 
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                    { validation.name && <div className="error-message">Please Enter a Name</div> }
                </div>
                <div className="field">
                    <label>Phone Number</label>
                    <input
                        type="text" 
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}/>
                    { validation.phoneNumber && <div className="error-message">Please Enter a Phone Number</div>}
                </div>
                <div className="field">
                    <label>Email</label>
                    <input 
                        type="text" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                    { validation.email && <div className="error-message">Please Enter a Email</div> }
                </div>
                <div className="field">
                    <label>Message</label>
                    <textarea 
                        type="text"
                        value={message}
                        onChange={e => setMessage(e.target.value)} />
                    { validation.message && <div className="error-message">Please Enter a Message</div>}
                </div>
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default Form