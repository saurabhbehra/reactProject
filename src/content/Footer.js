import React from 'react'
import Logo from '../images/logo.jpeg'
import A from '../images/A.png'

const Footer = () => {
    return (
        <React.Fragment>
            <footer class="page-footer font-small teal pt-4" style={{backgroundColor: "#58D68D", marginTop:"0rem"}}>
                <div class="container-fluid text-center text-md-left">
                    <div class="row">
                        <div class="col-md-4 mt-md-0 mt-3"></div>
                         <div class="col-md-4 mt-md-0 mt-3 text-center">
                            <a href="/"><img src={Logo} 
                             style={{width:"5rem",height:"3.9rem",marginTop:"-0.3rem",marginLeft:"0rem",marginBottom:"1rem"}} /></a>
                            <h5 class=" font-weight-bold">Evergreen Public School</h5>
                         </div>
                         <hr class="clearfix w-100 d-md-none pb-3" />
                         <div class="col-md-4 mb-md-0 mb-3"></div>
                    </div>              
                </div>
                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://www.evergreenpublicschool.org.in">www.evergreenpublicschool.org.in</a><br />
                    <a href="https://www.linkedin.com/in/saurabh-behra-b24652155/" style={{color:"white"}}>Designed and Developed By 
                    <img src={A} style={{height:"2rem",width:"2rem"}} /></a>
                </div>

            </footer>
        </React.Fragment>
    )
}

export default Footer
