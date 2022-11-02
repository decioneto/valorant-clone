export interface SubMenuProps {
    className: string;
    submenusItems: {
        label: string;
        slug: string;
        newTab: boolean;
    }[];
}
