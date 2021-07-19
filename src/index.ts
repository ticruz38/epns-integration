import express from "express";
import { sdk } from "./sdk";

async function startServer() {
  // Check environment setup first
  // Continue load
  const config = (await require("./config")).default;

  // load app
  const app = express();

  app.get("/notify", async (req, res, next) => {
    const title = "Notification alert";
    const message = "Notification alert to test the protocol out";
    const payloadTitle = "Notification alert!";
    const payloadMsg = `Notification alert to test the protocol out`;
    const notificationType = 3;
    const users = await sdk.getSubscribedUsers();
    users.map((u) => {
      sdk.sendNotification(
        u,
        title,
        message,
        payloadTitle,
        payloadMsg,
        notificationType,
        false
      );
    });
  });

  app.listen(config.port, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
      return;
    }
    console.info(`Server listening on port: ${config.port}`);
  });
}

startServer();
