export const lightTheme = {
  name: "light",
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
  card: {
    styles: {
      base: {
        bg: "bg-[#141414]",
      },
    },
  },
};
export const darkTheme = {
  name: "dark",
  button: {
    defaultProps: {
      variant: "filled",
      color: "white",
    },
    styles: {
      base: {
        initial: {
          hover: "hover:bg-gray-900",
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
  typography: {
    defaultProps: {
      color: "white",
    },
  },

  card: {
    defaultProps: {
      styles: {
        base: {
          initial: {
            flex: "!bg-red-400",
          },
        },
      },
    },
  },
};
