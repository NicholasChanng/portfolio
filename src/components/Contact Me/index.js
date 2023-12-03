import Loader from 'react-loaders';
import './index.scss';

const Contact = () =>{
    return(
        <>
        <div className= "container contact-page">
            <div className="text-zone">
                <h1>
                    Contact Me
                </h1>
                <p>
                    I am actively seeking internships and jobs in the tech field, <br/>
                    but any opportunties are greatly appreciated. Please feel free <br/>
                    to reach out using the form below. 
                </p>
                <form>
                    <li className="half">
                        <input type = "text" name = "name" placeholder="Name" required/>
                    </li>
                    <li className="half">
                        <input type = "email" name = "email" placeholder="Email" required/>
                    </li>
                    <li>
                        <input type = "text" name= "subject" placeholder="Subject" required/>
                    </li>
                    <li>
                        <textarea name="message" placeholder="Message" required/>
                    </li>
                    <li>
                        <input type="submit" className="flat-button" value="SEND" />
                    </li>
                </form>
            </div>
        </div>
        <Loader type="ball-pulse-sync" />
        </>
    )
}

export default Contact;