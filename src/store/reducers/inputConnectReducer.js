const inputState = {
  inputValueConnect: '',
  inputChangeBreeds: '',
  hiddenValue: [],
  inputCount: 0
}

const  inputConnectReducer = (state = inputState, action) => {
  
  switch(action.type){
    case 'INPUT_CONNECT':
      return {...state, ...action.payload}
    case 'CHANGE_BREEDS':
      return {...state, ...action.payload}
    case 'HIDDEN_VALUE':
      // console.log("in", action.type, action.payload)
      return {...state, ...action.payload}
    case 'INPUT_COUNT_ADD':
      console.log("in", state.inputCount)
      return {...state, inputCount: state.inputCount + 1}
    default:
      return state;
  }
}

export default inputConnectReducer;