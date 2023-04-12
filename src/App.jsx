import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home"
import PublisherNews from "./PublisherNews"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/news/:source",
      element: <PublisherNews />,
    },
  ])

  return (
    <div className="max-w-[90rem] mx-auto h-full xl:px-10 pb-10 overflow-hidden relative">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
