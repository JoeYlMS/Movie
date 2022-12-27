import {Link} from "react-router-dom";

import './styles.scss'

const Error = ({className,h1,error,message, btn}) =>  (
    <div className={className ? className : "error_message"}>
        {h1 && <h1>{h1 ? h1 : "Something went wrong..."}</h1>}
        {error && <p>Error: {error ? error : '404'} </p>}
        <p> {message ? message : 'File not found'}</p>
        {btn && <Link to='/'>BACK HOME</Link>}
    </div>
    )
export default Error
