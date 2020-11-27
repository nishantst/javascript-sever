import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';
import routes from './router';
import Database from './libs/Database';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDoc from './swagger.json';

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

        this.app.use('/api', routes);

        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

        this.app.use(notFoundRoute);

        this.app.use(errorHandler);
    }

    initBodyParse() {
        this.app.use(bodyParser.json());
    }

    run() {
        const { app, config: { PORT, MONGO_URL } } = this;
        Database.open(MONGO_URL)
            .then((res) => {
                console.log('successfully connected to mongo');
                app.listen(PORT, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log(`App is running ${PORT}`);
                });
            })
            .catch((err) => {
                if (err) {
                    console.log(err);
                }
            });
    }
}

export default Server;
