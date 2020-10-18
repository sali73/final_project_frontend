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
import '../App.css'

const useStyles = makeStyles({
  body: {
    padding: '0px 100px 40px 80px',
  },
  header: {
    color: 'red',
    textAlign:'center',
    textShadow: '2px 2px',
    fontSize: '2.8em',
    marginBottom: '10px',
    fontFamily: 'Lato',
    paddingTop:'40px'
  },
  formHeader:{
    color: '#3F442C' ,
    paddingTop:'60px',
    textAlign:'center',
    fontFamily: 'Lato',
  },
  search:{
    fontFamily: 'Lato',
    textAlign:'center',
    margin:"auto",
    marginTop:"30px"
  },
  root: {
    maxWidth: 770,
    display: 'flex',
    margin:'30px',
    justifyContent: 'center',
  },
  media: {
    height: '245px',
    width:'200px',
    padding:'20px',
  },
  cards: {
    display: "flex",
  },
  allCards: {
    paddingLeft:'120px',
    fontFamily: 'Lato',
  }
});


const Student = (props) => {
  const classes = useStyles()
  // State to hold the Student
  const [student, setStudent] = React.useState(null);
  const [key_word, setKey_word] = React.useState(' ');

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
  // Hook to get the Student when the component loads
  React.useEffect(() => {
    getInfo();
  }, []);
  // Get from the API
  const getInfo = async () => {
    const response = await fetch('https://secret-reef-78372.herokuapp.com/api/v1/Student/');
    const result = await response.json();
    setStudent(result);

  };
  const handleCreate = async (data) => {
    await fetch('https://secret-reef-78372.herokuapp.com/api/v1/Student/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    getInfo(); // Update the list
  };
  const handleDelete = async (id) => {
    await fetch(`https://secret-reef-78372.herokuapp.com/api/v1/Student/${id}/`, {
      method: "DELETE",

    });
    getInfo(); // Update the list
  };
  const handleSelect = async (student) => {
    setEditStudent(student);
  };
  const handleEdit = async (data) => {
    await fetch(`https://secret-reef-78372.herokuapp.com/api/v1/Student/${data._id}/`, {
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
  const searchHandler = event => {
    setKey_word(event.target.value) ;
    console.log(setKey_word)
}
  const searchStudents = (keyWord) => {
    return x=>{
        return x.first_name.includes(keyWord)
    }
}
  return (
    <div className={classes.body}>
      <div>
      <Typography  className={classes.header} variant="h3" id='header' >Student Records</Typography>
      <div>
        <Typography className={classes.formHeader} variant="h5" id='text'>Add a new student</Typography>
          <div className={classes.form}>
            <Form initial={blank} handleSubmit={handleCreate} />
          </div>
      </div>
      <article>
        <Typography className={classes.formHeader} variant="h5" id='edit'>Edit for currently student</Typography>
        <Form  initial={editStudent} handleSubmit={handleEdit} />
      </article>
        <div className={classes.search}>
          <form >
            <Typography variant="h5" id='search' style={{color:'red'}}>Search:</Typography>
            <input className="form-control form-control-lg" type="text"  onChange={searchHandler} placeholder="Search by name..." value={key_word}/>
          </form>
        </div>
      <main >
        <h1 style={{ color:'red',textDecoration: 'underline', textAlign:'center', fontSize:'30px' ,paddingTop:'60px',fontWeight:'bolder'}} id='student' > Currently Student List </h1>
        <div className={classes.allCards}>
          {student ? student.objects.filter(searchStudents(key_word)).map((person) => {
              return (
                  <Card className={classes.root} id='cards'>
                    <CardMedia title="Contemplative Reptile"><img className={classes.media} src={person.profile_pic} alt='pic' id='photoCard'/></CardMedia>
                    <CardActionArea >
                        <CardContent key={person.id}>
                            <Typography gutterBottom variant="h6" component="h2"  style={{fontFamily: 'Lato', fontWeight:'bolder' , fontSize:'26px'}}>
                                Full Name: {person.first_name} {person.last_name}
                            </Typography>
                            <Typography variant="body1" component="p" style={{fontFamily: 'Lato'}} >
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



