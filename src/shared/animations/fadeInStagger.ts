export const fadeInStagger = (delay = 0.2) => ({
  container: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: delay,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  },
});
