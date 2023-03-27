import React,{createContext, useContext, useReducer} from "react";

//Prepares the dataLayer
export const StateContext=createContext();


//Wrap our app and provide tha Data Layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

//Pull information from the Data layer(consumer)
export const useStateValue = () => useContext(StateContext);