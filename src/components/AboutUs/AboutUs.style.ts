export const aboutUsStyles = {
  aboutUsSection: "mt-10 flex-col",

  container: `
      max-w-7xl mx-auto flex flex-col md:flex-row
      items-stretch justify-between
      px-4 sm:px-6 lg:px-8 md:gap-4
    `,

  textContainer: `
      w-full md:w-1/2 flex flex-col justify-center
      text-center md:text-left
    `,

  textContent: `
      flex flex-col gap-4 md:gap-6
      py-8 md:py-10 md:items-start
    `,

  heading: `
      font-heading text-3xl md:text-4xl
      font-bold text-text-color
    `,

  paragraph: `
      text-text-color opacity-60 font-body
      md:max-w-[80%]
    `,

  imageContainer: `
      w-full md:w-1/2 flex md:py-10
    `,

  image: `
      w-full object-cover rounded-[10px]
    `,
};
