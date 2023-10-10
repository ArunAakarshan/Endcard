import { connect } from 'react-redux';
import { login, logout } from '../Action/userAction';

// Your component code here

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    username: state.user.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username) => dispatch(login(username)),
    logoutUser: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YourComponent);
