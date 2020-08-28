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
      <div >
          {/* <B/> */}
              <Grid container>
                <Grid xs={12} md={12} lg={12} className={classes.grid}>
                <TextField id="standard-basic" onChange={this.props.F}  label="First Name" />

                </Grid>
                <Grid xs={12} md={12} lg={12} className={classes.grid}>
            <TextField id="standard-basic" label="Last Name" />

                </Grid>
                <Grid xs={12} md={12} lg={12} className={classes.grid}>
                <TextField id="standard-basic" label="Phone" />

                </Grid>
                <Grid xs={12} md={12} lg={12} className={classes.grid}>
            <TextField id="standard-basic" label="Email" />

                </Grid>
                <Grid xs={12} md={12} lg={12} className={classes.grid}>
            <TextField id="standard-basic" label="Address" />

                </Grid>
              </Grid>
                <button onClick={this.props.continue} >continue</button>

      </div>
    )
  }
}
const styles = theme => ({
  
  
  grid:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
  }
  
})
export default withStyles(styles)(Deploy);
