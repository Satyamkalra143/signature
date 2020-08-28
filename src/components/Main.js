import React, { Component } from "react";
import { withStyles, Grid, Paper, TextField, Input, Button, Typography } from '@material-ui/core';
import A from './A'
import B from './B'

class Deploy extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        a:true
    }
  }

  componentDidMount() {

  }
  handleName=(e)=>{
    this.setState({
        name:e.target.value
    })
  }
  continue=()=>{
    this.setState({a:false})
  }

  render() {
    // console.log(this.state)
    const classes = this.props.classes
    return (
      <div className={classes.root}>
          <Paper  className={classes.paper} elevation={3}  >

          {/* {this.state.name} */}
        {
            this.state.a==true?
          <A F={this.handleName} continue={this.continue}/>
          :

          <B name={this.state.name}/>
        }
          </Paper>

          {/* <B/> */}
      </div>
    )
  }
}
const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    height: '100vh',
    overflowX: 'hidden'
  },
  paper:{
    height:'80vh',
    width:'50vw',
    padding:50,
    display:'flex',

},
  
})
export default withStyles(styles)(Deploy);
