import React from "react";

function App() {

  React.useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
 const toggleTheme = () => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white h-screen">
      <div className="container mx-auto p-3">
        <div className="flex">
          <div className="flex-grow text-4xl">
            Hello world!
          </div>
          <button type="button" onClick={toggleTheme} className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
