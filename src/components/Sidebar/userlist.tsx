import { User } from '../../mockData/users.ts';
import { FC } from 'react';
import UserItem from './userItem.tsx';
type UserListProps = {
	users: User[];
};
const UserList: FC<UserListProps> = ({ users }) => {
	return (
		<ul className="space-y-2" key={users.length}>
			{users.map((user) => {
				return <UserItem user={user} key={user.id} />;
			})}
		</ul>
	);
};

export default UserList;
