import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from './Header'
import { useEffect } from 'react'
import styles from './style.module.scss'

const MainLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
    if (location.pathname === '/') {
      navigate('beef')
    }
  }, [location])
  return (
    <>
      <Header />
      <main className={styles.main__container}>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
