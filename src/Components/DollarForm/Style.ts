import styled from "styled-components";
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const FormBox = styled.div`
  padding-bottom: 2.5rem;
`;
const GreenTextField = withStyles({
  root: {
    paddingRight: '30px',
    '& label.Mui-focused': {
      color: '#008B57',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#008B57',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#D7E0EB',
      },
      '&:hover fieldset': {
        borderColor: '#008B57',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#008B57',
      },
    },
  },
})(TextField);

export {FormBox, GreenTextField}