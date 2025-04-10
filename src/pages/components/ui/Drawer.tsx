import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

//const drawerOptions = ["Home", "Profile", "Settings", "Dark Mode"]
const Drawer = ({ isOpen, setIsOpen }: DrawerProps) => {
  //const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();
  return (
    <div>
      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-600"
        >
          ✖
        </button>

        <div className="p-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="block p-2 hover:bg-gray-200">
                Home
              </a>
            </li>
            <li>
              <a className="block p-2 hover:bg-gray-200 cursor-pointer" onClick={() => navigate("/profile")}>
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-200">
                Settings
              </a>
            </li>
            <li 
            // className="flex items-center gap-2"
            >
              <a href="#" className="block p-2 hover:bg-gray-200">
                Dark Mode
              </a>
              {/* <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
              >
                {theme === "dark" ? (
                  <Sun size={16} color="yellow" />
                ) : (
                  <Moon size={16} color="black" />
                )}
              </button> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
