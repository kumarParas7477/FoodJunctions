import resume from "../../assets/CV.pdf"
import classes from "./Footer.module.css"
const Footer = ()=>{
return <div className={classes.footer}>
<span>Only For Presentation Purpose</span>
<span><a target="_blank" href="https://www.linkedin.com/in/paras-kumar-686b85143/">  Paras kumar</a></span>
<span> <a href={resume} download>Download CV </a></span>
</div>
}

export default Footer;