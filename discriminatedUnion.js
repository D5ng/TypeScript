function moveAnimal(animal) {
    var speed = 0;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at Speed ".concat(speed));
}
moveAnimal({ type: "bird", flyingSpeed: 50 });
