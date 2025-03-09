// Code your solutions in this file
// index.js

// writeCards function
function writeCards(names, event) {
    const messages = []; // Create an empty array to hold the messages
  
    // Loop through the names array
    for (let i = 0; i < names.length; i++) {
      // Create a thank-you message using string interpolation
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message); // Add the message to the messages array
    }
  
    return messages; // Return the array of messages
  }
  
  // countDown function
  function countDown(startingNumber) {
    // Use a while loop to count down
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--; // Decrement the number
    }
  }
  
  // Export the functions if needed (depending on your test setup)
  module.exports = {
    writeCards,
    countDown,
  };