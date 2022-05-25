
// Creates Character class to be used to make party members
class Character {
    constructor(name, lvl, hp, mp, xp) {
        this.name = name;
        this.lvl = lvl;
        this.hp = hp;
        this.mp = mp;
        this.xp = xp;
    }
}

// Function to create the Camp page
function buildPage() {
        initialize();
        createShop();
}

// Function that creates default characters
function initialize() {
    window.avatar = new Character("Champion", 1, 100, 50, 0); // Creates main character
    window.friend = new Character("Best Friend", 1, 100, 50, 0); // Creates main side character
    window.wizard = new Character("Wizard", 1, 75, 100, 0); // Creates Wizard
    window.dog = new Character("Hound", 1, 125, 25, 0); // Creates dog companion

    // Sets Character names in the party table
    $("#avatar-sheet").text(avatar.name);
    $("#friend-sheet").text(friend.name);
    $("#wizard-sheet").text(wizard.name);
    $("#dog-sheet").text(dog.name);

    
}

// Function allows you to change party member names
function customizeParty() {
    // Grab the values at the form inputs
    if ($("#avatar-name").val() !== ""){ 
        let aName = $("#avatar-name").val();
        window.avatar.name = aName;
        $("#avatar-sheet").text(window.avatar.name);
    }
    else {
        let aName = window.avatar.name;
        window.avatar.name = aName;
        $("#avatar-sheet").text(window.avatar.name);
    }

    if ($("#friend-name").val() !== ""){ 
        let bName = $("#friend-name").val();
        window.friend.name = bName;
        $("#friend-sheet").text(window.friend.name);
    }
    else {
        let bName = window.friend.name;
        window.friend.name = bName;
        $("#friend-sheet").text(window.friend.name);
    }

    if ($("#dog-name").val() !== ""){ 
        let dName = $("#dog-name").val();
        window.dog.name = dName;
        $("#dog-sheet").text(window.dog.name);
    }
    else {
        let dName = window.avatar.name;
        window.dog.name = dName;
        $("#dog-sheet").text(window.dog.name);
    }
}

// Function allows you to change party member models
function modelSelect(value) {
    // Array contains links to different model images for easy swapping
    const models = ["resource/images/animations/m knight no bg.gif", "resource/images/animations/f knight no bg.gif", "resource/images/animations/wizard no bg.gif", "resource/images/animations/wolf no bg.gif"];
    
    // Based on the value from the radios, changes character model
    switch(value) {
        // First four cases check for Main Character/Avatar inputs
        case "amale":
            $("#avatar").attr("src", models[0])
            break;
        case "afemale":
            $("#avatar").attr("src", models[1])
            break;
        case "awizard":
            $("#avatar").attr("src", models[2])
            break;
        case "adog":
            $("#avatar").attr("src", models[3])
            break;

        // Last four cases check for Side Character/Best Friend inputs
        case "bmale":
            $("#best-friend").attr("src", models[0])
            break;
        case "bfemale":
            $("#best-friend").attr("src", models[1])
            break;
        case "bwizard":
            $("#best-friend").attr("src", models[2])
            break;
        case "bdog":
            $("#best-friend").attr("src", models[3])
            break;
        
        // Not sure how someone would break the switch since it uses static values, but returns this just in-case that somehow happens.
        default:
            console.log("I don't know how, but you broke it.");
    }
}

// Function that populates the Shop table
function createShop() {

    // Creates Map inventory that contains shop item objects
    const inventory = new Map();
    
    inventory.set(1, {price: "5g", item: "Health Potion"})
    inventory.set(2, {price: "10g", item: "Mana Potion"})
    inventory.set(3, {price: "25g", item: "Iron Armor"})
    inventory.set(4, {price: "50g", item: "Steel Armor"})
    inventory.set(5, {price: "100g", item: "Dragon Armor"})
    inventory.set(6, {price: "15g", item: "Iron Sword"})
    inventory.set(7, {price: "40g", item: "Steel Sword"})
    inventory.set(8, {price: "120g", item: "Dragon Sword"})
    inventory.set(9, {price: "1000g", item: "Divine Armor"})
    inventory.set(10, {price: "1500g", item: "Blade of Justice"})

    // Loops from 0 to 4 (We know the table will always have 5 rows) and adds a random Item to each row and column
    for(let i = 0; i < 5; i++) {
        let randomInt = getRandomInt(inventory.size) + 1; // Takes a random integer from 0 to 9 then adds 1 so that it'll go from 1 to 10
        $("#price" + i + "").text(inventory.get(randomInt).price); // Sets the text of the price[iterator] ID to the inventory item's price at index
        $("#item" + i + "").text(inventory.get(randomInt).item); // Sets the text of the item[iterator] ID to the inventory item's item at index
    }
}

function buyItem(value) {
        $("#price" + value + "").text("SOLD!");
        $("#item" + value + "").text("SOLD OUT!");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

$(document).ready(function() {
    buildPage();
    $("#customize").on('click', function(){
        customizeParty();
    })

    $('input[name="avatar_model"]').on('click', function(e) {
        modelSelect($('input[name="avatar_model"]:checked').val());
    })

    $('input[name="friend_model"]').on('click', function(e) {
        modelSelect($('input[name="friend_model"]:checked').val());
    })

    $('.buy-button').on('click', function() {
        buyItem($(this).attr("value"));
    })
});
