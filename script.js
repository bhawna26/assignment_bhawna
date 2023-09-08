document.addEventListener("DOMContentLoaded", function () {
    const numberElement = document.getElementById("number");
    const nameLabel = document.getElementById("name-label");
    const nameElement = document.getElementById("name");
    const locationLabel = document.getElementById("location-label");
    const locationElement = document.getElementById("location");
    const nextButton = document.getElementById("next-button");

    let currentIndex = 0;
    let data = [];

    // Function to fetch data from data.json using fetch
    function fetchData(callback) {
        fetch('json/data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network Error");
                }
                return response.json();
            })
            .then((jsonData) => {
                data = jsonData;
                callback();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // Display person information
    function displayPerson() {
        if (currentIndex < data.length) {
            const person = data[currentIndex];
            numberElement.textContent = `${currentIndex + 1}`; // Adding the numbering
            nameLabel.textContent = "Name:";
            nameElement.textContent = person.name;
            locationLabel.textContent = "Location:";
            locationElement.textContent = person.location;
        } else {
            alert("No more people!");
            currentIndex = 0;
        }
    }

    // Event listener for the "Next Person" button
    nextButton.addEventListener("click", function () {
        currentIndex++;
        displayPerson();
    });

    // Initialize by fetching data and displaying the first person
    fetchData(displayPerson);
});
