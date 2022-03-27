const express = require("express");
const app = express();

app.use(express.json());

let arr = [{id:2, name: "ehhe"}, {id:3, name: "keje"}];
const PORT = process.env.PORT || 3001;

app.get('/', (req,res) => {
    res.json(arr);
})

app.listen(PORT, () => {
  console.log("Server running on port 3001");
});
