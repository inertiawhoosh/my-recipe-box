import React from 'react'

export default React.createContext({
  recipes: [],
  addRecipe: () => {},
  deleteRecipe: () => {},
  setActiveRecipe: () => {}
})