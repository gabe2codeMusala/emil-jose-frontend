import UserList from './userlist.tsx';
import { useUsers } from '../../hooks/useUsers.ts';

const Sidebar = () => {
	const { usersList } = useUsers();
	return <UserList users={usersList} />;
};

export default Sidebar;
