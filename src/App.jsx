import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DetailPage, FavoritePage, HomePage } from './pages'
import { Layout } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path=":category" element={<HomePage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="detail/:idMeal" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
