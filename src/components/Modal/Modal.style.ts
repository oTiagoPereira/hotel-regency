export const ModalStyles = {
  overlay:
    "fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-md",
  container:
    "bg-neutral rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full m-4 max-h-[90vh] flex flex-col border border-border-light overflow-hidden",
  size: {
    small: "max-w-md",
    default: "max-w-lg",
    large: "max-w-2xl",
    full: "max-w-5xl",
  },
  header:
    "flex items-center justify-between px-6 py-5 border-b border-border-light",
  title: "text-xl font-semibold text-text-color",
  closeButton:
    "p-2 hover:bg-border-light rounded-full text-text-muted hover:text-text-color/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary w-9 h-9 cursor-pointer flex items-center justify-center",
  content: "flex-1 overflow-y-auto px-6 py-6",
  footer:
    "px-6 py-4 border-t border-border-light bg-surface flex flex-col-reverse md:flex-row md:justify-end gap-3",
};
