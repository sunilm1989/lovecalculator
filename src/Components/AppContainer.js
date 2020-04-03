/* eslint-disable no-useless-concat */
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import React, { useEffect } from "react";
import io from "socket.io-client";
import Panel from "./Panel";

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

const socket = io("http://localhost:8080");

function AppContainer(props) {
  const classes = useStyles();
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
  }, []);

  return (
    <Container
      fixed
      style={{
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        height: "50vh",
        width: 500
      }}
    >
      <Card className={classes.root}>
        <CardHeader
          title={props.header}
          avatar={
            <Avatar
              aria-label="recipe"
              style={{
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
              }}
            >
              <FavoriteIcon />
            </Avatar>
          }
        />
        <Panel></Panel>
      </Card>
    </Container>
  );
}
export default AppContainer;
