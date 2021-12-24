export interface SidebarProps {
	matches: boolean;
	location: { pathname: string };
	logOut: () => void;
}
