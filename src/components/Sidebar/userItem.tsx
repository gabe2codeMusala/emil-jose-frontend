import { User } from '../../mockData/users.ts';
import { FC } from 'react';
import { useUsers } from '../../hooks/useUsers.ts';

type ItemUserProps = {
	user: User;
	key: [key: string];
};
const UserItem: FC<ItemUserProps> = ({ user }) => {
	const { selectedUser, setSelectedUser } = useUsers();
	return (
		<li
			key={user.id}
			className={`hover:bg-blue-650 cursor-pointer rounded bg-blue-500 p-2 transition-colors duration-200 ${selectedUser?.id === user.id ? 'bg-blue-700' : ''}`}
			onClick={() => setSelectedUser(user)}
		>
			<span>{user.name}</span>
		</li>
	);
};

export default UserItem;
