const colors = ["black", "green", "white","brown","blue"];
        for (let color of colors) {
            console.log(color);
        }

        const names =["Grigoriy", "Anatoliy", "Yaroslav", "Vasiliy", "Ivan", "Semen", "Artur"];
        for (let i in names) {
            console.log ("индекс = " + i , "значение = " + names[i]);
        }

        const cars = ["Tesla", "Range Rover", "Ford", "Lexus", "Audi"];
        for (let i = 0; i < cars.length; i++) {
            console.log(cars[i]);
        }
        console.log("Длина массива = " + cars.length + " значений");