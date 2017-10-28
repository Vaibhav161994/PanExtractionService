const googleVisionController = require("./controllers/googleVision");
const getPanDataController = require("./controllers/getPanData");

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('./public/index.html');
  })

  app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/public/template/login.html');
  })
  
  /**
   * Gets an binary image data as request, returns the extracted information.
   */
  app.post("/api/pan", googleVisionController.processImage);

  app.get("/api/pan", getPanDataController.getPanData)
};
