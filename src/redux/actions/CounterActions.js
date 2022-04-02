// unique identifiers for every actions
export const INCREMENT = "INCREMENT"// unique identifier
export const DECREMENT = "DECREMENT"// unique identifier
export const RESET = "RESET"// unique identifier
//
export const increment = () => {
    //trigger action of type INCREMENT
    return {
      type: INCREMENT,
    };
  };
  
export const decrement = () => {
    //trigger action of type DECREMENT
    return {
      type: DECREMENT,
    };
  };
  
export const reset = () => {
    //trigger action of type RESET
    return {
      type: RESET,
    };
  };
  