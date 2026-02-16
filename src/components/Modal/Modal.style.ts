export const ModalStyles = {
  overlay:
    "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm",
  container:
    "bg-white rounded-2xl shadow-2xl w-full max-h-[90vh] flex flex-col border border-gray-100 overflow-hidden",
  size: {
    small: "max-w-md",
    default: "max-w-lg",
    large: "max-w-2xl",
    full: "max-w-5xl",
  },
  header:
    "flex items-center justify-between px-6 py-5 border-b border-gray-100",
  title: "text-xl font-semibold text-gray-800",
  closeButton:
    "p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors",
  content: "flex-1 overflow-y-auto px-6 py-6",
  footer:
    "px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3",
};
