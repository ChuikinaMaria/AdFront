import './styles/index.scss'
import { Route, Routes, Link } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage'; 
import { Suspense } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';



const App = () => {
	const {theme, toggleTheme} = useTheme();	

	return (
		<div className={classNames('app', {}, [theme])}>

			<button onClick={toggleTheme}>TOGGLE</button>
			<Link to='/'>MAIN PAGE</Link>
			<Link to='/about'>ABOUT PAGE</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/'} element={<MainPage />}/>
					<Route path={'/about'} element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>

	)
}

export default App;