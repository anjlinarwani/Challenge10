var mongoose=require('mongoose');

var Schema   = mongoose.Schema;

 var Todo = new Schema(
    {
     user_id: String,
     category: String,
     schedule: String,
     itemname: String,
     updated_at : {type: Date, default: Date.now()}
     });

     mongoose.model( 'Todo', Todo );


     mongoose.connect( 'mongodb://localhost/todoDB' );
