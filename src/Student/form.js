import React from 'react';
import {Button} from "@material-ui/core"
import "../App.css"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
          // display:'flex'

      },
    },
  }),
);
export default (props) => {
     const classes = useStyles();
    const [formData, setFormData] = React.useState(props.initial);
    React.useEffect(() => {
        setFormData(props.initial);
    }, [props.initial]);
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    return (
           <form style={{border:'2px solid rgba(119, 128, 84,.7)' , width:'700px',paddingBottom:'10px', paddingTop:'10px',paddingLeft:'80px',  marginLeft:'115px'}} className={classes.root} noValidate autoComplete="off" id='root'>

               <TextField id="standard-basic"
                    type="char"
                    name="first_name"
                    value={formData.first_name}
                    placeholder="first name"
                    onChange={handleChange}

                />
                <TextField id="standard-basic"
                    type="char"
                    name="last_name"
                    value={formData.last_name}
                    placeholder="last name"
                    onChange={handleChange}

                />
                <TextField id="standard-basic"
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="email"
                    onChange={handleChange}
                    className=" "
                />
                <TextField id="standard-basic"
                    type="Date"
                    name="dob"
                    value={formData.dob}
                    placeholder="dob"
                    onChange={handleChange}
                    className=" "
                />
                <TextField id="standard-basic"
                    type="phone"
                    name="phone"
                    value={formData.phone}
                    placeholder="phone"
                    onChange={handleChange}
                    className=" "
                />
                <TextField id="standard-basic"
                    type="char"
                    name="student_id"
                    value={formData.student_id}
                    placeholder="student id"
                    onChange={handleChange}
                    className=" "
                />
                <TextField id="standard-basic"
                    type="char"
                    name="profile_pic"
                    value={formData.profile_pic}
                    placeholder="profile pic"
                    onChange={handleChange}
                    className=" "
                />
                <Button
                    variant="contained" color="secondary"
                    onClick={() => {
                        props.handleSubmit(formData);
                        setFormData(props.initial);
                    }}
                >
                    SUBMIT
                </Button>
        </form>
    );
}