import React from "react"
import Header from "../components/Header"
import { LoadingSpinner } from "../vectors"

const PageLayout = ({ children, condition }) => {
  return (
    <div>
      <Header />
      {condition ? (
        <>{children}</>
      ) : (
        <div className="absolute inset-0 w-full h-full flex justify-center items-center">
          <LoadingSpinner className="h-12 w-12 animate-spin text-blue-500" />
        </div>
      )}
    </div>
  )
}

export default PageLayout
