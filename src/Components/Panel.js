/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-concat */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import SwapVerticalCircleIcon from "@material-ui/icons/SwapVerticalCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import LoveCalc from "./LoveCalc";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: 10,
  marginTop: 40,
  marginLeft: 20,
  width: 150
});

const useStyles = makeStyles(theme => ({
  paperroot: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginLeft: 20
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10,
    marginTop: 40,
    marginLeft: 20
  },
  iconXcngButton: {
    padding: 10,
    marginTop: 10,
    position: "center"
  },
  divider: {
    height: 28,
    margin: 4
  },
  root: {
    marginTop: "20px",
    maxWidth: 500,
    height: "50vh"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red
  }
}));

function Panel() {
  const [inputFirstName, setFirstName] = useState("");
  const [inputSecondName, setSecondName] = useState("");
  const [swapBtnState, SetSwapBtnState] = useState(true);
  const [lovePer, setLovePer] = useState("Please Enter the name");

  const classes = useStyles();

  const onSendClick = () => {
    if (isBlank(inputFirstName) || isBlank(inputSecondName)) {
      setLovePer("Please Enter the name");
    } else {
      SetSwapBtnState(false);
      setLovePer(LoveCalc(inputFirstName, inputSecondName));
    }
  };

  const isBlank = str => {
    return !str || /^\s*$/.test(str);
  };

  const onExchangeName = () => {
    let tempName = inputFirstName;
    setFirstName(inputSecondName);
    setSecondName(tempName);
  };

  return (
    <>
      <Paper className={classes.paperroot}>
        <InputBase
          className={classes.input}
          placeholder="Enter Name Here........"
          multiline={true}
          rowsMax={6}
          inputProps={{ "aria-label": "Enter Name Here........" }}
          onChange={event => {
            setFirstName(event.target.value);
          }}
          value={inputFirstName}
        />
      </Paper>
      <Paper className={classes.paperroot} style={{ marginTop: 20 }}>
        <InputBase
          className={classes.input}
          placeholder="Enter Name Here........"
          multiline={true}
          rowsMax={1}
          inputProps={{ "aria-label": "Enter Name Here........" }}
          onChange={event => {
            setSecondName(event.target.value);
          }}
          value={inputSecondName}
        />
      </Paper>
      <MyButton endIcon={<FavoriteIcon />} onClick={onSendClick}>
        Love
      </MyButton>
      <MyButton
        style={{ width: 20 }}
        onClick={onExchangeName}
        endIcon={<SwapVerticalCircleIcon style={{ fontSize: 30 }} />}
        disabled={swapBtnState}
      ></MyButton>
      <CardContent>{lovePer}</CardContent>
    </>
  );
}

export default Panel;
