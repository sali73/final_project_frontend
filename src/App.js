import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Student from "./Student"
import Data from "./Data";
import Footer from "./Footer";
import "./App.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {  Drawer , List , ListItem , ListItemIcon , ListItemText } from "@material-ui/core"
import InfoIcon from '@material-ui/icons/Info';
import StorageIcon from '@material-ui/icons/Storage';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    drawerPaper: { 
        width : 'inherit' ,
        paddingTop: '40px' ,
        paddingLeft: '10px' ,
        backgroundColor: '#778054'
    },
    link: { textDecoration: 'none' ,
        color: 'white',
    },
}));

export default function BasicExample() {
  const classes = useStyles()
  return (
      <>
          <body className='grid'>
            <nav className='navbar'>
            </nav>
            <main>
            </main>
            <footer>
            </footer>
          </body >
            <Router >
              <div style={{display: 'flex'}}>
                <Drawer 
                  style={{ width: '13%' }}
                  variant='persistent'
                  anchor='left'
                  open={true}
                  classes={{ paper: classes.drawerPaper }} 
                  >
                    <List>
                      <Link to="/" className={classes.link}>
                      <ListItem button>
                        <ListItemIcon>
                          <HomeWorkIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                      </ListItem>
                        </Link>
                    </List>
                    <List>
                      <Link to="/student" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                              <StorageIcon />
                            </ListItemIcon>
                          <ListItemText primary={"Student"} />
                        </ListItem>
                      </Link>
                    </List>
                    <List>
                      <Link to="/data" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                              <StorageIcon />
                            </ListItemIcon>
                          <ListItemText primary={"Instructor"} />
                        </ListItem>
                      </Link>
                    </List>
                    <List>
                      <Link to="/About" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                              < InfoIcon />
                            </ListItemIcon>
                          <ListItemText primary={"About"} />
                        </ListItem>
                      </Link>
                    </List>
                    <List>
                      <Link to="/contact" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                              <ContactMailIcon />
                            </ListItemIcon>
                          <ListItemText primary={"Contact"} />
                        </ListItem>
                      </Link>
                    </List>
                </Drawer>

                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route path="/student">
                    <Student />
                  </Route>
                   <Route path="/data">
                    <Data/>
                  </Route>
                </Switch>
              </div>
            </Router>
          <Footer />
          </>
  );
}

