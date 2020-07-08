import React from "react";
import Form from "./form.js";
import {Button, Typography ,} from "@material-ui/core"
import "../App.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  body: {
    padding: '0px 100px 40px 80px'
  },
  header: {
    color: 'red',
    textAlign:'center',
    textShadow: '2px 2px',
    fontSize: '2.8em',
  },
  formHeader:{
    color: '#3F442C' ,
    paddingTop:'60px',
    textAlign:'center'
  },
  root: {
    maxWidth: 770,
    display: 'flex',
    margin:'30px',
    justifyContent: 'center',
  },
  media: {
    height: 245,
    padding:'20px'
  },
  cards: {
    display: "flex",
  },
  allCards: {
    paddingLeft:'120px'
  }
});


const Student = (props) => {
  const classes = useStyles()
  // State to hold the Student
  const [student, setStudent] = React.useState(null);
  const [ setAttendance] = React.useState(null);
  // State to hold the Student the user wants to edit
  const [editStudent, setEditStudent] = React.useState({
    first_name:'',
    last_name:'',
    email: '',
    dob:'',
    phone:'',
    student_id:'',
    profile_pic:'',
    preferred_language:'',
  });
  // Holds blank form data
  const blank = {
    email: '',
    dob:'',
    phone:'',
    first_name:'',
    last_name:'',
    student_id:'',
    profile_pic:'',
    preferred_language:''
  }

  // Get from the API
  const getInfo = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/v1/Student/');
    const result = await response.json();
    setStudent(result);

    // const respon = await fetch('http://127.0.0.1:8000/api/v1/attendance/');
    // const results = await respon.json();
    // console.log(results);
    // setAttendance(results);
  };
  // Hook to get the Student when the component loads
  React.useEffect(() => {
    getInfo();
  }, [getInfo]);
  const handleCreate = async (data) => {
     await fetch('http://127.0.0.1:8000/api/v1/Student/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    getInfo(); // Update the list
  };
  const handleDelete = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/v1/Student/${id}/`, {
      method: "DELETE",

    });
    getInfo(); // Update the list
  };
  const handleSelect = async (student) => {
    setEditStudent(student);
  };
  const handleEdit = async (data) => {
    await fetch(`http://127.0.0.1:8000/api/v1/Student/${data._id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(data);
    // Update list of Student
    getInfo();
  };
  //   function handleClick(e) {
  //   e.preventDefault();
  //   console.log('The link was clicked.');
  //   e.currentTarget.style.backgroundColor = 'green';
  //   var x = document.getElementById("demo").style.visibility='visible'
  // }


  return (
    <div className={classes.body}>
      <div>
      <Typography className={classes.header} variant="h3" >Student Records</Typography>
      <div>
        <Typography  className={classes.formHeader} variant="h5" >Add a new student</Typography>
          <div className={classes.form}>
          <Form id="demo" initial={blank} handleSubmit={handleCreate} />
        </div>
      </div>
      <article>
        <Typography className={classes.formHeader} variant="h5" >Edit for currently student</Typography>
        <Form  initial={editStudent} handleSubmit={handleEdit} />
        </article>
      <main >
        <h1 style={{ color:'red',textDecoration: 'underline', textAlign:'center', paddingTop:'60px'}}> Currently Student List </h1>
        <div className={classes.allCards}>
          {student ? student.objects.map((person) => {
              return (
                  <Card className={classes.root}>
                    <CardMedia title="Contemplative Reptile"><img className={classes.media} src={person.profile_pic} alt='pic' /></CardMedia>
                    <CardActionArea>
                        <CardContent key={person.id}>
                            <Typography gutterBottom variant="h6" component="h2" >
                                Full Name: {person.first_name} {person.last_name}
                            </Typography>
                            <Typography variant="body1" component="p">
                                Email: {person.email}<br/>
                                Phone Number: {person.phone}<br/>
                                Date Of Birth: {person.dob}<br/>
                                Student ID: {person.student_id}<br/>
                                Language: {person.preferred_language}
                            </Typography>
                        </CardContent>

                    <CardActions>
                      <Button variant="contained" color="secondary" onClick={() => {handleDelete(person.id)}}>
                        Delete
                      </Button>
                      <Button  variant="contained" color="secondary" onClick={() => {handleSelect(person)}}>
                        Edit
                      </Button >
                    </CardActions>
                    </CardActionArea>
                  </Card>
              );
            })
            : "Loading..."
          }
        </div>
        </main>

      </div>
    </div>
  );
}
export default  Student



