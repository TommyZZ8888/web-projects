var express = require("express");
var app = express();
app.use(express.static("我的目录")).listen(3000);
