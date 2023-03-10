import { RiMenu3Line, RiSearchLine } from "react-icons/ri";
import NewsTypeListItem from "./NewsTypeListItem";

const Header = () => {
  return (
    <div className="w-full px-5 xl:px-0 flex gap-10 justify-between py-7 font-medium items-center sticky top-0 z-50 bg-white backdrop-blur-md">
      <div className="font-extrabold text-4xl xl:text-5xl">NGlobal</div>
      <ul className="xl:flex gap-20 text-xl hidden">
        <NewsTypeListItem>Home</NewsTypeListItem>
        <NewsTypeListItem>Sport</NewsTypeListItem>
        <NewsTypeListItem>Travel</NewsTypeListItem>
        <NewsTypeListItem>Culture</NewsTypeListItem>
        <NewsTypeListItem>Cinema</NewsTypeListItem>
        <NewsTypeListItem>Music</NewsTypeListItem>
      </ul>
      <div className="flex items-center gap-5">
        <RiSearchLine className="h-6 w-6" />
        <RiMenu3Line className="h-6 w-6 2xl:hidden block" />
      </div>
    </div>
  );
};
export default Header;
