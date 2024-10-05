export interface NavItem {
	title: string;
	href: string;
}

interface LinkData {
	title: string;
	href: string;
	index: number;
}

export interface LinkProps {
	data: LinkData;
	isActive: boolean;
	setSelectedIndicator: (href: string) => void;
}