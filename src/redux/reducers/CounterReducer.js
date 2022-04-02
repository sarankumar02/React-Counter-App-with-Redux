import { DECREMENT, INCREMENT, RESET } from "../actions/CounterActions";

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {

    switch (action.type) {

      case INCREMENT:
            state.counter += 1;
            return { ...state };
        
      case DECREMENT:
            state.counter -= 1;
            return { ...state };
        
      case RESET:
            state.counter = 0;
            return { ...state };
      //by default return state  
      default:
            return state;
    }
  };
  export default counterReducer;
  