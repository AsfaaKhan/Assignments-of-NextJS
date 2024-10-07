import Link from "next/link"
import cssStyle from "./about.module.css"
const AboutPage =()=>{
    return(
        <div>
             <ul className="navbar">
                <li className="nav-item"><Link href="/homePage">Home</Link></li>
                <li className="nav-item"><Link href="/aboutPage">About</Link></li>
                <li className="nav-item"><Link href="/contactPage">Contact</Link></li>
                <li className="nav-item"><Link href="/servicesPage">Services</Link></li>
                <li className="nav-item"><Link href="/resumePage">Resume</Link></li>
                
                
            </ul>
            <h1 className={cssStyle.color2}>This Is My About Page ! </h1>
        </div>
    )
}
export default AboutPage