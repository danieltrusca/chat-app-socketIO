const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  //   res.send("<h1>Hello world</h1>");
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("a user has just disconnected");
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
