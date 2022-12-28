require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://dinesh:${process.env.mongo_db_password}@cluster0.6swpel0.mongodb.net/?retryWrites=true&w=majority`, function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

