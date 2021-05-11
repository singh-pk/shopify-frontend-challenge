import headerStyles from './Header.module.scss';

const Header = ({ headerText }) => (
  <header className={headerStyles.header}>{headerText}</header>
);

export default Header;
