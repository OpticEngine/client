import {useAppSelector, useAppDispatch} from "../../store";
import {FiSettings, FiMenu} from "react-icons/fi";
import Dropdown1 from "./dropdown-1";
import Dropdown2 from "./dropdown-2";
import Dropdown3 from "./dropdown-3";
import Dropdown4 from "./dropdown-4";
import Dropdown5 from "./dropdown-5";
import Dropdown6 from "./dropdown-6";
import Search from "./search";
import {setConfig} from "../../store/slices/config";

const Navbar: React.FC = () => {
  const config = useAppSelector((state) => state.config);
  const {rightSidebar, collapsed} = config;
  const dispatch = useAppDispatch();
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-b border-slate-100 dark:border-slate-800">
      <div className="flex items-center justify-start w-full">
        <button
          onClick={() =>
            dispatch(
              setConfig({
                collapsed: !collapsed,
              })
            )
          }
          className="mx-4">
          <FiMenu size={20} />
        </button>
        <Search />

        <Dropdown6 />
        <span className="ml-auto"></span>
        <Dropdown2 />
        <Dropdown1 />
        <Dropdown4 />
        <Dropdown3 />
        <Dropdown5 />
        <button
          className="flex items-center justify-center w-8 h-16 mx-4"
          onClick={() =>
            dispatch(
              setConfig({
                rightSidebar: !rightSidebar,
              })
            )
          }>
          <FiSettings size={18} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
