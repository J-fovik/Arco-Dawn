type BasicsState = string | number | boolean | null;

type Dispatch<A> = (value: A) => void;

type StringAndUndefined = string | undefined;

type NumberAndUndefined = number | undefined;

type RoleType = '' | '*' | 'admin' | 'user';

type SizeProps = 'mini' | 'small' | 'medium' | 'large';

interface AnyObject {
	[key: string]: any;
}

interface AppState {
	theme: string;
	colorWeak: boolean;
	colorWeakNumber: number;
	navbar: boolean;
	menu: boolean;
	topMenu: boolean;
	menuCollapse: boolean;
	footer: boolean;
	themeColor: string;
	menuWidth: number;
	globalSettings: boolean;
	device: string;
	tabBar: boolean;
	menuFromServer: boolean;
	serverMenu: RouteRecordNormalized[];
	locale: string;
	size: 'mini' | 'medium' | 'large' | 'small';
	appName: string;
	navbarHeight: number;
	unreadMessage: number;
	[key: string]: unknown;
}

interface UserState {
	loginName?: string;
	nickName?: string;
	phoneNumber?: string;
	dedicatedCode?: string;
	roleCode?: string;
	roleId?: string;
	token?: string;
	updateUser?: string;
	userName?: string;
	bz?: string;
	createTime?: string;
	createUser?: string;
	id?: string;
	isCancel?: string;
	isDelete?: string;
	roleList?: Array<string>;
}
