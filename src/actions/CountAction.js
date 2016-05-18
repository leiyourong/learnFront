export const ADD_NUM = 'ADD_NUM'
export const SUB_NUM = 'SUB_NUM'
export const CLEAR = 'CLEAR'
import { createAction } from 'redux-actions'

// export function addNum(num){
//   return {
//     type:ADD_NUM,
//     num
//   }
// }
export const addNum = createAction('ADD_NUM', payload => {
  return payload
}, ({meta}) => (meta || {}))
export const subNum = createAction('SUB_NUM', payload => {
  return payload
}, ({meta}) => (meta || {}))
export const clear = createAction('CLEAR')
// export function subNum(num){
//   return {
//     type:SUB_NUM,
//     num
//   }
// }
export function addOne(){
  return (dispatch, getState) => {
    dispatch(addNum(1))
  }
}
