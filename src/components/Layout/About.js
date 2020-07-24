import React from "react";

const About =() => {
    return(
        <div style={{display: "flex", justifyContent: "center"  }}>
            <div class="card" style={{width: "25rem" , margin:"2em 0 2em 0"}}>
  <div class="card-body">
    <h5 class="card-title">About Weather Application</h5>
    <h6 class="card-subtitle mb-2 text-muted">This app is developed by Prabhjot Kaur</h6>
    <p class="card-text"> Weather app is designed to provide details about weather forecast. React framework is used to build this application.</p>
    <a href="/" class="card-link">Home</a>
   
  </div>
</div>
        </div>
    )
}

export default About;