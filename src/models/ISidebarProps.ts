export interface ISidebarProps {
  matches: boolean;
  location: { pathname: string };
  logOut: () => void;
}