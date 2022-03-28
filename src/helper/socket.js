import { io } from "socket.io-client";

const URL = "https://zwallet-dinda.herokuapp.com";
const socket = io(URL);
socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;