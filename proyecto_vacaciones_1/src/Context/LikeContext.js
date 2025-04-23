import React, { createContext, useReducer, useEffect } from 'react';

// Leer likes del localStorage al iniciar
const storedLikes = JSON.parse(localStorage.getItem('likes')) || {};

const initialState = storedLikes;

const LikeContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'LIKE':
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          likes: (state[action.payload]?.likes || 0) + 1,
        },
      };
    case 'DISLIKE':
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          dislikes: (state[action.payload]?.dislikes || 0) + 1,
        },
      };
    default:
      return state;
  }
}

export function LikeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Guardar en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(state));
  }, [state]);

  return (
    <LikeContext.Provider value={{ state, dispatch }}>
      {children}
    </LikeContext.Provider>
  );
}

export default LikeContext;
