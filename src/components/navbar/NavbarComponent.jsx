import React, { useContext, useState } from 'react'
import styles from './NavbarComponent.module.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Tooltip } from '@mui/material';
import { ThemeContext } from '../../contexts/ThemeContext';

const NavbarComponent = ({movie,setMovie}) => {
const [search, setSearch] = useState("")
  const [isDark, setIsDark] = useContext(ThemeContext);
  const handleSearch=(e)=>{
    const value = e.target.value;
    setSearch(value);
    value.length === 0 ? setMovie("avengers"): setMovie(value);
  }
  return (
    <>
        <div className={styles.navbarParent}>
            <div className={styles.navbarLogo}>🎥🎬</div>
            <div className={styles.navbarTitle}>The Movify Project</div>
            <div className={styles.navbarSearch}>
              <div className={styles.search}>🔍</div>
              <input type="text" placeholder="enter a movie..." 
              value={search} onChange={handleSearch}/>
            </div>
            {!isDark ? (<Tooltip title="Switch to dark mode">
              <DarkModeIcon className={styles.icons} onClick={()=>{
                setIsDark(!isDark);
                document.body.classList.add("darkMode");
              }}
              />
            </Tooltip>
          ):(
            <Tooltip title="Switch to light mode">
              <LightModeIcon className={styles.icons} onClick={()=>{
                setIsDark(!isDark);
                document.body.classList.remove("darkMode");
              }}
              />
            </Tooltip>
          )}
        </div>
    </>
  )
}

export default NavbarComponent;