import React from "react";
import Form from "./form";
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
    marginBottom: '40px',
    fontFamily: 'Lato',
    paddingTop:'70px'
  },
  formHeader:{
    color: '#3F442C' ,
    padding:'60px 0px 10px 0px',
    textAlign:'center',
    fontFamily: 'Lato',
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
    padding:'20px'
  },
  cards: {
    display: "flex",
  },
  allCards: {
    paddingLeft:'120px'
  }
});
const Data = (props) => {
  const classes = useStyles()
  const [instructor, setInstructor] = React.useState(null);
  // const [offering, setOffering] = React.useState(null);
  const [editInstructor, setEditInstructor] = React.useState({
    instructor_first_name :'',
    instructor_last_name:'',
    profile_pic: '',
    email:'',
    phone :'',
    salary:'',
    commission:'',
    date_hired:'',
  });
  const blank = {
    instructor_first_name :'',
    instructor_last_name:'',
    profile_pic: '',
    email:'',
    phone :'',
    salary:'',
    commission:'',
    date_hired:'',
  }
  React.useEffect(() => {
    getInfo();
  }, []);
  const getInfo = async () => {
    const response = await fetch('https://secret-reef-78372.herokuapp.com/api/v1/instructor/');
    const result = await response.json();
    setInstructor(result);

  };
  const handleCreate = async (data) => {
   await fetch('https://secret-reef-78372.herokuapp.com/api/v1/instructor/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    getInfo(); // Update the list
  };
  const handleDelete = async (id) => {
    await fetch(`https://secret-reef-78372.herokuapp.com/api/v1/instructor/${id}/`, {
      method: "DELETE",
    });
    getInfo(); // Update the list
  };
  const handleSelect = async (instructor) => {
    setEditInstructor(instructor);
  };
  const handleEdit = async (data) => {
      await fetch(`https://secret-reef-78372.herokuapp.com/api/v1/instructor/${data._id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(data);
    getInfo();
  };
  return (
    <div className={classes.body}>
      <div>
      <Typography className={classes.header} variant="h3" id='header' >instructor Records</Typography>
      <div>
        <Typography  className={classes.formHeader} variant="h5" id='text' >Add a new instructor</Typography>
          <div className={classes.form}>
              <Form  initial={blank} handleSubmit={handleCreate} />
          </div>
      </div>
      <article>
        <Typography className={classes.formHeader} variant="h5" id='edit' >Edit for currently instructor</Typography>
        <Form  initial={editInstructor} handleSubmit={handleEdit} />
        </article>
      <main >
        <h1 style={{ color:'red',textDecoration: 'underline', textAlign:'center',fontSize:'30px' ,paddingTop:'60px',fontWeight:'bolder'}} id='student'> Currently instructor List </h1>
        <div className={classes.allCards}>
          {instructor ? instructor.objects.map((person) => {
              return (
                  <Card className={classes.root} id='cards'>
                    <CardMedia title="Contemplative Reptile"><img className={classes.media} src={person.profile_pic} alt='pic' id='photoCard'/></CardMedia>
                    <CardActionArea>
                        <CardContent key={person.id}>
                            <Typography gutterBottom variant="h6" component="h2" style={{fontFamily: 'Lato', fontWeight:'bolder' , fontSize:'26px'}}>
                                Full Name: {person.instructor_first_name} {person.instructor_last_name}
                            </Typography>
                            <Typography variant="body1" component="p" style={{fontFamily: 'Lato'}} >
                                Email: {person.email}<br/>
                                Phone Number: {person.phone}<br/>
                                Date Of Hired: {person.date_hired}<br/>
                                Salary: {person.salary}<br/>
                                Commission: {person.commission}
                            </Typography>
                        </CardContent>

                    <CardActions>
                      <Button variant="contained" color="secondary" onClick={() => {handleDelete(person.id);}}>
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
export default Data






