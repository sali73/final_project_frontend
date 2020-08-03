import React, { Component } from "react";
import '../App.css'
class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div >
        <main style={{padding: '0px 100px 40px 80px'}}>
            <h1 style={{paddingLeft:'200px' ,color: 'red',paddingBottom:'30px', textAlign:'center', textShadow: '2px 2px', fontSize: '2.8em', fontFamily: 'Lato',paddingTop:'10px'}}className='about'>CONTACT US</h1>
                <div className='about-text' style={{ marginLeft:'30px', color:'#3F442C'}}>
                    <p style={{fontSize:'3.2vh'}}>Find us on social media by clicking on our Instagram, Facebook, or Twitter.</p>

                    <a href="https://www.twitter.com/" style={{fontSize:"4.4vh", textDecoration:"none", marginRight:"4vh"}}><i className="fa fa-twitter"></i></a>
                    <a style={{fontSize:"4.4vh",  textDecoration:"none", marginRight:"4vh"}} href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                    <a style={{fontSize:"4.4vh",  textDecoration:"none", marginRight:"4vh"}} href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>

                    <h4 style={{paddingTop:"3vh", fontSize:'2.9vh'}}>Have Questions ? </h4>
                    <p style={{fontSize:'2.5vh', marginBottom:'50px'}}>Call us at 888-888-8888 | Email us at sas@gmail.com</p>
                    <div></div>
                      <div >
                          <div className='map' >
                              <iframe title="My Tracker" className='mapping' style={{ width:'700px' , height:'350px'}} src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="90" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                          </div> 
                          
                        </div>   
              </div>
                
        </main>
        </div>
      </div>



    )
  }
}
export default Contact;