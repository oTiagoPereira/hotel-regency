export const checkBoxStyles = {
  sectionWrapper : `
    w-full h-auto bg-background max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 relative
  `,

  container : `
    bg-primary flex-col flex items-start rounded-lg justify-between p-2 gap-3
    md:flex-row md:items-center md:h-auto md:gap-0
  `,

  itemWrapper : `
    flex items-center cursor-pointer
  `,

  iconClass : `
    text-secondary
  `,

  textWrapper : `
    text-text-neutral flex gap-4 ml-2
    md:flex-col md:items-center md:gap-1 md:justify-between
  `,

  divider : `
    bg-secondary w-full h-px
    md:w-0.5 md:h-[26px] md:my-auto
  `,

  buttonWrapper : `
    w-full md:w-auto
  `,

  boxPopup: `
    absolute left-0 top-10 md:top-15 mt-2 z-50 bg-secondary text-text-color font-body font-semibold rounded shadow-lg p-4 flex flex-col gap-2 min-w-[140px]
  `,
  boxRow: `
    flex items-center justify-between gap-2
  `,
  boxCounter: `
    flex items-center gap-2
  `,
  boxButton: `
    px-2 py-1 rounded bg-primary text-text-neutral w-6 disabled:opacity-50
  `,
}
