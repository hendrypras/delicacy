import React from 'react'
import styles from './style.module.scss'
import useFavorite from '../../hook/useFavorite'
const MiniCard = ({ data, size }) => {
  const { deleteFavoriteByIdMeal } = useFavorite()
  const determineWidth = () => {
    switch (size) {
      case 'S':
        return '200px'
      case 'M':
        return '250px'
      default:
        return '200px' // Default size
    }
  }
  const determineHeight = () => {
    switch (size) {
      case 'S':
        return '140px'
      case 'M':
        return '190px'
      default:
        return '140px' // Default size
    }
  }
  const determineImg = () => {
    switch (size) {
      case 'S':
        return '100px'
      case 'M':
        return '145px'
      default:
        return '100px' // Default size
    }
  }

  const cardWidth = determineWidth()
  const cardHeght = determineHeight()
  const imgSize = determineImg()

  return (
    <article className={styles.mini__card__conainer}>
      <div
        className={styles.card__wrapper}
        style={{ width: cardWidth, height: cardHeght }}
      >
        <div
          className={styles.bg__img}
          style={{ width: imgSize, height: imgSize }}
        >
          <img
            src={data?.strMealThumb}
            alt="image-beef"
            className={styles.img}
          />
        </div>

        {size === 'M' ? (
          <div className={styles.content__Wrapper}>
            <h1>{data?.strMeal}</h1>
            <button onClick={() => deleteFavoriteByIdMeal(data?.idMeal)}>
              Remove Favorite
            </button>
          </div>
        ) : (
          <h1>{data?.strMeal}</h1>
        )}
      </div>
    </article>
  )
}

export default MiniCard
