import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';

class Server {
    app;
    constructor(private config) {
        this.app = express();

    }

   bootstrap() {
        this.initBodyParse();
        this.setupRoutes();
        return this;
    }

    setupRoutes() {
        this.app.use('/health-check', (req, res) => {
            res.send('I am Ok');
        });

        this.app.use(notFoundRoute);

        this.app.use(errorHandler);
   }

    initBodyParse() {
        this.app.use(bodyParser.json({type: 'application/*+json'}));
    }

    run () {
        const { app , config : {PORT }} = this;
        app.listen(PORT, (err) => {
            if (err) {
            console.log(err);
            }
            console.log(`App is running ${PORT}`);
        });

    }


}

export default Server;