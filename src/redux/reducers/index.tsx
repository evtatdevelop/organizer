import { IState, IAction } from '../../ts';

const initialState: IState = {
  data: [],
}

const reducer: (state: any, action: IAction) => IState = (state = initialState, action: IAction) => {
  switch ( action.type ) {
    case 'GET_DATA': {
      return {
        ...state,
        data: action.payload,
      }
    }
    
    default: return state;
  }
}

export default reducer;