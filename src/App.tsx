import Layout from './components/layout.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile/profile.tsx';
import Settings from './pages/settings.tsx';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Profile />} />
						<Route path="settings" element={<Settings />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
