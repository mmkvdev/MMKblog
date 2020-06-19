import styles from '../styles/global.css'
import DarkModeToggle from "react-dark-mode-toggle";
import { useState, useEffect } from 'react';
import SocialMedia from '../components/SocialMedia'

export default function MyApp({ Component, pageProps }) {

    const [isDarkMode, setIsDarkMode] = useState(false);
    //console.log(isDarkMode)

    /*useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(isDarkMode));
    }, [isDarkMode])*/

    function getInitialMode() {
        // const savedMode = JSON.parse(localStorage.getItem("dark"));
        // console.log(savedMode)
        // return savedMode || false;
    }


    return (
        <div className={isDarkMode ? "dark-mode" : "light-mode"}>
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
                Made with <span role="img">🕶</span> by <a href="https://github.com/Madhu5A3">MMK</a>
            </p>
        </div>
    )
}