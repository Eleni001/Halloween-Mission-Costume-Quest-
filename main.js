window.addEventListener("DOMContentLoaded", main);

let currentLocation = 0;

/** This is the start of the program */
function main() {
  renderLocations();
  renderOutfits();
}

/* this generates html elements from data file of locations and renders them to the screen*/
function renderLocations() {
  const locationContainer = document.querySelector("#location-container");

  /* Remove the existing location of the user */
  const existingUserLocation = document.querySelector(".user-location");
  if (existingUserLocation) {
    locationContainer.removeChild(existingUserLocation);
  }
  /* get the new location of the user */
  const newUserLocation = displayUserLocation(locations[currentLocation]);
  locationContainer.append(newUserLocation);
}

/* this generates html elements from data file of locations and renders them to the screen*/
function renderOutfits() {
  const outfitContainer = document.querySelector("#outfit-container");

  /* Remove the existing outfits of the user */
  const existingOutfits = document.querySelector(".user-outfits");
  if (existingOutfits) {
    locationContainer.removeChild(existingOutfits);
  }
  /* get  */
  const newOutfits = displayOutfits(outfits);
  outfitContainer.append(newOutfits);
}

function displayUserLocation(location) {
  // Create location div
  const userLocationDiv = document.createElement("div");
  userLocationDiv.className = "user-location";

  // Create location description
  const locationDescription = document.createElement("p");
  locationDescription.textContent = location.description;
  locationDescription.className = "location-description";

  userLocationDiv.append(locationDescription);

  // Create buttons for exit options
  for (const option of location.exitOptions) {
    const exitButton = document.createElement("button");
    exitButton.textContent = locations[option].name;
    exitButton.className = "exit-options";

    // Add advent listner to option buttons
    exitButton.addEventListener("click", function () {
      console.log("you chose " + option);
      currentLocation = option;
      /* renderLocations(); */
      main();
    });

    userLocationDiv.append(exitButton);
  }
  return userLocationDiv;
}

function displayOutfits(outfits) {
  // Create outfit div
  const outfitDiv = document.createElement("div");
  outfitDiv.id = "user-outfits";

  // Create outfit header
  const outfitHeader = document.createElement("h2");
  outfitHeader.innerHTML = "Choose your Outfit.";
  outfitHeader.id = "outfit-header";

  outfitDiv.append(outfitHeader);

  // Create outfit title
  for (const outfit of outfits) {
    if (currentLocation == Number(outfit.location)) {
      const outfitTitle = document.createElement("h3");
      outfitTitle.className = "outfit-title";
      outfitTitle.textContent = outfit.name;
      outfitDiv.append(outfitTitle);
      console.log(outfit.location);
      console.log(currentLocation);
    } else {
      console.log("Sorry! There are no avalible outfits at the moment.");
    }
  }
  return outfitDiv;
}
