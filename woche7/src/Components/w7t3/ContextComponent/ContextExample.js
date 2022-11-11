import React, { useState } from 'react';
import Workspace from './Workspace';


export const ThemeContext = React.createContext();

export default function ContextExample() {

    const [isDark, setIsDark] = useState(false);

    function handleToggle() {
        setIsDark(!isDark);

    }

    return (
        <ThemeContext.Provider value={isDark}>
            <button onClick={handleToggle}>Toggle</button>
            <Workspace />
        </ThemeContext.Provider>
    )
}