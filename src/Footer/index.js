import React from 'react';
const Footer = () =>{
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div style={{ backgroundColor:'#778054', display:"grid",paddingTop:"3vh" , gridTemplateColumns:'50% 70%' , justifyItems:'center'}} >
            <div >
                <ul style={{listStyle:'none' , textDecoration:"none"}}>
                    <li><a style={{color:'#303030'}}href='#'>Become a Sales Partner</a></li>
                    <li><a style={{color:'#303030'}} href='#'> Careers </a></li>
                    <li><a style={{color:'#303030'}} href='#'>Terms & Conditions</a></li>
                    <li><a style={{color:'#303030'}} href='#'>Privacy Policy</a></li>
                </ul>
            </div>
            <div style={{textAlign:"center" , paddingLeft:'30px'}}>
                <h6 style={{color:'#303030'}}> FOLLOW US</h6>
                <div style={{display: "flex", justifyContent:"space-evenly"}}>
                <a href="https://www.twitter.com/" style={{fontSize:"4vh", color:"black", textDecoration:"none", marginRight:"1vh"}}>
                    <i className="fa fa-twitter" />
                </a>
                <a style={{fontSize:"4vh", color:"black", textDecoration:"none", marginRight:"1vh"}} href="https://www.instagram.com/">
                <i className="fa fa-instagram" />
                </a>
                <a style={{fontSize:"4vh", color:"black", textDecoration:"none"}} href="https://www.facebook.com/">
                    <i className="fa fa-facebook"></i>
                </a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;