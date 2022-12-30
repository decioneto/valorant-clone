export interface MenuItemProps {
    name: string;
    isDropDown: boolean;
    subitems?: {
        name: string;
        link: string;
    }[];
}
