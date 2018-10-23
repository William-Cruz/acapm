const getPrompt = () => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let jsonObject = {
        Name: '',
        Vehicle: '',
        Car: '',
        Speed: '',
        Driver: '',
    }
    let fs = require('fs');
    fs.writeFile("mynewfile.txt", "Important Info", (err) => {
        if (err) throw err;
        console.log("");
    });
    rl.question('What is your name? ', (name) => {
        rl.question('What do you drive? ', (vehicle) => {
            rl.question('What is your favorite car? ', (car) => {
                rl.question('What is the fastest you have ever driven? ', (speed) => {
                    rl.question('Are you a good driver? ', (driver) => {
                        jsonObject.Name = name
                        jsonObject.Vehicle = vehicle
                        jsonObject.Car = car
                        jsonObject.Speed = speed
                        jsonObject.Driver = driver
                        console.log(jsonObject)
                        rl.close();
                    });
                });
            });
        });
    });

}

getPrompt();  