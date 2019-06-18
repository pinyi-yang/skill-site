const express = require('express');
const app = express();
const ejsLayout = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayout);

var contact = {
	name: "Steve Peters",
	email: "steve@steve.com",
	phone: "206-555-1212",
	fax: "Who uses faxes anymore?",
	site: "http://steve.io"
};

var skills = [
	"JavaScript",
	"HTML 5",
	"CSS 3",
	"Node JS",
	"Express JS",
	"Crooning"
];

var steve = {
    contact,
    skill: skills
}

//* GET /
app.get('/', function(req, res) {
    console.log('get home page');
    res.render('index', {contact});
});

//* GET /contact
app.get('/contact', function(req, res) {
    console.log('get contact page');
    res.render('contact', {contact});
});

//* GET /skills
app.get('/skills', function(req, res) {
	console.log('get skills page');
	res.render('skills', {contact, skills});
})




app.listen(3000, function() {
    console.log('Port 3000 is connected');
})

