import * as dotenv from "dotenv";
import app from "./server";

dotenv.config();

app.listen(3001, () => {
  console.log("Server up on 3001");
});
