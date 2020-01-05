import React from "react";
import styled from "styled-components";
import {
  FormControl,
  makeStyles,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    "& > div": {
      margin: theme.spacing(1),
      color: "#fff"
    },
    "& p": {
      color: "#fff"
    }
  }
}));
const UploadBox = styled.div``;
const Form = styled.form``;
const Group = styled.div``;
export default () => {
  const classes = useStyles();
  return (
    <UploadBox>
      <FormControl className={classes.root}>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <Form>
        <Group>
          <input />
        </Group>
      </Form>
    </UploadBox>
  );
};
