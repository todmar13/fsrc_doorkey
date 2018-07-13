import { FETCH_SURVEYS } from '../actions/types';

export default function(state = [],action) {      // null if waiting for response of auth query
  switch(action.type)  {
    case FETCH_SURVEYS:
      return action.payload || [];
    default: return state;
  }
}
