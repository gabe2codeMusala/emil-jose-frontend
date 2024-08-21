import { useForm } from 'react-hook-form';
import { editUser, User } from '../../mockData/users.ts';
import { validateEmail } from '../../utils/util.ts';
import { FC, useEffect } from 'react';
type FormProps = {
	user: User;
};

export type EditableUser = Omit<User, 'id'>;

const UserForm: FC<FormProps> = ({ user }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<EditableUser>();

	useEffect(() => {
		reset(user);
	}, [user, reset]);

	const onSubmit = (data: EditableUser) => {
		console.log(data);
		editUser(user.id, data);
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex w-full flex-col flex-wrap items-start justify-start gap-4"
		>
			<input
				type="text"
				defaultValue={user.name}
				{...register('name', { required: true })}
				aria-invalid={errors.name ? 'true' : 'false'}
			/>
			{errors.name && (
				<span className="text-red-500">This field is required</span>
			)}
			<input
				type="email"
				defaultValue={user.email}
				{...register('email', {
					required: true,
					validate: (value) => validateEmail(value) || 'Invalid email format',
				})}
				aria-invalid={errors.email ? 'true' : 'false'}
			/>
			{errors.email && (
				<span className="text-red-500">
					{errors.email.message || 'This field is required'}
				</span>
			)}
			<input
				type="tel"
				defaultValue={user.phone}
				{...register('phone', { required: true })}
			/>
			{errors.phone && (
				<span className="text-red-500">This field is required</span>
			)}
			<input
				type="text"
				defaultValue={user.address}
				{...register('address', { required: true })}
			/>
			{errors.address && (
				<span className="text-red-500">This field is required</span>
			)}
			<button
				type="submit"
				className="bg-blue-500 hover:bg-blue-700 text-white cursor-pointer rounded p-2 capitalize transition-colors duration-200"
			>
				update user
			</button>
		</form>
	);
};

export default UserForm;
