window.addEventListener("DOMContentLoaded", main);

function main() {
  renderLocations();
}

/* this generates html elements from data file of locations and renders them to the screen*/

function renderLocations() {
  const main = document.querySelector("#location-container");

  for (const location of locations) {
    const locationContainer = displayUserLocation(location);

    // Add user location to the page
    main.append(locationContainer);
  }
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
    exitButton.textContent = option;
    exitButton.className = "exit-options";

  // Add advent listner to option buttons
    exitButton.addEventListener("click", function() {
      console.log("you chose " + option);
    });

    locationContainer.append(exitButton);
    }


  return locationContainer;
}
