import styles from '../styles/global.css'
import DarkModeToggle from "react-dark-mode-toggle";
import GithubCorner from 'react-github-corner';
import { useState, useEffect } from 'react';



export default function MyApp({ Component, pageProps }) {

    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <div className={isDarkMode ? "dark-mode" : "light-mode"}>
            <nav>
                <div className="darkmodeToggleContainer">
                    <GithubCorner href="https://github.com/mmkvdev/MMKblog" />
                    <DarkModeToggle
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                        size={50}
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