import * as http from "http";
import { app } from "./app";

const server = http.createServer(app);

const port = Number(process.env.PORT) || 3333;

server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});


