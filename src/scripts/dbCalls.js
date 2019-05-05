const apiBaseURL = "http://localhost:8088";

const getAllChickens = () => {
  return fetch(`${apiBaseURL}/chicken`)
    .then(response => response.json());
};

//chicken id is the id in the database based through when we call the function
const getOneChicken = (chickenId) => {
    fetch(`${apiBaseURL}/chicken/${chickenId}`)
        .then(response => response.json())
        .then(parsedResult => {
        console.log("one chicken", parsedResult);
        });
};

const updateChicken = (chickenId, chickenObj) => {
    fetch (`${apiBaseURL}/chicken/${chickenId}`,
        {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(chickenObj)
        })
     .then(response => response.json())
     .then(parsedResult => {
        console.log("updated chicken", parsedResult);
        })
}

const makeChicken = (chickenObj) => {
    fetch(`${apiBaseURL}/chicken/`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chickenObj)
        })
    .then(response => response.json())
    .then(parsedResult => {
        console.log("new chicken", parsedResult);
        });
}

const deleteChicken = (chickenId) => {
  fetch(`${apiBaseURL}/chicken/${chickenId}`,
    {
        method: "DELETE"
    })
};



getAllChickens();
// getOneChicken(4);

const testChickenObj = {
    name: "Joe Thighsmen",
    color: "red",
    gender: "male",
    spicelevel: "3"
};

const newChickenObj = {
  name: "Cluck Norris",
  color: "black",
  gender: "male",
  spicelevel: "5"
};

// updateChicken(1, testChickenObj);
// makeChicken(newChickenObj);
// deleteChicken(4);