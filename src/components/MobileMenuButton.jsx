import { CrossIcon, MenuIcon } from "../vectors"

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
          <CrossIcon className="h-6 w-6 xl:hidden block" />
        ) : (
          <MenuIcon className="h-6 w-6 xl:hidden block" />
        )}
      </button>
    </div>
  )
}

export default MobileMenuButton
