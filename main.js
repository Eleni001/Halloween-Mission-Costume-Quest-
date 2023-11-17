window.addEventListener("DOMContentLoaded", main);
/** Current location index for user
 */
let currentLocation = 0;
let outfitPicked = [];

/** This is the start of the program */
function main() {
  loadStateFromLS();
  renderAll();
}

/**
 *
 */
function renderAll() {
  renderLocations();
  renderOutfits();
  renderOutfitPicked();
}

/**
 * this generates the users current location
 */
function renderLocations() {
  /* get the container for for location display */
  const locationContainer = document.querySelector("#location-container");

  /* Remove the previous locations of the user */
  const existingUserLocation = document.querySelector(".user-location");
  if (existingUserLocation) {
    locationContainer.removeChild(existingUserLocation);
  }
  /* get the new location of the user */
  const newUserLocation = displayUserLocation(locations[currentLocation]);
  locationContainer.append(newUserLocation);
}

/**
 * this generates available outfits based on the user´s current location
 */
function renderOutfits() {
  const outfitContainer = document.querySelector("#outfit-container");

  /* Remove the outfits shown in previous departments */
  const existingOutfits = document.querySelector("#user-outfits");
  if (existingOutfits) {
    outfitContainer.removeChild(existingOutfits);
  }

  /* get the new outfits */
  const newOutfits = displayOutfits(outfits);
  outfitContainer.append(newOutfits);
}
function renderOutfitPicked() {
  const outfitPickedContainer = document.querySelector("#outfit-picked-container");

  /* get picked outfits */
  const outfitPickedDiv = displayoutfitPicked(outfitPicked);
  outfitPickedContainer.append(outfitPickedDiv);
}

/**
 * this takes location object and creates all needed html elements and returns it
 * @param {UserLocation} location  the location object to turn into html content
 * @returns an html representation of the user´s location
 */
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
      const currentLocationString = JSON.stringify(currentLocation);
      localStorage.setItem("currentLocation", currentLocationString);
      renderAll();
    });

    userLocationDiv.append(exitButton);
  }
  return userLocationDiv;
}

/**
 * this takes an array of outfit objects available based on user´s location
 * @param {Outfits[]} outfitsToDisplay array of outfit objects to turn into html content
 * @returns an html representation of availalble outfits
 */
function displayOutfits(outfitsToDisplay) {
  // Create outfit div
  const outfitDiv = document.createElement("div");
  outfitDiv.id = "user-outfits";

  const outfitsInCurrentDep = outfitsToDisplay.filter(function (outfit) {
    return currentLocation === outfit.location;
  });
  if (outfitsInCurrentDep.length >= 1) {
    // Create outfit header
    const outfitHeader = document.createElement("h2");
    outfitHeader.innerHTML = "Choose your Outfit.";
    outfitHeader.id = "outfit-header";

    outfitDiv.append(outfitHeader);

    // Create outfit title
    for (const outfit of outfitsInCurrentDep) {
      const outfitTitle = document.createElement("button");
      outfitTitle.className = "outfit-title";
      outfitTitle.textContent = outfit.name;

      // Add advent listner to option buttons
      outfitTitle.addEventListener("click", function () {
        console.log("you piced up " + outfit.name);
        outfitPicked.push(outfit);
        // Delete teh piced out outfit from previous location
        const indexToDelete = outfits.indexOf(outfit);
        outfits.splice(indexToDelete, 1);
        const outfitPickedString = JSON.stringify(outfitPicked);
        localStorage.setItem("outfitPicked", outfitPickedString);
        main();
      });

      outfitDiv.append(outfitTitle);
    }
  }
  return outfitDiv;
}

function displayoutfitPicked(outfitsToDisplay) {
  // Create outfit div
  const outfitPickedDiv = document.createElement("div");
  outfitPickedDiv.id = "user-pickedoutfits";

  if (outfitsToDisplay.length >= 1) {
    // Create outfit header
    const outfitHeader = document.createElement("h2");
    outfitHeader.innerHTML = "You have picked these outfits";
    outfitHeader.id = "picked-outfit-header";

    outfitPickedDiv.append(outfitHeader);

    // Create outfit title
    for (const outfit of outfitsToDisplay) {
      const outfitTitle = document.createElement("h3");
      outfitTitle.className = "outfit-title";
      outfitTitle.textContent = outfit.name;
      outfitPickedDiv.append(outfitTitle);
    }
  }
  return outfitPickedDiv;
}

/**
 * Loads the cart from local storage and
 * saves it to the global cart array.
 */
function loadStateFromLS() {
  if (localStorage.key("currentLocation")) {
    const currentLocationString = localStorage.getItem("currentLocation");
    currentLocation = JSON.parse(currentLocationString);
  }
  if (localStorage.key("outfitPicked")) {
    const outfitPickedString = localStorage.getItem("outfitPicked");
    outfitPicked = JSON.parse(outfitPickedString);
  }
}
