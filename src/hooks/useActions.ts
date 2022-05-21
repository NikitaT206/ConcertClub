import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actions} from '../store/actions';

export function useActions() {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}