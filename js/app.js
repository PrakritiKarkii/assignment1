// Arrays holding words for the story components
const nounList = ["elephant", "robot", "alien", "wizard", "knight"];
const verbList = ["dances", "whispers", "teleports", "builds", "paints"];
const adjectiveList = ["brave", "mysterious", "ancient", "shiny", "gigantic"];
const objectList = ["sword", "crystal", "potion", "book", "shield"];
const placeList = ["castle", "dungeon", "forest", "desert", "kingdom"];

// Object to store selected parts of the story
let storyElements = { noun: "", verb: "", adjective: "", object: "", place: "" };

/**
 * Selects a random item from an array.
 * @param {Array} array - The array to pick a random item from.
 * @returns {string} - The randomly selected item.
 */
function selectRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Event listeners for buttons to pick a word and update the story
document.getElementById('getNoun').onclick = function() {
    storyElements.noun = selectRandomItem(nounList);  // Choose a random noun
    renderStory();  // Update the story display
};

document.getElementById('getVerb').onclick = function() {
    storyElements.verb = selectRandomItem(verbList);  // Choose a random verb
    renderStory();  // Update the story display
};

document.getElementById('getAdjective').onclick = function() {
    storyElements.adjective = selectRandomItem(adjectiveList);  // Choose a random adjective
    renderStory();  // Update the story display
};

document.getElementById('getObject').onclick = function() {
    storyElements.object = selectRandomItem(objectList);  // Choose a random object
    renderStory();  // Update the story display
};

document.getElementById('getLocation').onclick = function() {
    storyElements.place = selectRandomItem(placeList);  // Choose a random place
    renderStory();  // Update the story display
};

/**
 * Updates the displayed story text.
 * Constructs a sentence using the selected story parts and displays it.
 * Shows a message if all parts are empty.
 */
function renderStory() {
    if (storyElements.noun || storyElements.verb || storyElements.adjective || storyElements.object || storyElements.place) {
        // Create a story sentence using a template for better grammar
        const storyText = `The ${storyElements.adjective} ${storyElements.noun} ${storyElements.verb} over the ${storyElements.object} in the ${storyElements.place}.`;
        // Display the story in the HTML element with id 'storyDisplay'
        document.getElementById('storyDisplay').innerText = storyText;
    } else {
        document.getElementById('storyDisplay').innerText = "Story has been reset.";
    }
}

// Event listener for the 'Speak Story' button
document.getElementById('readStory').onclick = function() {
    const textToRead = document.getElementById('storyDisplay').innerText;  // Get the story text
    if (textToRead.trim() !== "" && textToRead !== "Story has been reset.") { // Check if there is any text to read
        speakText(textToRead);  // Invoke the TextToSpeech function
    } else {
        alert("The story is empty. Please generate a story first.");
    }
};

/**
 * Uses the browser's SpeechSynthesis API to read a given text aloud.
 * @param {string} text - The text to be read.
 */
function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);  // Create a new speech synthesis utterance
    window.speechSynthesis.speak(utterance);  // Speak the text
}

// Event listener for the 'Generate Random Story' button
document.getElementById('generateStory').onclick = function() {
    // Randomly select a word from each category and update the story elements
    storyElements.noun = selectRandomItem(nounList);
    storyElements.verb = selectRandomItem(verbList);
    storyElements.adjective = selectRandomItem(adjectiveList);
    storyElements.object = selectRandomItem(objectList);
    storyElements.place = selectRandomItem(placeList);
    renderStory();  // Update the story display
};

// Event listener for the 'Reset Story' button
document.getElementById('clearStory').onclick = function() {
    // Reset all story elements to empty strings
    storyElements = { noun: "", verb: "", adjective: "", object: "", place: "" };
    renderStory();  // Clear the displayed story text
};
