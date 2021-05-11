import ModalActionTypes from './modalActionTypes';

const INITIAL_STATE = {
  modalHidden: true,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.TOGGLE_MODAL_HIDDEN:
      return { modalHidden: !state.modalHidden };
    default:
      return state;
  }
};

export default modalReducer;
