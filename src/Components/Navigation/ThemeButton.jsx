import React, { useState } from 'react';

function ThemeButton() {
    const [theme, setTheme] = useState('light'); // Assuming 'light' is the default theme

    const handleThemeChange = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark-theme');
        setTheme(newTheme);
    };

    return (
        <div className="theme-button-container">
            <div className="theme_container">
                <input
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                    onChange={handleThemeChange}
                />
                <label className="switch" htmlFor="checkbox">
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    );
}

export default ThemeButton;

