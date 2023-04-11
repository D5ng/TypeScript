var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // name: string;
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department: (".concat(this.id, ") ").concat(this.name));
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
var account = new Department("d1", "Accounting");
account.describe();
account.addEmployee("DongHyun");
account.addEmployee("SuZy");
account.printEmployeeInformation();
