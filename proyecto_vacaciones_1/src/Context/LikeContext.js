import React, { createContext, useReducer } from 'react';

const LikeContext = createContext();

const initialState = {}; // { characterId: { likes: 0, dislikes: 0 } }

function likeReducer(state, action) {
  const { characterId } = action;
  const current = state[characterId] || { likes: 0, dislikes: 0 };

  switch (action.type) {
    case 'LIKE':
      return {
        ...state,
        [characterId]: { ...current, likes: current.likes + 1 },
      };
    case 'DISLIKE':
      return {
        ...state,
        [characterId]: { ...current, dislikes: current.dislikes + 1 },
      };
    default:
      return state;
  }
}

export function LikeProvider({ children }) {
  const [state, dispatch] = useReducer(likeReducer, initialState);

  return (
    <LikeContext.Provider value={{ state, dispatch }}>
      {children}
    </LikeContext.Provider>
  );
}

export default LikeContext;
