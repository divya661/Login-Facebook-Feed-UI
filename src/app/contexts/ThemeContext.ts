// ThemeContext.ts

import { createContext } from 'react';

export interface Theme {
  components: {
    initialsAvatar: {
      backgroundColor: string;
    };
    compose: {
      page: {
        backgroundColor: string;
      };
    };
  };
}

const defaultTheme: Theme = {
  components: {
    initialsAvatar: {
      backgroundColor: 'lightblue',
    },
    compose: {
      page: {
        backgroundColor: '#131319',
      }
    },
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export default ThemeContext;
