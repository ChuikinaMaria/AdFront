import '../styles/index.scss'
import { Route, Routes, Link } from 'react-router-dom';
import { MainPageAsync } from '../pages/MainPage/MainPageAsync';
import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';
import { useTheme } from '../styles/theme/useTheme';
import { classNames } from '../helpers/classNames/classNames';



const App = () => {
	const {theme, toggleTheme} = useTheme();	

	return (
		<div className={classNames('app', {}, [theme])}>

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