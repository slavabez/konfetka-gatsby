export interface ITheme {
  palette: {
    darkPrimary: string;
    primary: string;
    midPrimary: string;
    lightPrimary: string;
    black: string;
    white: string;
  };
  spacing: {
    unit: number;
  };
}

const mainTheme = {
  palette: {
    mainColor: `#fe6321`,
    mainAccent: `#70401c`,
    headerColor: `#FD5B1F`,
    highlightColor: `#FE6A23`,
    textColor: `#3b3b3b`
  },
  spacing: {
    unit: 8,
  },
};

export default mainTheme;
