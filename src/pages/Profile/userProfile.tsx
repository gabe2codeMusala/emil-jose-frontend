import { useUsers } from '../../hooks/useUsers.ts';
import MostFrequentActivity from './mostFrequentActivity.tsx';
import UserForm from './userForm.tsx';

const UserProfile = () => {
	const { selectedUser } = useUsers();

	if (!selectedUser) {
		return <h2>Please Select a user</h2>;
	}
	return (
		<div className="flex items-start justify-between">
			<UserForm user={selectedUser} />
			<MostFrequentActivity userId={selectedUser.id} />
		</div>
	);
};

export default UserProfile;
