import { forwardRef } from "react";
import './Nav.css'
function Nav(props, ref){
    return (<> 
        <div className="navContainer" ref={ref}>
            <ul>
                <li className="navItem"><a href="#root">About Me</a></li>
                <li className="navItem"><a href="#root">Skills</a></li>
                <li className="navItem"><a href="#root">Experience</a></li>
                <li className="navItem"><a href="#root">Education</a></li>
                <li className="navItem"><a href="#root">Projects</a></li>
            </ul>
        </div>
    </>)
}
export default forwardRef(Nav);