export interface NavItem {
  title: string;
  to: string;
}

export interface NavItemMap {
  [to: string]: NavItem;
}

export const navItems: NavItem[] = [
  {
    title: "Daybook",
    to: "/daybook",
  },
  {
    title: "Equipment",
    to: "/equipment",
  },
  {
    title: "Charges",
    to: "/charges",
  },
  {
    title: "Packages",
    to: "/packages",
  },
  {
    title: "Phone Log",
    to: "/phone-log",
  },
  {
    title: "Calendar",
    to: "/calendar",
  },
  {
    title: "Logout",
    to: "/logout",
  },
];

export const navItemMap: NavItemMap = navItems.reduce(
  (o, i) => {
    o[i.to] = i;
    return o;
  },
  {} as any,
);
