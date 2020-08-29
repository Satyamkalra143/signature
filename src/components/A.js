import React, { Component } from "react";
import { withStyles, Grid, Paper, TextField, Input, Button, Typography } from '@material-ui/core';
// import Paper from '@material-ui/core/Paper';


class Deploy extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  componentDidMount() {

  }
  

  render() {
    // console.log(this.state)
    const classes = this.props.classes
    return (
      <div>
          {/* <B/> */}
              <Grid container>

              <Grid xs={12} md={12} lg={12} className={classes.grid}>
                <h1> Introduce Yourself </h1>
                </Grid>

                <Grid xs={12} md={12} lg={12} className={classes.grid}>
                <TextField id="standard-full-width"
                style={{ width:450  }}
                placeholder="First Name"
                //helperText="Full width!"
                required="true"
                margin="normal" onChange={this.props.F}  label="First Name" />

                </Grid>
                <Grid xs={12} md={12} lg={12} className={classes.grid}>
            <TextField id="standard-full-width"
               label="Last Name"
               style = {{width: 450}} 
                placeholder="Last Name"
                //helperText="Full width!"
                fullWidth="false"
                margin="normal"  />

                </Grid>
                <Grid xs={12} md={12} lg={12} className={classes.grid}>
                <TextField 
                id="standard-full-width"
                label="Phone"
                style = {{width: 450}} 
                placeholder="Phone"
                //helperText="Full width!"
                //fullWidth
                margin="normal"  />

                </Grid>
                <Grid xs={12} md={12} lg={12} className={classes.grid}>
            <TextField id="standard-full-width"
                label="Email"
                style = {{width: 450}} 
                placeholder="Email"
                //helperText="Full width!"
                //fullWidth
                margin="normal"  />

                </Grid>
                <Grid xs={12} md={12} lg={12} className={classes.grid}>
            <TextField id="standard-full-width"
                label="Address"
                style = {{width: 450}} 
                placeholder="Address"
                //helperText="Full width!"
                //fullWidth
                margin="normal"  />

                </Grid>
              </Grid>
            
                <Grid container justify="center"> 
                  <Grid item>
          
         
          
                   <Button variant="contained" color="primary" style = {{margin: 50}}  disableElevation="false" onClick={this.props.continue}>Continue</Button>
          
                  </Grid>
                </Grid>

      </div>
    )
  }
}
const styles = theme => ({
  
  
  grid:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'100vh'
  }

  
    
    
  
})
export default withStyles(styles)(Deploy);
