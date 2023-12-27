// import Login from './Components/mainPage/Login/Login';

import DarkModeToggle from "./Components/mainPage/Learning/DarkModeToggle";

// line no 296 theme file ${props => props?.color?.theme == 'dark' ? '#141414' : 'white'}
const App = () => {
  return (
    <>
      <div>
        <div className="bg-blue-500 p-4 rounded-md hover:bg-blue-700 transition duration-300">
          <p className="text-white">Hover me</p>
        </div>
      </div>
      <DarkModeToggle />
    </>
  );
}

export default App;