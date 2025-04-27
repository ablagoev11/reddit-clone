import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './pages/routes.tsx'
import './main.css'
import { store } from "./app/store.ts"
import { Provider } from 'react-redux'

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
)
