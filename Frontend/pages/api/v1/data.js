import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";
// const firebase = require("firebase");

// function writeData(distance) {
//   const db = getDatabase();
//   set(ref(db, "data"), {
//     distance: 123,
//   });
// }

const handler = async (req, res) => {
  const firebaseConfig = {
    apiKey: "AIzaSyAlrwGdgV2vUix-k8eErZq-ZSLHK-ELs3k",
    authDomain: "cathome-77c06.firebaseapp.com",
    databaseURL: "https://cathome-77c06.firebaseio.com",
    projectId: "cathome-77c06",
    storageBucket: "cathome-77c06.appspot.com",
    messagingSenderId: "907221851080",
    appId: "1:907221851080:web:9b4451743c988d768ffefd",
    measurementId: "${config.measurementId}",
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  const dbRef = ref(getDatabase());

  if (req.method === "POST") {
    const { distance } = req.body;

    const now = Date.now();

    set(ref(db, "data/" + now), {
      distance,
    });

    res.status(201).send();

    return;
  }

  get(child(dbRef, `data`))
    .then((snapshot) => {
      const data = snapshot.val();

      res.json(data);

      // if (snapshot.exists()) {
      //   console.log(snapshot.val());
      // } else {
      //   console.log("No data available");
      // }
    })
    .catch((error) => {
      // res.status
      console.error(error);
    });
};

export default handler;
