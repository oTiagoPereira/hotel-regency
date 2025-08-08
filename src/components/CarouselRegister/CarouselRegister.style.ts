export const CarouselRegisterStyles = {
  container: "hidden md:block relative overflow-hidden rounded-lg h-full w-full",
  gradientOverlay:
    "absolute inset-0 block bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.2)] h-full pointer-events-none",
  image: "h-screen object-cover w-full",
  textWrapper: "absolute bottom-0 left-0 w-full p-6",
  text: "text-text-neutral text-lg font-semibold drop-shadow-lg",
  button:
    "absolute top-1/2 -translate-y-1/2 bg-primary opacity-80 hover:opacity-100 rounded-full p-2 text-text-neutral",
  leftButton: "left-2",
  rightButton: "right-2",
  icon: "h-6 w-6",
};
