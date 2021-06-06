import styles from '../styles/global.css'
import DarkModeToggle from "react-dark-mode-toggle";
import GithubCorner from 'react-github-corner';
import { useState, useEffect } from 'react';
import store from '../lib/storage';



export default function MyApp({ Component, pageProps }) {

    const [isDarkMode, setIsDarkMode] = useState(false);

    /* Maintaining a session storage to retain chosen states */
    useEffect(() => {
        const currentMode = isDarkMode ? 'dark' : 'light';
        store.set('mode',currentMode);
    });

    return (
        <div className={isDarkMode ? "dark-mode" : "light-mode"}>
             <GithubCorner href="https://github.com/mmkvdev/MMKblog" />
            <nav>
                <div className="darkmodeToggleContainer">
                    <DarkModeToggle
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                        size={60}
                        speed={2}
                    />
                </div>
            </nav>
            <Component {...pageProps} />
            <p className="footerContainer">
                Made with <span role="img">🕶</span> by <a href="https://github.com/mmkvdev/">MMK</a>
            </p>
        </div>
    )
}