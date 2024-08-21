import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className="bg-blue-500 text-white flex w-full justify-between p-4">
			<h1 className="mb-2 text-xl font-bold">User Profile Dashboard</h1>
			<nav className="flex">
				<NavLink
					className={({ isActive }) =>
						isActive
							? 'hover:text-white mr-4 border-b-2 border-solid'
							: 'hover:text-blue-300 mr-4'
					}
					to="/"
				>
					Profile
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? 'hover:text-white mr-4 border-b-2 border-solid'
							: 'hover:text-blue-300 mr-4'
					}
					to="/settings"
				>
					Settings
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
