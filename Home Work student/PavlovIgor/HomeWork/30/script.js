let newResult = document.querySelector ('.result');
let newResultFinish = document.querySelector ('.result_finish');
let newResultFinishArr = document.querySelector ('.result_finish_arr');


let userJob = {
    name: "Stive",
    lastname: "Voznyak",
    age: "34",
    salary: {
        wages: "18500",
        working_day: "28",
        vacation: {
            amount: "11200",
            day: "12"
            }
        }
    };

    Object.entries(userJob).forEach(([key, value]) => newResult.innerHTML += (`${key}: ${value}  <br>`));
    Object.entries(userJob.salary).forEach(([key, value]) => newResult.innerHTML += (`${key}: ${value}  <br>`));
    Object.entries(userJob.salary.vacation).forEach(([key, value]) => newResult.innerHTML += (`${key}: ${value} <br>`));

    let lustUserJob = {};

    for (let key in userJob) {
        lustUserJob[key] = userJob[key];
}

    lustUserJob.name = "Robert";
    lustUserJob.lastname = "Robsen";
    lustUserJob.age = "27";
    lustUserJob.salary.wages = "13200";
    lustUserJob.salary.working_day = "17";
    lustUserJob.salary.vacation.amount = "6500";
    lustUserJob.salary.vacation.day = "26";

    Object.entries(lustUserJob).forEach(([key, value]) => newResultFinish.innerHTML += (`${key}: ${value}  <br>`));
    Object.entries(lustUserJob.salary).forEach(([key, value]) => newResultFinish.innerHTML += (`${key}: ${value}  <br>`));
    Object.entries(lustUserJob.salary.vacation).forEach(([key, value]) => newResultFinish.innerHTML += (`${key}: ${value} <br>`));

    let ourJobs = [
        {
            name: "Nic",
            lastname: "Franklin",
            age: "44",
            salary: {
                wages: "4500",
                working_day: "17",
                vacation: {
                    amount: "5200",
                    day: "16"
                    }
                }
            },
            {
                name: "Sabstian",
                lastname: "Ingrosso",
                age: "44",
                salary: {
                    wages: "35500",
                    working_day: "30",
                    vacation: {
                        amount: "99200",
                        day: "30"
                        }
                    }
                },
                {
                    name: "Greg",
                    lastname: "Andreev",
                    age: "17",
                    salary: {
                        wages: "7500",
                        working_day: "20",
                        vacation: {
                            amount: "0",
                            day: "0"
                            }
                        }
                    },
                    {
                        name: "Tania",
                        lastname: "Voznyak",
                        age: "32",
                        salary: {
                            wages: "16500",
                            working_day: "26",
                            vacation: {
                                amount: "7200",
                                day: "20"
                                }
                            }
                        },
                        {
                            name: "Mufmud",
                            lastname: "Karagyan",
                            age: "22",
                            salary: {
                                wages: "20000",
                                working_day: "29",
                                vacation: {
                                    amount: "6500",
                                    day: "17"
                                    }
                                }
                            }
        ];

        for (let i of ourJobs) {
        newResultFinishArr.innerHTML += (i.name + " " + i.lastname + " " + "Отпускные" +  " " + i.salary.vacation.amount + "за" + " " + i.salary.vacation.day + "дней" + '<br>' + '<br>');
        };

