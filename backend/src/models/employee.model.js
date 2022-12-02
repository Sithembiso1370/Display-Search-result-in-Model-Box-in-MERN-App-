var dbConn  = require('../../config/db.config');
 
var Employee = function(employee){
    this.first_name     =   employee.fname;
    this.last_name      =   employee.lname;
    this.email          =   employee.email;
    this.phone          =   employee.phone;
    this.salary         =   employee.salary;
    this.emp_image         =    employee.image;
}
 
// get all employees
Employee.getAllEmployees = (result) =>{
    dbConn.query('SELECT * FROM employees', (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('Employees fetched successfully');
            result(null,res);
        }
    })
}
 
// get employee by Name for Search Data by name 
Employee.getEmployeeByName = (first_name, result)=>{
    dbConn.query('SELECT * FROM employees WHERE first_name LIKE ?', first_name+'%', (err, res)=>{
        if(err){
            console.log('Error while fetching employee by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}
module.exports = Employee;