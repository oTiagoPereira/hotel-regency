export const HeroBannerStyles = {
  sectionStyle: `
    bg-secondary relative overflow-hidden
    h-screen max-h-[800px]
  `,

  containerStyle: `
    max-w-7xl mx-auto flex flex-col md:flex-row
    items-center justify-between px-4 sm:px-6 lg:px-8
    md:h-full
  `,

  contentStyle: `
    w-full md:w-1/2 flex flex-col text-center items-center justify-center
    md:items-start md:justify-between z-10 relative py-8 md:text-start
  `,

  titleStyle: `
    text-4xl md:text-5xl font-bold mb-4 text-text-color font-heading
  `,

  highlightStyle: `text-primary`,

  descriptionStyle: `
    text-text-color mb-4 opacity-60 md:max-w-[80%] font-body
  `,

  imageContainerStyle: `
    w-full h-auto max-h-[350px] relative
    md:w-1/2 md:absolute md:right-0 md:top-0 md:h-full md:max-h-[800px] md:p-2.5
  `,

  imageStyle: `
    w-full max-h-[350px] h-auto object-cover object-center
    md:h-full md:max-h-[800px] md:max-w-[800px]
    rounded-tl-[100px] md:rounded-tl-[200px]
    rounded-tr-[10px] rounded-bl-[10px]
    rounded-br-[100px] md:rounded-br-[200px]
  `,
};
