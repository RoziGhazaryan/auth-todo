import { User } from './User';

export interface UserState {
	userState: User;
	isLoading: boolean;
	error: string;
}
