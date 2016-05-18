import React, { Component } from 'react'
import Count from '../components/Count'
import {connect} from 'react-redux'
import {addNum,subNum,addOne,clear} from '../actions/CountAction'

class CountApp extends Component{
  render(){
    const {dispatch,num} = this.props
    return (
      <div>
        <Count
          num = {this.props.num}
          addNum = {
            inputNum => dispatch(addNum(inputNum))
          }
          subNum={
            inputNum => dispatch(subNum(inputNum))
          }
          addOne = {
            () => dispatch(addOne())
          }
          clear = {
            () => dispatch(clear())
          }
         />
      </div>
    )
  }
}
function state2Props(state){
  //state 0 转到 props上
  return {
    num:state
  }
}

export default connect(state2Props)(CountApp)
