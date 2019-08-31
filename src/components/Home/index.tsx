import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import Home from './Home';
import { startTimer } from '../../store/timer/actions';
import { StoreState } from '../../store/types';

const mapStateToProps = (state: StoreState) => ({
  timeRemaining: state.timerReducer.timeRemaining,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({
  startTimer,
}, dispatch);

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
