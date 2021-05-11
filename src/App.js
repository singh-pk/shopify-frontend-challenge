import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/HomePage/HomePage';

import Modal from './components/Modal/Modal';

import { selectModalHidden } from './redux/modal/modalSelectors';

import './App.scss';

const App = ({ modalHidden }) => {
  return (
    <>
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>

      {!modalHidden && <Modal />}
    </>
  );
};

const mapStateToProps = state => ({
  modalHidden: selectModalHidden(state),
});

export default connect(mapStateToProps)(App);
