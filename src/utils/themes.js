export const lightTheme = {
  button: {
    defaultProps: {
      color: "black",
    },
    styles: {
      base: {
        initial: {
          hover: "hover:bg-gray-800",
        },
      },
    },
  },
  iconButton: {
    defaultProps: {},
    styles: {
      base: {
        background: "bg-white",
        hover: "hover:bg-gray-800",
      },
    },
  },
  navbar: {
    defaultProps: {
      variant: "filled",
      color: "transparent",
    },
  },
  typography: {
    defaultProps: {
      color: "black",
    },
    styles: {
      base: {
        initial: {
          hover: "hover:bg-gray-100",
        },
      },
    },
  },
};
export const darkTheme = {
  button: {
    defaultProps: {
      variant: "filled",
      color: "white",
    },
    styles: {
      base: {
        initial: {
          hover: "hover:bg-gray-400",
        },
      },
    },
  },
  iconButton: {
    defaultProps: {},
    styles: {
      base: {
        hover: "hover:bg-gray-800",
      },
    },
  },
  navbar: {
    defaultProps: {
      variant: "filled",
      color: "transparent",
      className: "bg-black",
    },
  },
  typography: {
    defaultProps: {
      color: "white",
    },
  },
};
