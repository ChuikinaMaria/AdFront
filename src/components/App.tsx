import '../styles/index.scss'
import { Route, Routes, Link } from 'react-router-dom';
import { MainPageAsync } from '../pages/MainPage/MainPageAsync';
import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async';
import { Suspense, useContext, useState } from 'react';
import { ThemeContext } from '../styles/theme/ThemeContext';
import { Theme } from '../styles/theme/ThemeContext';
import { useTheme } from '../styles/theme/useTheme';



const App = () => {
	const {theme, toggleTheme} = useTheme();	

	return (
		<div className={`app ${theme}`}>

			<button onClick={toggleTheme}>TOGGLE</button>
			<Link to='/'>MAIN PAGE</Link>
			<Link to='/about'>ABOUT PAGE</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/'} element={<MainPageAsync />}/>
					<Route path={'/about'} element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		</div>

	)
}

export default App;