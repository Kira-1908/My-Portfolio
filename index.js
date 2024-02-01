import express from 'express';
import routes from './routes/router.js';
import connectDB from './DB/connectDB.js';
import bodyParser from 'body-parser';
import path from 'path'
const app = express();

const PORT = 8080;
const DATABASEURL = process.env.DATABASE_URL||'mongodb://127.0.0.1:27017/MyPortfolio';

//using body-parser
app.use(bodyParser.urlencoded({ extended: false }));



// databse configuration 
connectDB(DATABASEURL);



// setup for static files
app.use(express.static(path.join(process.cwd(), 'public')));


// ejs setup
app.set('view engine', 'ejs');
app.set('views', './views');


// creating routes
app.use('/', routes)



app.listen(PORT, ()=> {
    console.log("connected to server.....");
}); 