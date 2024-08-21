// Define the Activity type
export type RecentActivity = {
	id: number;
	createdAt: Date;
	userId: number;
	name: string;
	description?: string;
};

// Let's generate a list of fake activities
const activities: RecentActivity[] = [];

const userIds = Array.from({ length: 10 }, (_, i) => i + 1);
let activityId = 1;
const activityTypes = [
	'Browsed property listings',
	'Contacted an agent',
	'Added property to favorites',
	'Wrote a property review',
	'Requested more information on a property',
];

userIds.forEach((userId) => {
	const userActivityCounts = Math.floor(Math.random() * 5) + 10;
	for (let j = 0; j < userActivityCounts; j++) {
		const activityIndex = Math.floor(Math.random() * activityTypes.length);

		const activityDate = new Date();
		activityDate.setDate(
			activityDate.getDate() - Math.floor(Math.random() * 30)
		);

		activities.push({
			id: activityId++,
			createdAt: activityDate,
			userId: userId,
			name: `${activityTypes[activityIndex]}`,
			description: `User ${userId} had ${activityTypes[activityIndex].toLowerCase()}.`,
		});
	}
});

export { activities };
