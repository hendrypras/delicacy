import React, { useEffect, useContext } from 'react'
import useMealData from '../../hook/useMealData'
import { MealContext } from '../../context/MealContext'
import { useParams } from 'react-router-dom'
import { Card, MiniCard } from '../../components'
import styles from './style.module.scss'
const HomePage = () => {
  const { mealDetail, mealBeef } = useContext(MealContext)
  const { getMealByCategory, getMealMoreRecipies } = useMealData()
  const params = useParams()
  useEffect(() => {
    getMealByCategory(params.category)
    getMealMoreRecipies()
  }, [params])
  return (
    <section className={styles.container__home}>
      <div className={styles.wrapper__card}>
        {mealDetail?.map((val, i) => {
          const data = val.meals[0]
          return (
            <React.Fragment key={data?.idMeal}>
              <Card data={data} />
            </React.Fragment>
          )
        })}
      </div>
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
    </section>
  )
}

export default HomePage
