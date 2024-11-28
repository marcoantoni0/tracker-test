import {Moon, Sun} from "@phosphor-icons/react";
import {Title} from "./Title.tsx";

interface HeaderProps {
  isDarkMode?: boolean;
  switchColor: () => void;
}
export const Header = ({ isDarkMode, switchColor}: HeaderProps) => {
  return (
    <div className="w-full h-20 p-5 bg-transparent shadow dark:shadow-gray-800 justify-between items-center gap-5 inline-flex">
      <div className="justify-start items-center gap-5 inline-flex">
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full"/>
        <div className="w-96">
          <Title size="m">Achievement Tracker</Title>
        </div>
      </div>

      <div
        onClick={switchColor}
        className="cursor-pointer"
      >
        {isDarkMode
          ? (<Sun size={28} className="text-gray-50" />)
          : (<Moon size={28} className="text-gray-950" />)
        }
      </div>
    </div>
  )
}