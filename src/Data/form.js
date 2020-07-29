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
                    name="instructor_first_name"
                    value={formData.instructor_first_name}
                    placeholder="First Name"
                    onChange={handleChange}
                />
                <TextField id="standard-basic"
                    type="char"
                    name="instructor_last_name"
                    value={formData.instructor_last_name}
                    placeholder="Last Name"
                    onChange={handleChange}
                />
                <TextField id="standard-basic"
                    type="char"
                    name="profile_pic"
                    value={formData.profile_pic}
                    placeholder="Profile Photo"
                    onChange={handleChange}
                    className=" "
                />
                <TextField id="standard-basic"
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                    className=" "
                />
                <TextField id="standard-basic"
                    type="phone"
                    name="phone"
                    value={formData.phone}
                    placeholder="Phone"
                    onChange={handleChange}
                    className=" "
                />
                <TextField id="standard-basic"
                    type="decimal"
                    name="salary"
                    value={formData.salary}
                    placeholder="Salary"
                    onChange={handleChange}
                    className=" "
                />
                   <TextField id="standard-basic"
                    type="decimal"
                    name="commission"
                    value={formData.commission}
                    placeholder="Commission"
                    onChange={handleChange}
                    className=" "
                />
                <TextField id="standard-basic"
                    type="Date"
                    name="date_hired"
                    value={formData.date_hired}
                    placeholder="Date Of Hired"
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