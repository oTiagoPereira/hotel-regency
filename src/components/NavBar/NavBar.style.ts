export const navbarStyles = {
    nav: "bg-primary",

    container: "max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8",
    innerContainer: "flex justify-between h-16",

    logoContainer: "flex-shrink-0 flex items-center",
    logoLink: "text-neutral text-2xl font-bold",
    logoImage: "h-10 w-10",

    mobileButton:
      "inline-flex items-center justify-center p-2 rounded-md text-text-neutral hover:bg-primary-hover focus:outline-none",
    mobileIcon:
      "h-6 w-6 flex items-center justify-center",

    desktopMenu: "hidden sm:flex sm:items-center sm:space-x-6",

    navLinkBase:
      "relative font-body text-text-neutral hover:text-text-neutral-hover transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-3px] after:left-1/2 after:transform after:-translate-x-1/2 after:h-[1.2px] after:w-full after:bg-secondary after:transition-transform after:duration-300 after:ease-in-out",
    navLinkActive: "after:scale-x-100",
    navLinkInactive: "after:scale-x-0 hover:after:scale-x-100",

    mobileMenu: "sm:hidden px-2 pt-2 pb-3 space-y-1 transition-transform duration-300 ease-in-out",
    mobileLinkBase: "block px-3 py-2 rounded-md text-base font-medium",
    mobileLinkActive: "text-text-neutral bg-primary-hover",
    mobileLinkInactive: "text-text-neutral hover:bg-primary-hover",
  };
