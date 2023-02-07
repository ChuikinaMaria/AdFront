import './styles/index.scss'
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';



const App = () => {
	const {theme, toggleTheme} = useTheme();	

	return (
		<div className={classNames('app', {}, [theme])}>

			<button onClick={toggleTheme}>TOGGLE</button>
			<Link to='/'>MAIN PAGE</Link>
			<Link to='/about'>ABOUT PAGE</Link>
			<AppRouter />
		</div>

	)
}

export default App;