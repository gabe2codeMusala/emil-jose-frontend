import {
	createContext,
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useMemo,
	useState,
} from 'react';
import { User, users } from '../mockData/users.ts';

type UserContextProps = {
	usersList: User[];
	selectedUser: User | null;
	setSelectedUser: Dispatch<SetStateAction<User | null>>;
};
export const UsersContext = createContext<UserContextProps | null>(null);

export const UsersContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	//getting the mock data
	const usersList = users;

	const value = useMemo(() => {
		return {
			selectedUser,
			setSelectedUser,
			usersList,
		};
	}, [selectedUser, usersList]);
	return (
		<UsersContext.Provider value={value}>{children}</UsersContext.Provider>
	);
};
