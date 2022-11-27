//Write your solution in this file!
const employee = {Jane : "90 carli",John : "39 Austin",};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
      };
}
const newEmployees = updateEmployeeWithKeyAndValue(employee, "Jane","100 Austin");

employees.Jane;
//newEmployees.Jane;

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){ 
    employee[key] = value; 
    return employee;
};
newerEmployees=destructivelyUpdateEmployeeWithKeyAndValue(
    employees,
    "John",
    "40 illinois",);

employee.John;    
newerEmployees.John;



function deleteFromEmployeeByKey(employee, key){
    const deleteEmployee = {...employee};
    delete deleteEmployee[key];      // delete property with that key
    return deleteEmployee;     // returns a new object
}


function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
const updatedEmployees =deleteFromEmployeeByKey(
    employee,
    "John");
updatedEmployees;


