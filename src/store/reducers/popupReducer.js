const popupState = {
  openInvitePopup:0, 
  idShow:0
  // idInvite: 0, 
  // changeInvite: false, 
  // choiseDeleteInvite: false, 
}

const  popupReducer = (state = popupState, action) => {

  switch(action.type){
    case 'SHOW_POPUP':
      return {...state, idShow: action.payload}
    // case 'CHOISE_INVITE':
    //   return {...state, idInvite: action.payload}
    // case 'OPEN_INVITE_POPUP':
    //   return {...state, openInvitePopup: action.payload}
    // case 'CHANGE_INVITE':
    //   return {...state, changeInvite: action.payload}
    // case 'DELETE_INVITE_CABINET':
    //   return {...state, choiseDeleteInvite: action.payload}
    default:
      return state;
  }
}

export default popupReducer;