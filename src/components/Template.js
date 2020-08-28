import React, { Component } from "react";
import { withStyles, Grid, Paper, TextField, Input, Button, Typography } from '@material-ui/core';
// import Paper from '@material-ui/core/Paper';
// import Template1 from './Template1.js';


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
    console.log(this.props.number)
    const classes = this.props.classes
    if(this.props.number=="none"){
      return (
        <>
        <Paper onClick={()=>this.props.handleChoose('1')} className={classes.template} elevation={3}>
          ishan
        </Paper>
        <Paper onClick={()=>this.props.handleChoose('2')} className={classes.template} elevation={3}>
          satyam
        </Paper>
        </>
      )
    }
    else if(this.props.number=="1"){
      return(
      <Paper className={classes.template}>
        ishan
      </Paper>
      )
    }
    else if(this.props.number=="2"){
      return(
      <Paper className={classes.template}>
        satyam
      </Paper>
      )
    }
    else{
      return (<div></div>)
    }
  }
}
const styles = theme => ({
  
  paper:{
      height:'70vh',
      width:'40vw',
      display:'flex',

  },
  grid:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
  },
  mainbox:{
      border:'2px solid grey',
      padding:'10px'
  },
  
  template:{    width: 200,
    flex: "0 0 auto",
    height: 100,
    marginLeft: 10,
    width:300,
    height:200
}
  
  
})
export default withStyles(styles)(Deploy);
