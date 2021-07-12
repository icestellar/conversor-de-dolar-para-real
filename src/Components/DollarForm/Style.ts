import styled from "styled-components";
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const FormBox = styled.div`
  padding-bottom: 1rem;
`;

const TextFieldBox = styled.div`
  flex-flow: column;
`;

const Label = styled.h1`
  font-size: 18px; 
  margin-block: 0;
  margin-inline:0;
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
        boxShadow: "0px 8px 4px rgba(13, 17, 27, 0.08)"
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

export {FormBox, TextFieldBox, Label, GreenTextField}