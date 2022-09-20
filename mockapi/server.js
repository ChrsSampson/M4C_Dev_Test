const jsonServer = require('json-server');
const path = require('path');
const multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(path.join(__dirname, 'public/uploads'));
    cb(null, path.join(__dirname, 'public/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
})


var upload = multer({
  storage,
  limits: { fieldSize: 25 * 1024 * 1024 }
})

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(upload.any());
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
