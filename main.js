window.addEventListener("DOMContentLoaded", main);

function main() {
  renderLocations();
}

function renderLocations() {
  const main = document.querySelector("#location-container");

  for (const location of locations) {
    const locationContainer = displayUserLocation(location);

    // Add user location to the page
    main.appendChild(locationContainer);
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

  // Create exit options
  const exitOptions = document.createElement("p");
  exitOptions.textContent = location.exitOptions;
  exitOptions.className = "exit-options";

  locationContainer.append(locationDescription);
  locationContainer.append(exitOptions);

  return locationContainer;
}
