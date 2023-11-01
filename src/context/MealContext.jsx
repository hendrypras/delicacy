import React, { useState, createContext, useEffect, useMemo } from 'react'

export const MealContext = createContext({
  categories: [],
  setCategories: () => {},
  mealDetail: [],
  setMealDetail: () => {},
  mealBeef: [],
  setMealBeef: () => {},
  singleMeal: {},
  setSingleMeal: () => {},
  favorite: [],
  setFavorite: () => {},
  errorMsg: '',
  setErrorMsg: () => {},
})

export const MealProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [mealDetail, setMealDetail] = useState([])
  const [mealBeef, setMealBeef] = useState([])
  const [singleMeal, setSingleMeal] = useState({})
  const [favorite, setFavorite] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const storedFavorite = JSON.parse(localStorage.getItem('favorite'))
    if (storedFavorite) {
      setFavorite(storedFavorite)
    }
  }, [])

  const contextValue = useMemo(
    () => ({
      categories,
      setCategories,
      errorMsg,
      setErrorMsg,
      mealDetail,
      setMealDetail,
      mealBeef,
      setMealBeef,
      singleMeal,
      setSingleMeal,
      favorite,
      setFavorite,
    }),
    [categories, errorMsg, mealDetail, mealBeef, singleMeal, favorite]
  )

  return (
    <MealContext.Provider value={contextValue}>{children}</MealContext.Provider>
  )
}
