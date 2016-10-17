var express = require('express');
var router = express.Router();

var mongoose=require('mongoose');
var Todo = mongoose.model('Todo');



/* GET home page */
router.get('/', function(req, res, next) {

  Todo.find( function(err,todos, count)
  {res.render('index',
  	{ title: 'Express And MongoDB Training App'
  	, todos: todos
	});
  });
});


router.post('/create', function(req,res)
{
new Todo({
	user_id: req.body.username,
	category: req.body.category,
  itemname: req.body.itemname,
  schedule: req.body.schedule,
	updated_on: Date.now()
}).save(function(err,todo,count){ console.log('Item Added'); res.redirect('/'); });
});


router.get('/delete/:id', function(req,res)
{
  Todo.findById(req.params.id, function(err,todo)
  {
    todo.remove(function(err,todo){res.redirect('/');
    });
  });
});

router.get('/read', function(req,res)
{
	Todo.find( function(err,todos,count)
	{
	 res.render('index', {


	   });
  });
});

router.get('/CleanCollection', function(req,res)
{
  Todo.remove({}, function(err) {
  console.log('collection removed')
  });
});

module.exports=router;
