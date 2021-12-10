import dotenv from "dotenv";
import { initializeApp } from "firebase/app";

dotenv.config();

const handler = async (req, res) => {
  const { createClient } = require("@astrajs/rest");

  // create an Astra DB client
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const basePath = "/api/rest/v2/namespaces/data/collections/hello_docs";

  if (req.method === "POST") {
    // if (
    //   !("x-api-key" in req.headers) ||
    //   req.headers["x-api-key"] !== process.env.API_KEY
    // ) {
    //   res.status(401).send();
    //   return;
    // }

    const { distance } = req.body;

    astraClient
      .post(basePath, {
        timestamp: Date.now(),
        distance,
      })
      .then((data) => console.log(data));

    res.status(201).send();

    return;
  }

  astraClient
    .get(basePath)
    .then(({ data }) => res.json({ status: "success", data }));
};

export default handler;
