const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Employee = new Schema({
  firstName:  { 
	type: String,
	index: true
  },
  lastName:  { 
	type: String,
	index: true
  },
  aadharNumber:  { 
	type: String,
	index: true,
	required: true
  },
  phoneNumber:  { 
	type: Number,
	index: true
  }
});


module.exports = mongoose.model('Employee', Employee);