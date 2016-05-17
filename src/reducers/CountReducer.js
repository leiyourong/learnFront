import { ADD_NUM,SUB_NUM } from '../actions/CountAction'

function countNum(state = 0,action){
  console.log('state->'+state)
  console.log('action->'+action)
  switch (action.type) {
    case ADD_NUM:
      return parseInt(state)+parseInt(action.num)
    case SUB_NUM:
      return parseInt(state)-parseInt(action.num)
    default:
      return parseInt(state)
  }
}

export default countNum
