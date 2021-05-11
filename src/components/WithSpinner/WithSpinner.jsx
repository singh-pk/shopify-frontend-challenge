import withSpinnerStyles from "./WithSpinner.module.scss";

const WithSpinner = (WrapperComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className={withSpinnerStyles.spinnerContainer}>
      <div className={withSpinnerStyles.spinner} />
    </div>
  ) : (
    <WrapperComponent {...otherProps} />
  );
};

export default WithSpinner;
