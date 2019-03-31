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

export const DEFAULT_VIEW = navItems[0].to;

export const navItemMap: NavItemMap = navItems.reduce(
  (o, i) => {
    o[i.to] = i;
    return o;
  },
  {} as any,
);

export const otherNav: { [path: string]: NavItem } = {
  "/students/:id": {
    to: "/students/:id",
    title: "Student Details",
  },
};

export function getCurrentPageTitle(path: string) {
  const currentNavItem = navItemMap[path] || otherNav[path];
  return currentNavItem ? currentNavItem.title : "";
}

export function makeStudentDetailsURL(id: string) {
  return `/students/${id}`;
}
