import { createTheme } from "@mui/material";

const darkPink = "#CA8787";
const darkGray = "#CDE8E5";
const lightGray = "#F1F1F1";
const darkBlue = "#153448";
const lightBlue = "#9AC8CD";
const lightBlueGreen = "#b2dfdb";

const theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
        caption: {
            fontSize: 15,
            fontStyle: 'italic'
        }
    },
    palette: {
        primary: {
            main: darkBlue,
            contrastText: lightGray
        },
        secondary: {
            main: darkPink
        },
        info: {
            main: lightBlueGreen
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderColor: darkGray,
                    borderRadius: "35px",
                    padding: "6px 24px",
                    color: darkBlue,
                    "&:hover":{
                        color: lightGray
                    },
                },
                contained: {
                    backgroundColor: lightBlue
                }
            },
            variants: [
                {
                    props: { variant: 'unselect' },
                    style: {
                        borderRadius: "5px",
                        border: "1px solid",
                        borderColor: lightGray,
                        "&:hover": {
                            color: darkBlue,
                        }
                    }
                },
                {
                    props: { variant: 'selected' },
                    style: {
                        backgroundColor: darkBlue,
                        color: lightGray,
                        borderRadius: "5px",
                        border: "1px solid",
                        borderColor: lightGray,
                        "&:hover": {
                            backgroundColor: lightBlue
                        }
                    }
                },
                {
                    props: { variant: 'displaying'},
                    style: {
                        backgroundColor: darkBlue,
                        color: lightGray,
                        borderRadius: "5px",
                        border: "1px solid",
                        borderColor: lightGray,
                        "&:hover": {
                            color: darkBlue,
                            cursor: "default"
                        }
                    }
                }
            ]            
        }
    }
})

export default theme