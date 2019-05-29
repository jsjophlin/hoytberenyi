import Typography from "typography";

const typography = new Typography({
  title: "HoytBerenyi",
  baseFontSize: "16px",
  baseLineHeight: 1.35,
  /* Use the system font stack as fallback */
  headerFontFamily: [
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol"
  ],
  bodyFontFamily: [
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol"
  ],
  scaleRatio: 2.441,
  headerWeight: 700,
  overrideStyles: () => ({
    h1: {
      fontSize: "2.375rem",
      fontWeight: "900"
    },
    h2: {
      color: "#002856",
      fontSize: "2.2rem",
      fontWeight: "700"
    },
    li: {
      color: "#808888"
    }
  })
});

export default typography;
