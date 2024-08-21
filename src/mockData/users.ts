import { EditableUser } from '../pages/Profile/userForm.tsx';

export type User = {
	id: number;
	name: string;
	email: string;
	phone: string;
	address: string;
};

export const users: User[] = [
	{
		id: 1,
		name: 'John Doe',
		email: 'johndoe@example.com',
		phone: '123-456-7890',
		address: '123 Main St, Town, Country',
	},
	{
		id: 2,
		name: 'Jane Smith',
		email: 'janesmith@example.com',
		phone: '123-456-7891',
		address: '456 Maple St, Town, Country',
	},
	{
		id: 3,
		name: 'William Johnson',
		email: 'williamjohnson@example.com',
		phone: '123-456-7892',
		address: '789 Oak St, Town, Country',
	},
	{
		id: 4,
		name: 'Elizabeth Taylor',
		email: 'elizabethtaylor@example.com',
		phone: '123-456-7893',
		address: '321 Pine St, Town, Country',
	},
	{
		id: 5,
		name: 'James Brown',
		email: 'jamesbrown@example.com',
		phone: '123-456-7894',
		address: '654 Willow St, Town, Country',
	},
	{
		id: 6,
		name: 'Jessica Davis',
		email: 'jessicadavis@example.com',
		phone: '123-456-7895',
		address: '987 Elm St, Town, Country',
	},
	{
		id: 7,
		name: 'Richard Miller',
		email: 'richardmiller@example.com',
		phone: '123-456-7896',
		address: '147 Spruce St, Town, Country',
	},
	{
		id: 8,
		name: 'Linda Williams',
		email: 'lindawilliams@example.com',
		phone: '123-456-7897',
		address: '258 Cedar St, Town, Country',
	},
	{
		id: 9,
		name: 'Robert Jones',
		email: 'robertjones@example.com',
		phone: '123-456-7898',
		address: '369 Birch St, Town, Country',
	},
	{
		id: 10,
		name: 'Patricia Martinez',
		email: 'patriciamartinez@example.com',
		phone: '123-456-7899',
		address: '963 Elm St, Town, Country',
	},
];

export const editUser = (userId: number, data: EditableUser) => {
	users.forEach((user, index) => {
		if (user.id === userId) {
			users[index] = { ...user, ...data };
		}
	});
};
