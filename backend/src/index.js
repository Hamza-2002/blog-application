import { app } from "./app.js";
import { DatabaseConnection } from "./config/db.js";
import {ErrorMiddleware} from './Middlewares/Errormiddleware.js'

const PORT = process.env.PORT
DatabaseConnection().then(() =>{
    app.listen(PORT , () =>{
        console.log(`server is running on host http://localhost:${PORT}`);
    })
})

app.use(ErrorMiddleware)