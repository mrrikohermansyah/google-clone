import React, { createContext, useContext, useReducer} from "react"; //importing required dependencies

export const StateContext = createContext(); //preparing the data layer

export const StateProvider =({reducer, initialState, children
}) => (
    <StateContext.Provider value={useReducer(reducer, 
    initialState)}>
        {children}
    </StateContext.Provider>
); //high order component

//initialState is what the data layer looks like when the app is loaded


// hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);