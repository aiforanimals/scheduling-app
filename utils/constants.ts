import { CakeIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export type NavItem = {
  name: string;
  href: string;
  icon: any;
};

export const CONSTS = {
  TITLE: "AI FOR ANIMALS 2025",
  DESCRIPTION:
    "The Conference is happening March 1 - 2, 2025 at UC Berkeley. Check out the schedule below!",
  MULTIPLE_EVENTS: false,
  // If you have multiple events, add your events to the nav bar below
  // If you only have one event, you can leave the array empty
  // Find available icons at https://heroicons.com/
  NAV_ITEMS: [
    { name: "Conference", href: "/Conference", icon: UserGroupIcon },
  //  { name: "After Party", href: "/After-Party", icon: CakeIcon },
  ] as NavItem[],
};
