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
    overflowX: 'hidden',
    backgroundImage: "url('data:image/png;base64,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')",
  },
  paper:{
    height:'80vh',
    width:'50vw',
    padding:50,
    display:'flex',

},
  
})
export default withStyles(styles)(Deploy);
