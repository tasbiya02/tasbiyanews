import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";



// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
     
      <Navbar/>
       <div className="main-content">
        {children}
        <br/>
       </div>
       <br/>
      <Footer/>
        </body>
    </html>
  );
}
