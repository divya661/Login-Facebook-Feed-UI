import  { createContext, useContext } from 'react';

export interface Theme {
  components: {
    initialsAvatar: {
      backgroundColor: string;
    };
    compose: {
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
          }
        }
      };
    };
  };
}

const defaultTheme: Theme = {
  components: {
    compose: {
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
          }
        }
      },
    },
    initialsAvatar: {
      backgroundColor: 'black',
    },
  },
};

export const ThemeContext = createContext<Theme>(defaultTheme);

// Create a hook to use the theme
export const useTheme = (): Theme => useContext(ThemeContext);
