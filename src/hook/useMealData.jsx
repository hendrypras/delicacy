import { callAPI } from '../domain/api'
import { useContext } from 'react'
import { MealContext } from '../context/MealContext'
import toast from 'react-hot-toast'

const useMealData = () => {
  const { setMealDetail, setMealBeef, setSingleMeal } = useContext(MealContext)
  const getMealByCategory = async category => {
    try {
      const response = await callAPI({
        endpoint: `/filter.php?c=${category}`,
        method: 'GET',
      })
      const idMeal = response?.meals?.slice(0, 5).map(val => {
        return callAPI({
          endpoint: `/lookup.php?i=${val?.idMeal}`,
          method: 'GET',
        })
      })
      const data = await Promise.all(idMeal)
      setMealDetail(data)
    } catch (error) {
      toast.error(error.message)
    }
  }
  const getMealMoreRecipies = async () => {
    try {
      const response = await callAPI({
        endpoint: `/filter.php?c=Beef`,
        method: 'GET',
      })
      setMealBeef(response?.meals)
    } catch (error) {
      toast.error(error.message)
    }
  }
  const getSingleData = async idMeal => {
    try {
      const response = await callAPI({
        endpoint: `/lookup.php?i=${idMeal}`,
        method: 'GET',
      })
      setSingleMeal(response?.meals[0])
    } catch (error) {
      toast.error(error.message)
    }
  }

  return { getMealByCategory, getMealMoreRecipies, getSingleData }
}

export default useMealData
