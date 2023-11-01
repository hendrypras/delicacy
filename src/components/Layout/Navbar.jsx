import React from 'react'
import styles from './style.module.scss'
import { useEffect } from 'react'
import useCategories from '../../hook/useCategories'
import { MealContext } from '../../context/MealContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Navbar = () => {
  const { categories } = useContext(MealContext)
  const navigate = useNavigate()
  const { getCategories } = useCategories()
  const params = useParams()
  const { pathname } = useLocation()
  useEffect(() => {
    getCategories()
  }, [])
  const handleActiveNav = val => {
    navigate(`/${val}`)
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper__nav}>
        <ul className={styles.wrapper__links}>
          {categories?.slice(0, 6).map(val => {
            return (
              <React.Fragment key={val?.idCategory}>
                <li>
                  <button
                    className={
                      params.category === val?.strCategory
                        ? styles.active
                        : null
                    }
                    onClick={() => handleActiveNav(val?.strCategory)}
                  >
                    {val?.strCategory}
                  </button>
                </li>
              </React.Fragment>
            )
          })}
          <li>
            <button
              className={pathname === '/Favorite' ? styles.active : null}
              onClick={() => handleActiveNav('Favorite')}
            >
              Favorite
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
