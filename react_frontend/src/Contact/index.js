import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div >
        <main style={{padding: '0px 100px 40px 80px'}}>
            <h1 style={{paddingLeft:'200px' ,color: 'red',paddingBottom:'60px', textAlign:'center', textShadow: '2px 2px', fontSize: '2.8em', }}>CONTACT US</h1>
                <div style={{ marginLeft:'60px', color:'#3F442C'}}>
                    <p style={{fontSize:'3.4vh'}}>Find us on social media by clicking on our Instagram, Facebook, or Twitter.</p>

                    <a href="https://www.twitter.com/" style={{fontSize:"4.4vh", textDecoration:"none", marginRight:"4vh"}}><i className="fa fa-twitter"></i></a>
                    <a style={{fontSize:"4.4vh",  textDecoration:"none", marginRight:"4vh"}} href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                    <a style={{fontSize:"4.4vh",  textDecoration:"none", marginRight:"4vh"}} href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>

                    <h4 style={{paddingTop:"3vh", fontSize:'2.9vh'}}>Have Questions ? </h4>
                    <p style={{fontSize:'2.5vh', marginBottom:'500px'}}>Call us at 888-888-8888 | Email us at sas@gmail.com</p>
                </div>
        </main>
        </div>
      </div>



    )
  }
}
export default Contact;