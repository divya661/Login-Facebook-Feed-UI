import { createContext, useContext } from 'react';

export interface Theme {
  components: {
    initialsAvatar: {
      backgroundColor: string;
    };
    page: {
      colors: {
        background: {
          primary: string;
          secondary: string;
          teriatry: string;
        },
        text: {
          primary: string;
          secondary: string;
          teriatry: string;
        },
        button:{
          primary: string;
        },
        border:{
          primary:string;
          secondary:string;
        }
      }
    };
  };
}

const defaultTheme: Theme = {
  components: {
    page: {
      colors: {
        background: {
          primary: "#131319",
          secondary: "#27292D",
          teriatry: "#191920",
        },
        text: {
          primary: "#C5C7CA",
          secondary: "#7F8084",
          teriatry: "#FFF",
        },
        button:{
          primary:"#4A96FF",
        },
        border:{
          primary:"#969696",
          secondary: "#35373B"
        }
      }
    },
    initialsAvatar: {
      backgroundColor: 'black',
    },
  },
};

export const ThemeContext = createContext<Theme>(defaultTheme);
export const useTheme = (): Theme => useContext(ThemeContext);
