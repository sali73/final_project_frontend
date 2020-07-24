import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Button, Typography ,} from "@material-ui/core"
const useStyles = makeStyles({
  body: {
      padding: '0px 100px 40px 80px'
  },
   flexText: {
       margin: '60px 20px',
       padding: '30px',
       fontSize: '1rem',
       color: '#3F442C',

   },
   td: {
    border: '1px solid black',
    borderCollapse: 'collapse',
    padding: '15px',
    textAlign: 'left'
    },
   th: {
    border: '1px solid black',
    borderCollapse: 'collapse',
    padding: '15px',
    textAlign: 'left'
    },
    table: {
      width:'100%',
      border: '1px solid black',
      borderCollapse: 'collapse'
      },
    header: {
        color: 'red',
        textAlign:'center',
        textShadow: '2px 2px',
        fontSize: '2.8em',
        marginBottom: '70px'
     },
});
const Home = (props) => {
     const [course, setCourse] = React.useState(null);
       React.useEffect(() => {
       getInfo();
     }, []);
    // Get from the API
    const getInfo = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/v1/course/');
        const result = await response.json();
        setCourse(result);
     }

     const classes = useStyles()
      return (
            <body >
                <div className={classes.body} >
                    <Typography className={classes.header} variant="h3" >WELCOME SAS COLLEGE </Typography>
                    <div >
                        <Typography >
                            "Find a career that makes you happy every morning you wake up."
                        </Typography>
                        <Typography style={{display:'flex'}}  >
                               <img style={{ width:'220px', paddingRight:'20px'}} src='https://tse2.mm.bing.net/th?id=OIP.Cnwy5E1c99f4VsFTCs4_nwHaE1&pid=Api&P=0&w=263&h=173' />
                               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                        </Typography>
                        <Typography>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur blanditiis cupiditate, dignissimos dolorem dolorum enim excepturi id ipsum laudantium magnam, magni maiores nisi, nulla porro quas qui quo quos ratione repellat. Ab aut consectetur corporis, cupiditate, dignissimos dolore ducimus et eveniet facere fugit harum in itaque iusto laudantium libero molestiae nihil nulla officiis pariatur quae qui quidem recusandae repellat rerum similique unde velit? Ad adipisci amet aspernatur delectus deleniti dolor dolorem dolores, ducimus earum eligendi enim eum ex harum illo incidunt ipsum iusto laborum laudantium magni molestias mollitia nesciunt numquam officiis possimus quod quos sint sit temporibus tenetur, unde.</p>
                        </Typography>
                        <Typography style={{display:'flex'}}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, modi, voluptatem? Alias aliquid, aperiam at autem consequatur consequuntur corporis cum cumque cupiditate deleniti error explicabo facere harum labore magni maxime minima nam natus nemo non nulla numquam officia praesentium quae quasi quia quisquam recusandae reiciendis rem tempora temporibus totam vel!</p>
                            <img style={{ width:'240px', paddingRight:'20px'}} src='https://tse2.mm.bing.net/th?id=OIP.qreriz7qMmj7tHnqjGQoAAHaEK&pid=Api&P=0&w=303&h=171' />
                        </Typography>
                        <Typography>
                            <h4> Taking the time to identify your interests and skills will help you be successful and happy in your work.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad cum quibusdam tempora! Ab aperiam culpa cum debitis deleniti dolore dolorum ducimus exercitationem explicabo itaque laboriosam laudantium magni nesciunt nostrum, nulla officiis optio quo quos ratione repellendus, sapiente similique sint sit sunt tempore tenetur voluptatibus? A accusantium assumenda aut, commodi cumque exercitationem hic maiores maxime mollitia nobis obcaecati omnis pariatur praesentium quaerat quas quasi rerum sed, sit velit veritatis voluptas voluptates voluptatum! At consequuntur culpa cumque facilis minima modi rerum voluptates? Aliquam aperiam architecto consequuntur cumque, doloribus ducimus, eveniet exercitationem labore maxime nulla porro, possimus qui quo voluptatibus voluptatum? Accusantium alias et ipsa ipsum possimus reprehenderit sequi? Accusamus at autem blanditiis commodi consequatur cupiditate, dolores eaque, eos expedita id impedit iste magnam magni neque obcaecati odio porro praesentium quas quasi quis, quo quos ratione sequi tempora vero! Ab accusamus, animi, consequatur corporis delectus distinctio dolor dolorum eos neque nihil obcaecati officia pariatur perspiciatis quis voluptas voluptate, voluptatum. Architecto beatae consectetur consequuntur dignissimos, eaque enim, est in inventore maiores provident quam, quo sint totam unde voluptatibus. Adipisci architecto commodi culpa distinctio doloremque, dolores, eaque eius eveniet expedita explicabo iste iusto natus neque odio pariatur perferendis quaerat, quod recusandae reprehenderit vero! Nesciunt?</p>
                        </Typography>

                    </div>
                    <h2 style={{ textAlign: 'center' , paddingTop:'40px', color: 'red'}}>OUR COURSES</h2>
                    <table className={classes.table}>
                         <tr style={{ backgroundColor:'black' , color:'white'}} >
                            <th className={classes.th} >Course ID</th>
                            <th className={classes.th} >Title</th>
                            <th className={classes.th} >Cost</th>
                            <th className={classes.th} >Duration</th>
                         </tr>
                         {course ? course.objects.map((courses) => {
                            return (
                                <tr>
                                    <td className={classes.td} >{courses.course_id}</td>
                                    <td className={classes.td} >{courses.title}</td>
                                    <td className={classes.td} >${courses.cost}</td>
                                    <td className={classes.td} >{courses.duration} months</td>
                                </tr>


                            )
                         })
                         : "Loading..."
                         }
                    </table>
            </div>
          </body>

  );
}
export default Home





