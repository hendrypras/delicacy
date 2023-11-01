import React, { useContext, useEffect } from 'react'
import { MealContext } from '../../context/MealContext'
import { MiniCard } from '../../components'
import useMealData from '../../hook/useMealData'
import styles from './style.module.scss'
import Empty from '../../components/Empty'
const FavotitePage = () => {
  const { favorite } = useContext(MealContext)
  const { getMealMoreRecipies } = useMealData()

  useEffect(() => {
    getMealMoreRecipies()
  }, [])
  return (
    <section className={styles.container__favorite}>
      {favorite?.length > 0 ? (
        <div className={styles.wrapper__card__more__rec}>
          {favorite?.map(val => {
            return (
              <React.Fragment key={val?.idMeal}>
                <MiniCard data={val} size={'M'} />
              </React.Fragment>
            )
          })}
        </div>
      ) : (
        <Empty text="No data in Favorite, please add meal to here" />
      )}
    </section>
  )
}

export default FavotitePage
