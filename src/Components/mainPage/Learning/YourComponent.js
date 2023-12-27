import { useState } from 'react';

const YourComponent = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!isDarkMode);
    };

    return (
        <>
            <div className={`bg-${isDarkMode ? 'dark' : 'light'} text-${isDarkMode ? 'light' : 'dark'}`}>
                <h1>Your App Content Goes Here</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </>
    );
};

export default YourComponent;
