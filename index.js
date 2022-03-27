const express = require("express");
const app = express();

app.use(express.json());

let arr = [{id:2, name: "ehhe"}, {id:3, name: "keje"}];

app.get('/', (req,res) => {
    res.json(arr);
})

app.listen("3001", () => {
  console.log("Server running on port 3001");
});
