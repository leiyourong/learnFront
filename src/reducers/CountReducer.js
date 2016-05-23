import { ADD_NUM,SUB_NUM,CLEAR,INFO } from '../actions/CountAction'
import { handleAction,handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
// function countNum(state = 0,action){
//   switch (action.type) {
//     case ADD_NUM:
//       return parseInt(state)+parseInt(action.num)
//     case SUB_NUM:
//       return parseInt(state)-parseInt(action.num)
//     default:
//       return parseInt(state)
//   }
// }

const countNum = handleActions({
  ADD_NUM: (state, action) => {
    return parseInt(state)+parseInt(action.payload)
  },
  SUB_NUM: (state, action) => {
    return parseInt(state)-parseInt(action.payload)
  },
  CLEAR:() => {
    return 0
  }
} , 0)
const dataInfo = handleActions({
  INFO: (state, action) => {
    return Object.assign({},state,action.payload)
  }
} , {})

const rootReducer = combineReducers({
    countNum,
    dataInfo
})
export default rootReducer;
