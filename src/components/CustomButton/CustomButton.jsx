import customButtonStyles from './CustomButton.module.scss';

const CustomButton = ({ children, handleClick, disabled }) => (
  <button
    className={customButtonStyles.customBtn}
    onClick={handleClick}
    disabled={disabled}>
    {children}
  </button>
);

export default CustomButton;
