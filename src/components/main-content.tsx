import Sidebar from './Sidebar/sidebar.tsx';
import { Outlet } from 'react-router-dom';
import { UsersContextProvider } from '../context/UsersContext.tsx';

const MainContent = () => {
	return (
		<UsersContextProvider>
			<main className="bg-grey-200 grid w-full grid-cols-12 gap-4 p-2">
				<aside className="col-span-2 h-[calc(100vh-90px)] bg-blue-500 p-4 text-white">
					<Sidebar />
				</aside>
				<section className="col-span-10">
					<Outlet />
				</section>
			</main>
		</UsersContextProvider>
	);
};

export default MainContent;
