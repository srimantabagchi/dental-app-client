import { createMuiTheme } from "@material-ui/core";
import { mainTheme } from "bb8";

export default createMuiTheme({
  ...mainTheme,
  mixins: {
    ...mainTheme.mixins,
    test: { padding: "20px" },
  },
  overrides: {
    MuiButton: {
      // Name of the component ⚛️ / style sheet
      text: {
        // Name of the rule
        padding: "12px 30px 15px",
        color: "white", // Some CSS
      },
    },
    MuiFilledInput: {
      input: {
        background: "transparent",
        boxSizing: "border-box",
        height: "3.375rem",
        padding: "12px 10px",
        borderRadius: "0",
        borderColor: "#cdcde7",
      },
      root: {
        border: "none",
        borderRadius: "0",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      },
      error: {
        // "&$focused": {
        backgroundColor: "#f7e0ed",
        borderColor: "#f7e0ed",
        outline: "#D30E8B solid 3px",
        outlineOffset: "-3px",
        // }

        "$&hover": {
          backgroundColor: "#f7e0ed",
        },
      },
      multiline: {
        padding: "12px 10px",
        height: "100%",
      },
    },
    MuiInputBase: {
      disabled: {},
      focused: {},
      root: {
        // background: "#f1f2f2",
        height: "3.325rem",
        borderRadius: "0",
        fontSize: "16px",
        "$&disabled": {
          cursor: "not-allowed",
        },
        "$&focused": {
          outline: "#61c1ee solid 3px",
          outlineOffset: "-3px",
        },
      },
    },
    MuiSelect: {
      disabled: {},
      root: {
        background: "transparent",
        borderRadius: "0",
        fontSize: "16px",
        "$&disabled": {
          cursor: "not-allowed",
        },
      },
      select: {
        height: "100%",
        lineHeight: "100%",
        borderRadius: "0",
      },
      selectMenu: {
        lineHeight: "100%",
        height: "100%",
        borderRadius: "0",
      },
    },
    MuiTypography: {
      h5: {
        fontSize: "1.2rem",
      },
    },
  },
  palette: { ...mainTheme.palette, grey: { ...mainTheme.palette.grey } },
});
