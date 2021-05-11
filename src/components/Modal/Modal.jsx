import { connect } from "react-redux";

import { toggleModalHidden } from "../../redux/modal/modalActions";

import modalStyles from "./Modal.module.scss";

const Modal = ({ dispatch }) => {
  const handleModdleCloseClick = () => dispatch(toggleModalHidden());

  return (
    <div className={modalStyles.modal} onClick={handleModdleCloseClick}>
      <div
        className={modalStyles.modalBody}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className={modalStyles.modalBtnCloseContainer}
          onClick={handleModdleCloseClick}
        >
          <div className={modalStyles.modalBtnClose} />
        </div>

        <div className={modalStyles.text}>
          You cannot nominate more than 5 movies!
        </div>
      </div>
    </div>
  );
};

export default connect()(Modal);
