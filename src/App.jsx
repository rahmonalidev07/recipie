import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
// layout 
import MainLayout from "./layout/MainLayout"
// pages
import Home from "./pages/Home"
import Create from './pages/Create'
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="create" element={<Create/>}/>
      </Route>
    )
  )
  return (
   <>
    <RouterProvider router={routes}/>
   </>
  )
}

export default App