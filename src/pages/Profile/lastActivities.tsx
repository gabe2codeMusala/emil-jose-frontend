import {
	activities,
	RecentActivity,
} from '../../mockData/recent-activities.ts';
import Activity from './activity.tsx';
import { useUsers } from '../../hooks/useUsers.ts';

const LastActivities = () => {
	const { selectedUser } = useUsers();
	const currentActivities: RecentActivity[] = activities.filter(
		(act) => act.userId === selectedUser?.id
	);
	return (
		<div className="flex w-full flex-col items-start justify-start gap-2">
			<ul className="w-full list-inside list-disc">
				{currentActivities.map((activity) => (
					<Activity activity={activity} />
				))}
			</ul>
		</div>
	);
};

export default LastActivities;
