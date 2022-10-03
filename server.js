//npm run devStart
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const authorRouter = require('./routes/authors');
const bookRouter = require('./routes/books');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))


const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/mybrary', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})
const db = mongoose.connection;
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to Mongoose'))

app.use('/', indexRouter);
app.use('/authors', authorRouter);
app.use('/books', bookRouter);


app.listen(process.env.PORT || 3000)

//Cg5dxM4XInOmM05j

// new
//jeawzQDojqY2bjTc


// UBA card expired with money in it.
// I am a student in Morocco, my card expired with money in it.
// The card wasn't working at the ATM Machine so I couldn't transfer all the money to my friends, unfortunately.
// Firstname: PETER
// Last Name: CHISANGA MWAMBA
// Loan No: 18301616
// NRC: 296905/13/1
// Client Identification: 0010608912