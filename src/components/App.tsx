import './index.scss'
import { Route, Routes, Link } from 'react-router-dom';
import { MainPageAsync } from '../pages/MainPage/MainPageAsync';
import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';

const App = () => {
	return (
		<div className='app'>
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