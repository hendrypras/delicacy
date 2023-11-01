import styles from './style.module.scss'
import iconIng from '../../assets/images/iconing.svg'
import { Link, useParams } from 'react-router-dom'
import useFavorite from '../../hook/useFavorite'
import React, { useEffect, useContext, useState } from 'react'
import { MealContext } from '../../context/MealContext'
const Card = ({ data }) => {
  const params = useParams()
  const [favTrue, setFavTrue] = useState(false)
  const { addToFavorite } = useFavorite()
  const { favorite } = useContext(MealContext)

  useEffect(() => {
    const isFavorited = favorite?.some(item => item.idMeal === data.idMeal)
    setFavTrue(isFavorited)
  }, [favorite, data])

  const handleFavoriteToggle = () => {
    if (!favTrue) {
      addToFavorite(data)
      setFavTrue(true)
    }
  }
  return (
    <article className={styles.card__container}>
      <div className={styles.card__wrapper}>
        <h1 className={styles.card__title}>{data?.strMeal}</h1>
        <p className={styles.card__paragraf}>{data?.strInstructions}</p>
        <h1 className={styles.card__title__ing}>Ingredients</h1>
        <div className={styles.card__ingredient}>
          <div className={styles.card__content}>
            <div className={styles.bg__icon}>
              <img src={iconIng} alt="icon-ingredient" />
            </div>
            <div className={styles.text__content}>
              <h2>{data?.strIngredient1}</h2>
              <p>{data?.strMeasure1}</p>
            </div>
          </div>
          <div className={styles.card__content}>
            <div className={styles.bg__icon}>
              <img src={iconIng} alt="icon-ingredient" />
            </div>
            <div className={styles.text__content}>
              <h2>{data?.strIngredient2}</h2>
              <p>{data?.strMeasure2}</p>
            </div>
          </div>
        </div>
        <div className={styles.card__ingredient}>
          <div className={styles.card__content}>
            <div className={styles.bg__icon}>
              <img src={iconIng} alt="icon-ingredient" />
            </div>
            <div className={styles.text__content}>
              <h2>{data?.strIngredient3}</h2>
              <p>{data?.strMeasure3}</p>
            </div>
          </div>
          <div className={styles.card__content}>
            <div className={styles.bg__icon}>
              <img src={iconIng} alt="icon-ingredient" />
            </div>
            <div className={styles.text__content}>
              <h2>{data?.strIngredient4}</h2>
              <p>{data?.strMeasure4}</p>
            </div>
          </div>
        </div>
        <div className={styles.card__btn}>
          {params?.idMeal ? null : (
            <Link to={`/detail/${data?.idMeal}`}>Detail</Link>
          )}
          {favTrue && !params?.idMeal ? null : params?.idMeal ? (
            <Link to={'/favorite'}>Go To Favorite</Link>
          ) : (
            <button onClick={handleFavoriteToggle}>Add to Favorites</button>
          )}
        </div>
        <div className={styles.card__img}>
          <img src={data?.strMealThumb} alt="sdsd" />
        </div>
      </div>
    </article>
  )
}

export default Card
