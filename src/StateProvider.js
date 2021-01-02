import React, { createContext, useContext, useReducer } from 'react';


export const StateContext = createContext();


/* creates data layer */
export const StateProvider = ({reducer, intialState, children}) => (
	<StateContext.Provider value={useReducer(reducer, intialState)}>
		{children}
	</StateContext.Provider>
);

/* hook to use value from data layer */
export const useStateValue = () => useContext(StateContext);