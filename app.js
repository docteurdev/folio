const express = require('express');
const cors = require('cors');
const sequelize = require('./src/db/sequelize');
 const fileUpdoad = require('express-fileupload');

const port = process.env.PORT || 3002;
const app = express();

app.use(fileUpdoad());
app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors()); 

sequelize.initDb();

// app.get('/', (req, res) =>{
//     res.sendFile(__dirname + '/index.html')
// })

app.post('/', (req, res) =>{
  res.json('hello heroku')
})

require('./src/routes/experience/createExperience')(app);
require('./src/routes/experience/updateExperience')(app);
require('./src/routes/experience/deleteExperience')(app);
require('./src/routes/experience/getAllExperience')(app);
require('./src/routes/experience/getExperience')(app);

require('./src/routes/projet/createProjet')(app);
require('./src/routes/projet/update')(app);
require('./src/routes/projet/findAllProjet')(app);
require('./src/routes/projet/delete')(app);

require('./src/routes/techno/create')(app);
require('./src/routes/techno/delete')(app);
require('./src/routes/techno/getall')(app);

require('./src/routes/user/login')(app);




app.get('/', (req, res) => res.send("l'app est pret") )
app.listen(port, () => console.log(`folio-backend is running on http://localhost:${port}`) );

