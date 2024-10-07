import Link from "next/link"
import cssStyle from "./resume.module.css"
const resumePage =()=> {
    return (
        <div>
            <ul className="navbar">
                <li className="nav-item"><Link href="/homePage">Home</Link></li>
                <li className="nav-item"><Link href="/aboutPage">About</Link></li>
                <li className="nav-item"><Link href="/contactPage">Contact</Link></li>
                <li className="nav-item"><Link href="/servicesPage">Services</Link></li>
                <li className="nav-item"><Link href="/resumePage">Resume</Link></li>


            </ul>
            <h1 className={cssStyle.color5}>This Is My Resume Page </h1>
        </div>
    )
}
export default resumePage