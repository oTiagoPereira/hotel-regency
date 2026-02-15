export const DashboardSidebarStyles = {
    // Base aside styles
    aside: "fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-50 transition-transform duration-300 ease-in-out md:translate-x-0",

    // Mobile states
    mobileOpen: "translate-x-0 shadow-xl",
    mobileClosed: "-translate-x-full",

    // Overlay for mobile
    overlay: "fixed inset-0 bg-black/50 z-40 md:hidden animate-fadeIn",

    header: "h-16 flex items-center justify-between border-b border-gray-200 px-4",
    headerContent: "flex items-center gap-2",
    closeButton: "md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg",

    logoWrapper: "w-10 h-10 p-1.5 bg-primary rounded-lg flex items-center justify-center text-white font-bold",
    logo: "w-8 object-contain filter brightness-0 invert",
    title: "font-bold text-gray-900 leading-none",
    subtitle: "text-xs text-gray-500",
    nav: "flex-1 overflow-y-auto py-4",
    linkBase: "flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors",
    linkActive: "text-primary border-r-4 border-primary bg-primary-50/50",
    linkInactive: "text-gray-500 hover:bg-gray-50 hover:text-gray-900",
    iconActive: "text-primary",
    iconInactive: "text-gray-400",
    footer: "p-4 border-t border-gray-200",
    logoutButton: "flex items-center gap-3 px-4 py-2 w-full text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors",
    logoutIcon: "w-5 h-5",
};
