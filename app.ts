import * as express from "express";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.routes();
    }

    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ 'result': 'version 0.0.2' })
        });
    }
}

export default new App();