import axios from "axios";

const basePath = `https://${process.env.ASTRA_DB_ID}-${process.env.ASTRA_DB_REGION}.apps.astra.datastax.com/api/rest/v2/namespaces/${process.env.ASTRA_DB_KEYSPACE}/collections`;

const post = async (collection, data) => {
  try {
    const response = await axios.post(`${basePath}/${collection}`, {
      headers: {
        "x-cassandra-token": process.env.ASTRA_DB_APPLICATION_TOKEN,
        "content-type": "application/json",
      },
      data: JSON.stringify(data),
    });

    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

export { post };
