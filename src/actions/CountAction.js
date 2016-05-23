export const ADD_NUM = 'ADD_NUM'
export const SUB_NUM = 'SUB_NUM'
export const CLEAR = 'CLEAR'
export const INFO = 'INFO'
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
export const info = createAction('INFO', () => {
  fetch('http://localhost:8081').then(function(data){
    return data
  })
  // return {
  //   url: 'http://localhost:8081',
  //   statu: 200
  // }
})
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
export function getServerInfo(){

}
