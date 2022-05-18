import express from "express";
import bodyParser from "body-parser";

const app = express().use(bodyParser.json());

app.listen(process.env.PORT || 1337, () => console.log("webhook is listening"));

app.post("/webhook", ({ body }, res) => {
  // Checks this is an event from a page subscription
  if (body.object === "page") {
    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach((entry) => {
      // Retrieves
      const event = entry.messaging[0];
      console.log(event);
    });

    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.sendStatus(404);
  }
});
