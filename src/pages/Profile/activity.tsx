import { RecentActivity } from '../../mockData/recent-activities.ts';
import { FC } from 'react';

type ActivityProps = {
	activity: RecentActivity;
};
const Activity: FC<ActivityProps> = ({ activity }) => {
	return (
		<li
			key={activity.id}
			className="mb-1 flex w-full items-center justify-between rounded p-2 text-blue-500 shadow"
		>
			<span className="flex-1 font-medium">{activity.name}</span>
			<span className="flex-shrink-0 text-sm text-gray-500">
				{new Date(activity.createdAt).toDateString()}
			</span>
		</li>
	);
};

export default Activity;
