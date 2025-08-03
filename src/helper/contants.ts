import theme from "../../theme";

export const PRIMARY_COLOR = theme.palette.primary.main
export const PRIMARY_COLOR_LIGHT = theme.palette.primary.light
export const PRIMARY_TEXT_COLOR = theme.palette.text.primary
export const PRIMARY_BG_COLOR = theme.palette.background.default
export const SECONDARY_BG_COLOR = theme.palette.secondary.main
export const SECONDARY_TEXT_COLOR = theme.palette.text.secondary
export const SECONDARY_CONTRAST_COLOR = theme.palette.secondary.contrastText
export const SECONDARY_DARK_COLOR = theme.palette.secondary.dark


export const BACKGROUND_GRADIENT = {
// background: 'linear-gradient(150deg, rgba(246, 244, 240, 1) 23%, rgba(64, 82, 181, 1) 100%)'
// background: "linear-gradient(150deg, rgba(61, 61, 61, 1) 23%, rgba(64, 82, 181, 1) 100%)"
// background: "linear-gradient(180deg,rgba(246, 244, 240, 1) 23%, rgba(64, 82, 181, 1) 100%)"
// background: "linear-gradient(159deg,rgba(246, 244, 240, 1) 67%, rgba(64, 82, 181, 1) 100%)"
// backgroundImage: "linear-gradient(to left top, #4052b5, #5c56c1, #7859cb, #925bd4, #ad5cdc, #d25ecd, #ed66be, #ff74b1, #ff97a0, #ffbba6, #f8dac3, #f6f4f0)"
// backgroundImage: "linear-gradient(to left top, #4052b5, #b363a2, #dc8f99, #e8c4b4, #f6f4f0)"
background: "linear-gradient(159deg,rgba(246, 244, 240, 1) 0%, rgba(197, 202, 233, 1) 100%)"
}

export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

export const scrollToSection = (id: string) => {
    console.log(id)
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Links
export const YOUTUBE_LINK = "https://www.youtube.com/channel/UC2F8fdGwKP18tyqEKtGRxeg"