import React, { Component, PropTypes } from 'react'

class Count extends Component{
  propTypes:{
    num:PropTypes.number.isRequired,
    addNum:PropTypes.func.isRequired,
    subNum:PropTypes.func.isRequired,
    addOne:PropTypes.func.isRequired,
    clear:PropTypes.func.isRequired
  }
  calcu (e) {
    let input = this.refs.numInput
    let num = input.value
    if(!num){
      num = 0
    }
    if(e.target.value === 'Add'){
      this.props.addNum(num)
    }else if(e.target.value === 'Sub'){
      this.props.subNum(num)
    }else if(e.target.value === 'AddOne'){
      this.props.addOne()
    }else if(e.target.value === 'Clear'){
      this.props.clear()
    }else if(e.target.value === 'Info'){
      this.props.info()
    }else{
      alert('请联系我!')
    }
  }
  render(){
    var dataInfos = this.props.dataInfo
    return (
      <div>
        <input ref='numInput' type="number" />
        <div>num：{this.props.num}</div>
        <input type='button' onClick={e => this.calcu(e)} value='Add' />
        <input type='button' onClick={e => this.calcu(e)} value='Sub' />
        <input type='button' onClick={e => this.calcu(e)} value='AddOne' />
        <input type='button' onClick={e => this.calcu(e)} value='Clear' />
        <input type='button' onClick={e => this.calcu(e)} value='Info' />
        <ul>
        {
          Object.keys(dataInfos).map(function(property){
            return (<li key={property}>key:{property}  value:{dataInfos[property]}</li>)
          })
        }
        </ul>
      </div>
    )
  }
}
export default Count
