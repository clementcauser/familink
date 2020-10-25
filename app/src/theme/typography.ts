export const typography: Typography = {
    h1: {
        fontFamily: "poppins_bold",
        fontSize: "36px",
    },
    h2: {
        fontFamily: "poppins_bold", 
        fontSize: "32px"
    },
    h3: {
        fontFamily: "poppins_bold",
        fontSize: "28px"
    },
    h4: {
        fontFamily: "poppins_bold",
        fontSize: "24px"
    },
    h5: {
        fontFamily: "poppins_bold",
        fontSize: "18px"
    },
    paragraph: {
        fontFamily: "poppins_medium",
        fontSize: "14px"
    },
}

type Typography = {
    [key in TypographyKeys]: TypographyValues;
}

export type TypographyKeys = "h1" | "h2" | "h3" | "h4" | "h5" | "paragraph"

type TypographyValues = {
    fontFamily: string;
    fontSize: string;
}