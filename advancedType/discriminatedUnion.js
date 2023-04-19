"use strict";
function moveAnimal(animal) {
    let speed = 0;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log(`Moving at Speed ${speed}`);
}
moveAnimal({ type: "bird", flyingSpeed: 50 });
