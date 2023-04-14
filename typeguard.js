function add(x, y) {
    // 타입 가드
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    return x.toString() + y.toString();
}
console.log(add(5, 5));
{
    function printEmployeeInformation(emp) {
        console.log("name" + emp.name);
        if ("privileges" in emp) {
            console.log("privileges" + emp.privileges);
        }
    }
    var employee1 = {
        name: "Dongs",
        privileges: ["publishing"],
    };
    printEmployeeInformation({
        name: "Dongs",
        privileges: ["publishing"],
    });
}
{
    var Car = /** @class */ (function () {
        function Car() {
        }
        Car.prototype.drive = function () {
            console.log("Driving...");
        };
        return Car;
    }());
    var Truck_1 = /** @class */ (function () {
        function Truck() {
        }
        Truck.prototype.drive = function () {
            console.log("Driving a Truck...");
        };
        Truck.prototype.loadCargo = function (amount) {
            console.log("loading Cargo " + amount);
        };
        return Truck;
    }());
    function useVehicle(vehicle) {
        vehicle.drive();
        if (vehicle instanceof Truck_1) {
            vehicle.loadCargo(1000);
        }
    }
    useVehicle(new Truck_1());
}
