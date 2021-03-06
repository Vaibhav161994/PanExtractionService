const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const fileUpload = require("express-fileupload");
const initFirebase = require("./services/firebaseAdmin");
const morgan = require("morgan");
const auth = require("./lib/auth");

app.use(morgan('tiny'));
//app.use(auth);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(fileUpload());

router(app);

app.listen(3000, function () {
  console.log("Listening on port 3000!")
})
