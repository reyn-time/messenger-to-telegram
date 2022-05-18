import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import "dotenv/config";

const app = express().use(bodyParser.json());

app.use(morgan("combined"));

app.listen(process.env.PORT || 1337, () => console.log("webhook is listening"));

app.post("/webhook", ({ body }, res) => {
  // Checks this is an event from a page subscription
  if (body.object === "page") {
    // Logs all message in the batch
    body.entry.forEach((entry) => {
      // entry.messaging is an array of one element only.
      const event = entry.messaging[0];
      console.log(event);
    });

    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.sendStatus(404);
  }
});

app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  // If provided token matches our verify token, respond with the provided challenge token
  if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});
