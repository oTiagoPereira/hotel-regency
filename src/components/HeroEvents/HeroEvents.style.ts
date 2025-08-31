export const heroEventsStyles = {
  mainContainer: "bg-background",
  heroSection:
    "h-[300px] md:h-[600px] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4 relative",
  heroOverlay:
    "bg-black opacity-50 md:opacity-60 p-10 rounded-lg w-full h-full absolute z-[0]",
  heroContent: "relative z-[1]",
  heroTitle: "font-serif text-4xl md:text-7xl font-medium leading-tight",
  heroSubtitle:
    "max-w-md mx-auto mt-4 text-md md:text-lg font-medium leading-relaxed",
  eventsSection: "py-20 md:py-28",
  sectionContainer:
    "max-w-screen-2xl mx-auto flex flex-col justify-between px-4 sm:px-6 lg:px-8 w-full",
  eventsContainer: "mt-12 w-full mx-auto space-y-6",
  eventCard:
    "bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6",
  eventImage: "w-full md:w-40 h-50 sm:h-36 object-cover rounded-md",
  eventDetails: "flex-grow text-center sm:text-left",
  eventTitle: "font-serif text-2xl text-heading",
  eventInfo: "text-text-color opacity-70 mt-1",
  eventButtonContainer: "flex w-full sm:w-auto",
  locationsSection:
    "max-w-screen-2xl mx-auto flex flex-col justify-between px-4 sm:px-6 lg:px-8 w-full",
  locationsTitle: "mb-16",
  locationsContainer: "space-y-20 text-text-color",
  locationCard:
    "flex flex-col text-center md:text-left md:flex-row items-center gap-12 md:justify-between",
  locationCardReversed:
    "flex flex-col text-center md:text-left md:flex-row-reverse items-center gap-12 md:justify-between",
  locationImageContainer: "md:w-1/2",
  locationImage: "w-full rounded-lg shadow-lg",
  locationDetails: "md:w-1/3",
  locationSubtitle: "font-body text-sm uppercase tracking-[2px] font-semibold",
  locationTitle: "font-heading text-4xl mt-3",
  locationDescription: "mt-4 leading-relaxed opacity-70",
  locationButtonContainer: "mt-6 flex md:justify-center",
  bookingSection: "bg-secondary py-20 md:py-28 mt-28",
  bookingForm: "mt-12 flex flex-col gap-4 mx-auto h-auto w-full",
  formRow: "flex flex-col md:flex-row gap-4 w-full",
  formField: "flex-1 flex flex-col",
  formLabel: "text-sm text-text-color mb-1",
  formInput:
    "w-full px-4 h-14 border border-gray-800 rounded-lg text-text-color placeholder-text-color focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all",
  formButtonContainer: "flex items-center justify-center w-full mt-8",
  gallerySection: "py-20 md:py-28",
  galleryContainer:
    "mt-12 grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[500px]",
  galleryImage: "w-full h-full object-cover rounded-lg",
};

export const sectionTitleStyles = {
  container: "text-center md:text-left text-text-color",
  subtitle: "font-body text-sm uppercase tracking-[2px] mb-3 font-semibold",
  title: "font-heading text-4xl md:text-5xl text-heading",
};
