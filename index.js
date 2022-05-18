"use strict";

import express from "express";
import { json } from "body-parser";

const app = express().use(json());

app.listen(process.env.PORT || 1337, () => console.log("webhook is listening"));
