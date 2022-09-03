import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CompleteOrder } from './pages/CompleteOrder'
import { HomePage } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/complete-order" element={<CompleteOrder />} />
      </Route>
    </Routes>
  )
}
