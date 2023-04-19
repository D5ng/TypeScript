"use strict";
{
    function add(x, y) {
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
        printEmployeeInformation({
            name: "Dongs",
            privileges: ["publishing"],
        });
    }
    {
        class Car {
            drive() {
                console.log(`Driving...`);
            }
        }
        class Truck {
            drive() {
                console.log(`Driving a Truck...`);
            }
            loadCargo(amount) {
                console.log("loading Cargo " + amount);
            }
        }
        function useVehicle(vehicle) {
            vehicle.drive();
            if (vehicle instanceof Truck) {
                vehicle.loadCargo(1000);
            }
        }
        useVehicle(new Truck());
    }
}
