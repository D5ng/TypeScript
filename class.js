var Department = /** @class */ (function () {
    function Department(name) {
        this.employees = [];
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department ".concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var account = new Department("Accounting");
account.addEmployee("DongHyun");
account.addEmployee("SuZy");
account.printEmployeeInformation();
