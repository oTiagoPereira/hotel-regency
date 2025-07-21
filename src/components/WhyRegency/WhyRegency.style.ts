export const whyRegencyStyles = {
  section: `
    bg-secondary min-h-[600px] flex items-center justify-center mt-10 md:mt-0 overflow-hidden
  `,
  container: `
    w-full max-w-7xl mx-auto flex flex-col py-10 px-4
  `,
  header: `
    text-center md:text-start mb-12
  `,
  title: `
    text-3xl font-bold text-text-color mb-2 font-heading
  `,
  subtitle: `
    text-text-color font-body
  `,
  mobileCarouselWrapper: `
    block md:hidden w-full relative
  `,
  mobileCarousel: `
    flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full
  `,
  mobileCardWrapper: `
    flex-shrink-0 snap-center w-[85vw] mx-2
  `,
  dotsWrapper: `
    flex justify-center mt-4 gap-2
  `,
  dot: `
    w-3 h-3 rounded-full transition-all duration-300
  `,
  desktopGrid: `
    hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6
  `,
  card: `
    bg-white shadow-lg rounded-lg p-6 text-center min-h-[220px] flex flex-col items-center justify-between md:px-8 w-[85vw] mx-auto md:w-auto
  `,
  cardIcon: `
    p-3 flex items-center justify-center rounded-full bg-secondary text-icons-secondary
  `,
  cardTitle: `
    text-xl font-semibold my-3 font-heading text-primary
  `,
  cardDesc: `
    text-primary font-body
  `,
};
