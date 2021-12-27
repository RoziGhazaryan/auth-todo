import { User } from './User';

export type UserState = {
	userState: User;
	isLoading: boolean;
	error: string;
}
