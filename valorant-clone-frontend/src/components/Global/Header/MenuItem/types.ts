export interface MenuItemProps {
    label: string;
    href?: string;
    hasDropMenu?: boolean;
    submenus?: {
        label: string;
        slug: string;
        newTab: boolean;
    }[];
}
