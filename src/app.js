/*
import {
  createTableSponsor,
  insertSponsor,
  getSponsors,
  getSponsor,
  deleteSponsor,
  updateSponsor,
} from "./Model/Sponsor.js";

import {
  createTableExpert,
  insertExpert,
  getExperts,
  getExpert,
  deleteExpert,
  updateExpert,
} from "./Model/Expert.js";
*/
import express from "express";

const app = express();
app.use(express.json());

import routerSponsors from "./routesSponsor.js";
import routerExperts from "./routesExpert.js";
app.use(routerSponsors);
app.use(routerExperts);
/*
createTableSponsor();
app.get("/sponsors", async function (req, res) {
  let sponsors = await getSponsors();
  res.json(sponsors);
});

app.get("/sponsor/:id", async function (req, res) {
  let sponsors = await getSponsor(req.params.id);
  res.json(sponsors);
});

app.delete("/sponsor/:id", async function (req, res) {
  let sponsors = await deleteSponsor(req.params.id);
  res.json(sponsors);
});

app.post("/sponsor", function (req, res) {
  insertSponsor(req.body);
  res.json({
    statusCode: 200,
  });
});

app.put("/sponsor/:id", function (req, res) {
  updateSponsor(req.body, req.params.id);
  res.json({
    statusCode: 200,
  });
});
*/
app.listen(3000, () => console.log("API rodando"));
