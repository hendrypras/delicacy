import React from 'react'
import styles from './style.module.scss'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Header = () => {
  const param = useParams()

  return (
    <header className={styles.header}>
      <div className={styles.wrapper__brand}>
        <Link to={'/Beef'}>
          <h1>Delicacy</h1>
        </Link>
      </div>
      {param?.idMeal ? null : <Navbar />}
    </header>
  )
}

export default Header
