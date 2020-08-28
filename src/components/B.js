import React, { Component } from "react";
import { withStyles, Grid, Paper, TextField, Input, Button, Typography } from '@material-ui/core';
// import Paper from '@material-ui/core/Paper';
import Template from './Template.js';


class Deploy extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id:""
    }
  }

  componentDidMount() {

  }
  handleChoose=(id)=>{
      console.log(id)
      this.setState({
          id:id
      })
  }

  render() {
    // console.log(this.state)
    const classes = this.props.classes
    return (
              <Grid container>
                  <Grid xs={12} md={12} lg={12} className={classes.mainbox}>
                    <Template  name={this.props.name} number="none" handleChoose={this.handleChoose} />
                  </Grid>
                  <Template number={this.state.id} />
                  
              </Grid>

    )
  }
}
const styles = theme => ({
  
  
  grid:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
  },
  mainbox:{
      height:'220px',
      display:'flex',
      flexWrap:"nowrap",
      overflow:'auto',
      border:'1px solid grey'
  },
 
  
})
export default withStyles(styles)(Deploy);
