import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../../public/style.css'

export default function Footer() {
  return (
    <div className="footer mt-5 bg-body-tertiary" >
      <div>
        <h5><Link href="https://tasbiyanews.vercel.app/" className="footer-text" style={{textDecoration:"none"}} >Developed by tasbiya</Link> </h5>
      </div>

      <div>
      <Link href="https://github.com/tasbiya02" target="_blank" className="text-white footer-text" style={{margin: "0 10px",  fontSize: "2em"}}><i className="fa-brands fa-github" style={{color:"#ff6666"}}></i></Link>
      <Link href="https://www.linkedin.com/in/tasbiya-21ba2a23a/" target="_blank" className="text-white footer-text" style={{margin: "0 10px",  fontSize: "2em"}}><i className="fab fa-linkedin-in" style={{color:"#ff6666"}}></i></Link>
      </div>
  </div>
    
  )
}
