import Header from "../components/Header"
import { LoadingSpinner } from "../vectors"

const PageLayout = ({ children, condition }) => {
  return (
    <>
      <Header />
      {condition ? (
        <>{children}</>
      ) : (
        <div className="absolute inset-0 w-full h-full flex justify-center items-center">
          <LoadingSpinner className="h-12 w-12 animate-spin text-black" />
        </div>
      )}
    </>
  )
}

export default PageLayout
