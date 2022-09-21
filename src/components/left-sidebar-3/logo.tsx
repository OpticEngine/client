import {FiBox, FiMenu} from "react-icons/fi";
import {setConfig} from "../../store/slices/config";
import {useAppSelector, useAppDispatch} from "../../store";
import {Link} from "react-router-dom";

const Logo: React.FC = () => {
  const dispatch = useAppDispatch();
  const {name, collapsed} = useAppSelector((state) => state.config);
  return (
    <div className="truncate flex flex-row items-center justify-start w-full text-base font-bold tracking-wider uppercase whitespace-nowrap text-gray-500 h-16 px-4">
      <Link to="/">
        <a className="flex flex-row items-center justify-start space-x-2">
          <FiBox size={28} />
          <span>{name}</span>
        </a>
      </Link>
      <button
        onClick={() =>
          dispatch(
            setConfig({
              collapsed: !collapsed,
            })
          )
        }
        className="block ml-auto">
        <FiMenu size={20} />
      </button>
    </div>
  );
};

export default Logo;
