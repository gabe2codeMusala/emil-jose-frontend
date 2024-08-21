import { FC, useMemo } from 'react';
import { activities } from '../../mockData/recent-activities.ts';

type MostFrequentProps = {
	userId: number;
};
const MostFrequentActivity: FC<MostFrequentProps> = ({ userId }) => {
	// optimized for a large dataset
	const mostFrequentActivity = useMemo(() => {
		//store the total activities and just return the most frequent to avoid the sort
		const activityCount: { [key: string]: number } = {};
		let mostFrequent = '';
		let maxCount = 0;

		for (const activity of activities) {
			if (activity.userId === userId) {
				const name = activity.name;
				activityCount[name] = (activityCount[name] || 0) + 1;

				if (activityCount[name] > maxCount) {
					maxCount = activityCount[name];
					mostFrequent = name;
				}
			}
		}

		return [mostFrequent, maxCount];
	}, [userId]);

	return (
		<div className="flex w-full flex-col">
			<h2 className="text-2xl text-blue-500">Most Frequent Activity</h2>
			<p className="italic text-blue-500">{mostFrequentActivity[0]}</p>
			<p className="text-blue-500">Count: {mostFrequentActivity[1]}</p>
		</div>
	);
};

export default MostFrequentActivity;
