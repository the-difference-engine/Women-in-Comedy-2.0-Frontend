import { UPDATE_PUBLIC_FIGURE_STATUS } from '../actions/types';
import { UPDATE_IS_MENTOR_STATUS } from '../actions/types';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UPDATE_PUBLIC_FIGURE_STATUS:
      return { ...state, updatePublicFigure: action.updatePublicFigure } 

    case UPDATE_IS_MENTOR_STATUS:
    return { ...state, updateIsMentor: action.updateIsMentor }

    default:
      return state;
  }
};
