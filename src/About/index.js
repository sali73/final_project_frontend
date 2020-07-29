import React from "react";
import '../App.css'
const About= (props) => {
      return (
            <div style={{padding: '0px 100px 40px 80px'}}>
                <h1 style={{color: 'red', textAlign:'center', textShadow: '2px 2px', fontSize: '2.8em', marginBottom: '70px'}} className='about' >ABOUT US</h1>

                <div style={{ marginLeft:'60px', marginBottom:'90px', width:'900px' , color:'#3F442C'}} className='about-text'>
                    <h2>Thinking about going to college?</h2>
                    <p style={{fontSize:"2.4vh"}}>A college degree can be a great stepping stone to success. It can help you land a job, advance in your career, and earn more money.</p>
                    <h4>There are two main types of college degrees:</h4>
                    <p style={{fontSize:"2.4vh"}}>Associate degrees usually take two years of full-time college work, but some can take up to four years.
                    Bachelor's degrees usually require four years of full-time college work, but some take longer.
                    Types of colleges Learn more about the different types of colleges and universities.</p>
                    <ul>
                        Think about what would be best for you:
                        <li>Small or large</li>
                         <li>Public or private</li>
                         <li>Two-year or four-year</li>
                         <li>A career, technical, or academic focus</li>
                    </ul>
                    <p style={{fontSize:"2.4vh"}}>FederalStudentAid offers good tips for choosing the right type of college for you.</p>
                    <h2>What if I don't feel ready for college?</h2>
                    Lots of people who think they aren't right for college end up being very successful at a college or university. Everybody has barriers—such as money, time, academic background, or other responsibilities—that can get in the way of earning a degree.
                    The key is to figure out what your strengths and challenges are—and to make a plan to succeed in spite of, or because of, your circumstances.
                    Check out some of these resources to help you make a plan that's best for you.
                    Federal Student Aid's Prepare for College answers many common questions about beginning a college program.
                    The College Scorecard helps you make the smartest college choices with information on total costs, graduation rates, and student success.
                    You can look up schools and programs in your neighborhood at Local Training Finder. Look for contact information for admissions offices to ask questions in person.
                    How will I pay for college
                    A huge price tag can be the number one fear when people think about college. The good news is that there are many sources of money and other assistance to help you begin and complete college. Visit Pay for school to learn more.
                    <h2>What if I need extra help getting into college and finishing?</h2>
                    <p>Colleges want you to succeed as much as you do! Every college has student services offices to help you thrive, from tutoring and advising to reading, writing, and math labs. Disability services accommodate students' unique learning needs. Counseling services for both personal and academic success are offered at almost all colleges.
                        You will also find TRIO programs, sponsored by the U.S.
                        Department of Education, at some public colleges and universities around the country. They can help you both get into college and succeed once you start. To find out what's available at schools you are interested in, look up the school in the Local Training Finder,
                        and contact them to ask about TRIO and other student services programs.</p>
                </div>
            </div>
  );
}
export default About