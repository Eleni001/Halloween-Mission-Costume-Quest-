/**
 * @typedef {{ name: string, description: string, exitOptions: number[] }} UserLocation
 */

/**
 * a list of locations used for the user to navigate between
 * @type {UserLocation[]}
 */
const locations = [
  {
    name: "Outside The Store",
    description:
      "You have just arrived and are standing outside the store ready to search for the perfect Halloween outfit!",
    exitOptions: [1],
  },
  {
    name: "Entrance To The Store",
    description:
      "You are standing at the enterace of the store. There are different departments depending on theme. Choose which one you want to go to.",
    exitOptions: [0, 2, 4],
  },
  {
    name: "Cashier",
    description:
      "Place holder Cashier",
    exitOptions: [1, 3, 4, 5],
  },
  {
    name: "Funny Costumes Department",
    description:
      "Place holder Funny",
    exitOptions: [2, 5, 6],
  },
  {
    name: "Scary Costumes Department",
    description:
      "Place holder Scary",
    exitOptions: [1, 2, 5],
  },
  {
    name: "Sexy Costumes Department",
    description:
      "Place holder Sexy",
    exitOptions: [2, 3, 4, 5, 6],
  },
  {
    name: "Fitting Room",
    description:
      "Place holder Fitting Room",
    exitOptions: [3, 5],
  },
];

/**
 * @typedef {{ name: string, description: number, exitOptions: number[] }} Outfits
 */

/**
 * a list of outfits used to display in various rooms
 * @type {Outfits[]}
 */
let outfits = [
  {
    name: "a",
    price: 123,
    location: 3,
  }, 
  {
    name: "b",
    price: 199,
    location: 3,
  },
  {
    name: "c",
    price: 399,
    location: 4,
  },
  {
    name: "d",
    price: 125,
    location: 5,
  }
]