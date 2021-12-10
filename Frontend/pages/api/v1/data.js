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
    apiKey: "AIzaSyAvzvcWmAKK7rV8JYaqq74QfJM_qYuq8p8",
    authDomain: "coffee-6e4d3.firebaseapp.com",
    databaseURL:
      "https://coffee-6e4d3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "coffee-6e4d3",
    storageBucket: "coffee-6e4d3.appspot.com",
    messagingSenderId: "395615411484",
    appId: "1:395615411484:web:e2cbe1d5ce0e0a851faed9",
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
