import React, { useState } from "react";
import "./styles.scss";

const Form = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("name: ", name)
        console.log("phoneNumber: ", phoneNumber)
        console.log("email: ", email)
        console.log("message: ", message)
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
                </div>
                <div className="field">
                    <label>Phone Number</label>
                    <input 
                        type="text" 
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input 
                        type="text" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Message</label>
                    <textarea 
                        type="text"
                        value={message}
                        onChange={e => setMessage(e.target.value)} />
                </div>
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default Form