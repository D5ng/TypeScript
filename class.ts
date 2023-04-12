abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(): void {
    console.log(`IT Department - ID ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report");
  }

  set mostRecendReport(value: string) {
    this.lastReport = value;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Dongs") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
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

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Someting went wrong!");
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee("D5ng");
accounting.addEmployee("ina");
accounting.printEmployeeInformation();
