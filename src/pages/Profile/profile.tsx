import { useState } from 'react';
import UserProfile from './userProfile.tsx';
import LastActivities from './lastActivities.tsx';

const Profile = () => {
	const [isProfileOpen, setIsProfileOpen] = useState(true);
	return (
		<>
			<section className="flex justify-start gap-4 p-4">
				<div
					className={`${isProfileOpen ? 'text-blue-500 border-b-blue-500 border-b-2' : 'text-blue-300'} p-2 hover:cursor-pointer`}
					onClick={() => setIsProfileOpen(true)}
				>
					User Profile
				</div>
				<div
					className={`${!isProfileOpen ? 'text-blue-500 border-b-blue-500 border-b-2' : 'text-blue-300'} p-2 hover:cursor-pointer`}
					onClick={() => setIsProfileOpen(false)}
				>
					Recent Activities
				</div>
			</section>
			<section>{isProfileOpen ? <UserProfile /> : <LastActivities />}</section>
		</>
	);
};

export default Profile;
