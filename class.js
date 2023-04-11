var Department = /** @class */ (function () {
    function Department(name) {
        this.employees = [];
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department ".concat(this.name));
    };
    return Department;
}());
var account = new Department("Accounting");
console.log(account);
