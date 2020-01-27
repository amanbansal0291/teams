const express = require("express");
const router = express.Router();
const passport = require("passport");
const opn=require("opn");
var KiteTicker = require("kiteconnect").KiteTicker;
// @route GET api/kiteconnectjs
// @desc Get all projects for a specific user
// @access Private
/* router.get(
  "/return",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {

console.log(res);

var ticker = new KiteTicker({
	api_key: "api_key",
	access_token: "access_token"
});

ticker.connect();
ticker.on("ticks", onTicks);
ticker.on("connect", subscribe); 



  }
); */

/* router.get(
  "/login",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
   var api_key="";
   var url= "https://kite.trade/connect/login?v=3&api_key="+api_key;
   opn(url);
 }
); */

router.get('/login', function (req, res) {
   console.log("aman bansal");
   var api_key="";
   var url= "https://kite.trade/connect/login?v=3&api_key="+api_key;
   opn(url);
});

router.get('/return', function (req, res) {
  console.log(res);
});


function onTicks(ticks) {
	console.log("Ticks", ticks);
}

function subscribe() {
	var items = [738561];
	ticker.subscribe(items);
	ticker.setMode(ticker.modeFull, items);
}

module.exports = router;
