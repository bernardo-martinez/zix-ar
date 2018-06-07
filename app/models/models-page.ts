var frameModule = require("ui/frame");
var Geometries = require("./geometries");
import { Page } from "ui/page";

var geometries = new Geometries();

function pageLoaded(args) {
  var page:Page = args.object;
  page.bindingContext = geometries;
}

exports.pageLoaded = pageLoaded;