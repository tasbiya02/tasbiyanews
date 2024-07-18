import Link from "next/link";
import "./globals.css";
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Hey! I Am Tasbiya</h1>
          <p>Ambitious Software Developer with excellent frontend and backend development skills.</p>
          <div className="hero-buttons">
            <Link href="https://drive.google.com/file/d/1UKv_SHElsCCjMCxXuXKNRHnkxZdpEwOw/view?usp=drivesdk">
              Resume
            </Link>
          </div>
          <div className="hero-icons">
            <Link href="https://github.com/tasbiya02">
              <i className="fab fa-github"></i>
            </Link>
            <Link href="https://www.linkedin.com/in/tasbiya-21ba2a23a/">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
        <Image src="/profile.jpeg" alt="Profile" className="profile-image-hero" width={220} height={220}/>
     
        <div className="profile-section hero-section">
            <p className="paragraph-home">
              It is a news website that brings together live news from various sources into one user-friendly platform. Here’s a brief overview of what it offers:
            </p>
        <ul className="list-home">
          <li><strong>Live News Updates:</strong> The website gathers real-time news from several reputable sources, ensuring that users always have access to the latest information.</li>
          <li><strong>Smooth Navigation:</strong> The site is designed to handle large amounts of news efficiently, allowing users to browse through articles easily with features like pagination.</li>
          <li><strong>Modern and Responsive Design:</strong> Built with the latest web technologies, the website offers a sleek and modern look that works well on both desktop and mobile devices.</li>
          <li><strong>Voice Assistant Integration(using chrome extension):</strong> Users can navigate the website using voice commands such as "next page or go to next page", "previous page", "refresh", "scroll down", and "scroll up", making it more accessible and interactive.</li>          
        </ul>

        </div>
        <div className="link-container">
          <Link href="/news" className="link-home">
            <i className="fas fa-arrow-right arrow"></i> Click here to go
          </Link>
        </div>
      </section>
    </main>
  );
}
