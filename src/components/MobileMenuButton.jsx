import { RiMenu3Line } from "react-icons/ri"
import { RxCross2 } from "react-icons/rx"

const MobileMenuButton = ({
  setIsAdditionalMenusOpened,
  isAdditionalMenusOpened,
}) => {
  return (
    <div className="flex items-center gap-5 xl:hidden">
      <button
        onClick={() => setIsAdditionalMenusOpened((prev) => !prev)}
      >
        {isAdditionalMenusOpened ? (
          <RxCross2 className="h-6 w-6 xl:hidden block" />
        ) : (
          <RiMenu3Line className="h-6 w-6 xl:hidden block" />
        )}
      </button>
    </div>
  )
}

export default MobileMenuButton
