import Loader from 'react-loaders';
import './index.scss';

const Contact = () =>{
    return(
        <>
        <div className= "container">
            <h1 className="header">
                Contact Me
            </h1>

        </div>
        <Loader type="ball-pulse-sync" />
        </>
    )
}

export default Contact;