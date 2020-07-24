import React from "react";
import classes from "./footer.module.css";

const Footer = () => {

    

    return (
        <footer
      className= {classes.footer}
      style={{
        backgroundColor: "black",
      
       
      }}
    >
      <div class="footer-copyright text-white text-center py-3">
        © 2020 Copyright
        
        <a href="/" style={{textDecoration:"none" , color:"green" , fontSize:"1.4em" , fontWeight:"bolder" }}> prabhjotkaur</a>
      

      </div>
    </footer>
    )
}

export default Footer;