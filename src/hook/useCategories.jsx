import { callAPI } from '../domain/api'
import { useContext } from 'react'
import { MealContext } from '../context/MealContext'
import toast from 'react-hot-toast'
const useCategories = () => {
  const { setCategories } = useContext(MealContext)
  const getCategories = async () => {
    try {
      const response = await callAPI({
        endpoint: '/categories.php',
        method: 'GET',
      })
      setCategories(response?.categories)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return { getCategories }
}

export default useCategories
