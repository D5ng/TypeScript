"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department - ID ${this.id}`);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No Report");
    }
    set mostRecendReport(value) {
        this.lastReport = value;
    }
    describe() {
        console.log("Accounting Department - ID: " + this.id);
    }
    addEmployee(name) {
        if (name === "Dongs") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
console.log(Department.fiscalYear);
const it = new ITDepartment("d1", ["Dongs"]);
it.describe();
it.addEmployee("DongHyun");
it.addEmployee("SuZy");
it.printEmployeeInformation();
const accounting = AccountingDepartment.getInstance();
accounting.addReport("Someting went wrong!");
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee("D5ng");
accounting.addEmployee("ina");
accounting.printEmployeeInformation();
