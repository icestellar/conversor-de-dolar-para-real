import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ConvertButtonStyled = withStyles(() => ({
    root: {
      color: "#fff",
      backgroundColor: "#00AB63",
      textTransform: "capitalize",
      padding: "16px",
      fontSize: "16px",
      '&:hover': {
        backgroundColor: "#00AB63",
      },
      '&:disabled':{
          backgroundColor: "#8C9CAD",
          color: "#fff",
          border: "1px solid #008B57"
      }
    },
  }))(Button);

  const BackButtonStyled = withStyles(() => ({
    root: {
      color: "#2E3742",
      backgroundColor: "#fff",
      textTransform: "capitalize",
      padding: "16px",
      fontSize: "16px",
      '&:hover': {
        backgroundColor: "#ececec",
      },
    },
  }))(Button);

export {ConvertButtonStyled, BackButtonStyled}