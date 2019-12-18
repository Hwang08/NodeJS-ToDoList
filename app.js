const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js'); //local module bound to module.exports = getDate; where getDate is a function

const app = express(); //Initialize express

const items = ['Buy Food', 'Cook Food', 'Eat Food'];
const workItems = ['Organize', 'Meeting'];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true })); //When you are trying to grab info that gets posted from the html form you will use urlencoded
app.use(express.static('public'));

// Create endpoints/route handlers
app.get('/', (req, res) => {

  const day = date.getDate(); // getDate function in date.js

  // ejs template
  res.render('list', { listTitle: day, newListItems: items }); // Sends the list.ejs file to the browser so it can render it
});

app.post('/', (req, res) => {

  const item = req.body.newItem; //newItem is the name of the input name="newItem"

  if (req.body.list === 'Work List') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }

  items.push(item);
  res.redirect('/');
});

app.get('/work', (req, res) => {
  res.render('list', { listTitle: 'Work List', newListItems: workItems }); //res.render('list.ejs page', {title: 'Value '}
});

app.post('/work', (req, res) => {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect('/work');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(3000, () => {
  console.log('Server started on port 3000')
});