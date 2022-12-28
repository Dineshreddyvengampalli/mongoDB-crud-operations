const Employee = require('../model/employee');

var getAllUserDetails = function (req, res) {
	return Employee.find(function (err, employees) {
		if (!err) {
			return res.send(employees);
		} else {
			res.statusCode = 500;
			return res.send({
				error : 'Server error'
			});
		}
	});
}

let getOneUserDetails = function (req, res) {
	return Employee.findById(req.params.employeeID, function (err, employee) {
		if (!err && employee) {
			return res.json({
				statusCode : 200,
				employee : employee
			});
		} else {
			return res.status(404).json({
				message : 'details not found'
			})
		}
	});
}

let createUserDetails = function (req, res) {
	let employee = new Employee({
			firstName : req.body.firstName,
			lastName : req.body.lastName,
			aadharNumber : req.body.aadharNumber,
			phoneNumber : req.body.phoneNumber,
		});
	return employee.save(function (err) {
		if (!err) {
			return res.json({
				stausCode : 200,
				employee : employee
			});
		} else {
			return res.json({
				statusCode : 500,
				error : 'API Server error'
			});
		}
	});
}

let updateUserDetails = function (req, res) {
	return Employee.findById(req.params.employeeID, function (err, employee) {
		if (!employee) {
			return res.json({
				statusCode : 404,
				error : 'Not found'
			});
		}

		if (req.body.firstName != null)
			employee.firstName = req.body.firstName;
		if (req.body.lastName != null)
			employee.lastName = req.body.lastName;
		if (req.body.aadharNumber != null)
			employee.aadharNumber = req.body.aadharNumber;
		if (req.body.phoneNumber != null)
			employee.phoneNumber = req.body.phoneNumber;

		return employee.save(function (err) {
			if (!err) {
				return res.json({
					statusCode : 200,
					employee : employee
				});
			} else {
					return res.json({
						statusCode : 500,
						error : 'Server error'
					});
			}
		});
	});
}

let removeUserDetails = function (req, res) {
	return Employee.findById(req.params.employeeID, function (err, employee) {
		if (!employee) {
			return res.send({
				statusCode : 404,
				error : 'Not found'
			});
		}

		return employee.remove(function (err,employee) {
			if (!err) {
				return res.json({
					employee : employee
				});
			} else {
				return res.json({
					statusCode : 500,
					error : 'Server error'
				});
			}
		})
	});
}

exports.getAllUserDetails = getAllUserDetails
	exports.getOneUserDetails = getOneUserDetails
	exports.createUserDetails = createUserDetails
	exports.updateUserDetails = updateUserDetails
	exports.removeUserDetails = removeUserDetails
