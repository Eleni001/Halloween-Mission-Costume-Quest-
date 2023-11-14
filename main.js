window.addEventListener("DOMContentLoaded", main);

let currentLocation = 0;

/** This is the start of the program */
function main() {
  renderLocations();
}

/* this generates html elements from data file of locations and renders them to the screen*/
function renderLocations() {
  const main = document.querySelector("#location-container");

  /* Remove the existing location of the user */
  const existingLocationContainer = document.querySelector(".user-location");
  if (existingLocationContainer) {
    main.removeChild(existingLocationContainer);
  }
  /* get the new location of the user */
  const locationContainer = displayUserLocation(locations[currentLocation]);
  main.append(locationContainer);
}

function displayUserLocation(location) {
  // Create location container
  const locationContainer = document.createElement("div");
  locationContainer.className = "user-location";

  // Create location description
  const locationDescription = document.createElement("p");
  locationDescription.textContent = location.description;
  locationDescription.className = "location-description";

  locationContainer.append(locationDescription);

  // Create buttons for exit options
  for (const option of location.exitOptions) {
    const exitButton = document.createElement("button");
    exitButton.textContent = locations[option].name;
    exitButton.className = "exit-options";

    // Add advent listner to option buttons
    exitButton.addEventListener("click", function () {
      console.log("you chose " + option);
      currentLocation = option;
      renderLocations();
    });

    locationContainer.append(exitButton);
  }
  return locationContainer;
}
