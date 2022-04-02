
import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { decrement, increment, reset } from '../actions/CounterActions';

const Counter = () => {

    const dispatch = useDispatch();
    let counter = useSelector(state => state.counterReducer.counter);
    // dispatching increment action
    const incrementCount = () => {
        dispatch(increment());
    }
        
    // dispatching decrement action
    const decrementCount = () => {
        dispatch(decrement());
    }
        
    // dispatching reset action
    const resetCount = () => {
        dispatch(reset());
    }
    return (<View style={styles.container}>
     
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => incrementCount()}
            >
          <Text style={styles.buttonText}>INCREMENT</Text> 
        </TouchableOpacity>
       <Text style={styles.counterText}>{counter}</Text> 
    
       <TouchableOpacity
            activeOpacity={0.7}
            style={{ ...styles.buttonStyle, backgroundColor: "#d9232c" }}
            onPress={() => decrementCount()}
            >
          <Text style={styles.buttonText}>DECREMENT</Text> 
        </TouchableOpacity>

        <TouchableOpacity
            activeOpacity={0.7}
            style={{ ...styles.buttonStyle,marginTop:20, backgroundColor:"#1a1a1a"}}
            onPress={() => resetCount()}
            >
          <Text style={styles.buttonText}>RESET</Text> 
        </TouchableOpacity>
  </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems:"center"
    },
    buttonText: {
        fontSize: 18,
        color:"white"  
    },
    counterText: {
        marginVertical: 10,
        fontSize: 30,
        fontWeight:'bold'
    },
    buttonStyle: {
        borderRadius: 10,
        width: 150,  
        alignItems: "center",
        justifyContent:"center",
        height:45,
        backgroundColor :"#04d647"
    }
});
  
export default Counter;