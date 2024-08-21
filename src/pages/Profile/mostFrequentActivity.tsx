import { FC, useMemo } from 'react';
import { activities } from '../../mockData/recent-activities.ts';

type MostFrequentProps = {
	userId: number;
};
const MostFrequentActivity: FC<MostFrequentProps> = ({ userId }) => {
	const selectedUserActivities = activities.filter(
		(activity) => activity.userId === userId
	);

	const mostFrequent = useMemo(() => {
		const mostFrequentActivity: { [key: string]: number } =
			selectedUserActivities.reduce((acc: { [key: string]: number }, curr) => {
				acc[curr.name] = (acc[curr.name] || 0) + 1;
				return acc;
			}, {});

		const sortedActivities = Object.entries(mostFrequentActivity).sort(
			(a, b) => b[1] - a[1]
		);
		return sortedActivities[0];
	}, [selectedUserActivities]);

	return (
		<div className="flex w-full flex-col">
			<h2 className="text-2xl text-blue-500">Most Frequent Activity</h2>
			<p className="italic text-blue-500">{mostFrequent[0]}</p>
			<p className="text-blue-500">Count: {mostFrequent[1]}</p>
		</div>
	);
};

export default MostFrequentActivity;
