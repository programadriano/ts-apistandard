import * as express from "express";
import * as bodyParser from "body-parser";

class App {
  public app: express.Application;
  private bodyParser;
 

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();  
  }

  middleware() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  

  routes() {    

    this.app.route("/").get((req, res) => {
     res.send({ result: 'v1' });
    });
  }
}

export default new App();
