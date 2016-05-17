export const ADD_NUM = 'ADD_NUM'
export const SUB_NUM = 'SUB_NUM'

export function addNum(num){
  return {
    type:ADD_NUM,
    num
  }
}

export function subNum(num){
  return {
    type:SUB_NUM,
    num
  }
}

export function addOne(){
  return (dispatch, getState) => {
    dispatch(addNum(1))
  }
}
