import React, { useEffect, useContext } from 'react'
import useMealData from '../../hook/useMealData'
import { useParams } from 'react-router-dom'
import { MealContext } from '../../context/MealContext'
import { Card, MiniCard } from '../../components'
import styles from './style.module.scss'
const DetailPage = () => {
  const { singleMeal, mealBeef } = useContext(MealContext)
  const { getSingleData, getMealMoreRecipies } = useMealData()
  const params = useParams()
  useEffect(() => {
    if (params?.idMeal) {
      getSingleData(params?.idMeal)
      getMealMoreRecipies()
    }
  }, [params])

  return (
    <>
      <section className={styles.container__detail}>
        <Card data={singleMeal} />
      </section>
      <div className={styles.wrapper__more__recipies}>
        <h1 className={styles.title__more__recipies}>More recipies</h1>
        <div className={styles.wrapper__card__more__rec}>
          {mealBeef?.slice(0, 10).map(val => {
            return (
              <React.Fragment key={val?.idMeal}>
                <MiniCard data={val} />
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default DetailPage
