import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher/LangSwitcher';

interface SidebarProps {
 className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}

	return (

		<div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [])}>
			<button onClick={onToggle}>Toggle</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang}/>
			</div>

 </div>
 );
};