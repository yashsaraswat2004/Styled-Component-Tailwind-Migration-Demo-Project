
import { Link, NavLink } from "react-router-dom";
import { LightBulbIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ steps}) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-gray-100 p-5 shadow-lg z-50 transition-transform duration-300 ease-in-out `}
    >
      <div className="flex justify-between items-center mb-5">
        <div className="text-xl font-bold text-gray-800">Learning Pathway</div>
      </div>
      <ul className="list-none p-0 m-0 mb-5">
        {steps.map((step, index) => (
          <li key={index} className="mb-2">
            <NavLink
              to={step.link}
              className={({ isActive }) =>
                `block text-gray-700 text-base no-underline py-2 px-4 rounded transition-colors ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              {step.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <hr className="border-t border-gray-300 my-5" />
      <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
        <LightBulbIcon className="h-6 w-6 text-blue-500" />
        <p className="m-0 text-sm text-gray-600">
          Welcome to the Learning Pathway! Use the sidebar to follow the guide. Open the{" "}
          <Link to="/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Template Playground
          </Link>{" "}
          in another tab to experiment as you learn.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;