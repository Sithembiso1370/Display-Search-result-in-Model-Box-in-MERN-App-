const EmployeeModel = require('../models/employee.model.js');
 
// get all employee list
exports.getEmployeeList = (req, res)=> {
    //console.log('here all employees list');
    EmployeeModel.getAllEmployees((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Employees', employees);
        res.send(employees)
    })
}
 
// get employee by Name for earch by Name 
exports.getEmployeeByName = (req, res)=>{
    //console.log('get emp by id');
    EmployeeModel.getEmployeeByName(req.params.first_name, (err, employee)=>{
        if(err)
        res.send(err);
        console.log('single employee data',employee);
        res.send(employee);
    })
}