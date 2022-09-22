"use strict";

const input = require('sync-input');

const gifts = [
  {
    "name": "Teddy Bear",
    "price": 10,
    "id": 1,
    "quantity": 1
  },
  {
    "name": "Big Red Ball",
    "price": 5,
    "id": 2,
    "quantity": 1
  },
  {
    "name": "Huge Bear",
    "price": 50,
    "id": 3,
    "quantity": 1
  },
  {
    "name": "Candy",
    "price": 8,
    "id": 4,
    "quantity": 1
  },
  {
    "name": "Stuffed Tiger",
    "price": 15,
    "id": 5,
    "quantity": 1
  },
  {
    "name": "Stuffed Dragon",
    "price": 30,
    "id": 6,
    "quantity": 1
  },
  {
    "name": "Skateboard",
    "price": 100,
    "id": 7,
    "quantity": 1
  },
  {
    "name": "Toy Car",
    "price": 25,
    "id": 8,
    "quantity": 1
  },
  {
    "name": "Basketball",
    "price": 20,
    "id": 9,
    "quantity": 1
  },
  {
    "name": "Scary Mask",
    "price": 75,
    "id": 10,
    "quantity": 1
  }
];

const actionOptions = [
  {"action": "Buy a gift","id": 1},
  {"action": "Add tickets","id": 2},
  {"action": "Check tickets","id": 3},
  {"action": "Show gifts","id": 4},
  {"action": "Exit the shop", "id": 5}
];


let numOfTickets = 0;


mainLoop();


function mainLoop() {

  printWelcomeMessage();
  printGifts();
  let mainMenuOption = 0;
  do {
    mainMenuOption = promptForMainMenuOption();
    mainAction(mainMenuOption);
  } while (mainMenuOption !== 5)
}

function printWelcomeMessage() {
  console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
  console.log("Hello friend! Thank you for visiting the carnival!");
}

function printGifts() {
  console.log("Here's the list of gifts:\n");
  gifts.forEach((gift) => {
    if (gift.quantity >0) console.log(`${gift.id}- ${gift.name}, Cost: ${gift.price} tickets`)
  });
}

function promptForMainMenuOption() {
  console.log("");
  return  Number(input(`${getOptionsMenu()}`));
}

function getOptionsMenu() {
  let optionsMenu = "What do you want to do?\n";
  actionOptions.forEach(option => optionsMenu += `${option.id}-${option.action} `);
  optionsMenu += "\n";
  return optionsMenu;
}

function mainAction(option) {
  switch (option) {
    case 1: getGift();
    break;
    case 2: addTickets();
    break;
    case 3: printTickets();
    break;
    case 4: printGifts();
    break;
    case 5: console.log("Have a nice day!");
    break;
    default: console.log("Please enter a valid number!");
    break;
  }
}


function getGift() {
  const requestedGiftId = Number(input("Enter the number of the gift you want to get: "));
  const gift = gifts.find(gift => gift.id === requestedGiftId);
  if (gift) {
    if(gift.quantity > 0){
      if (gift.price <= numOfTickets) {
        console.log(`Here you go, one ${gift.name}!`)
        gift.quantity--;
        numOfTickets -= gift.price;
        printTickets();
      } else console.log("Not enough tickets!");
    } else console.log(`Wow! There are no gifts to buy.`);
  } else console.log("There is no gift with that number!");
}

function addTickets() {
  const numOfTicketsToAdd = Number(input("Enter the ticket amount: "));
  if (numOfTicketsToAdd >= 0 && numOfTicketsToAdd <= 1000) numOfTickets += numOfTicketsToAdd;
  else console.log("Please enter a valid number between 0 and 1000.");
  printTickets();
}

function printTickets() {
  console.log(`Total tickets: ${numOfTickets}`);
}
