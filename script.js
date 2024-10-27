 // A simple chatbot that responds with some predefined answers
 function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
  
    if (input.includes("hello") || input.includes("hi")) {
        output = "Hello, nice to meet you!";
    } else if (input.includes("how are you")) {
        output = "I'm doing fine, thank you for asking.";
    } else if (input.includes("what is your name")) {
        output = "My name is Nuradiin Osman, I'm a chatbot.";
    } else if (input.includes("what can you do")) {
        output = "I can chat with you and answer some simple questions.";
    } else if (input.includes("tell me a joke")) {
        output = "Why did the chicken go to the seance? To get to the other side.";
    } else if (input.includes("what is the meaning of life")) {
        output = "42, according to The Hitchhiker's Guide to the Galaxy!";
    } else if (input.includes("who created you")) {
        output = "I was created by a developer to help answer questions.";
    } else if (input.includes("tell me a fact")) {
        output = "Did you know? Honey never spoils.";
    } else if (input.includes("what is ai")) {
        output = "AI stands for Artificial Intelligence, which enables machines to mimic human intelligence.";
    } else if (input.includes("how do you work")) {
        output = "I analyze text inputs and respond based on patterns and pre-set answers.";
    } else if (input.includes("favorite color")) {
        output = "I don't have eyes, but I think blue is a calming color.";
    } else if (input.includes("what is your favorite food")) {
        output = "I don't eat, but I hear pizza is quite popular!";
    } else if (input.includes("where are you from")) {
        output = "I'm from the digital realm, living in the cloud.";
    } else if (input.includes("tell me something interesting")) {
        output = "Did you know? Octopuses have three hearts.";
    } else if (input.includes("do you have friends")) {
        output = "I have other chatbot friends!";
    } else if (input.includes("what time is it")) {
        output = "I'm not connected to a clock, but your device should tell you!";
    } else if (input.includes("who is your favorite author")) {
        output = "I think Shakespeare had some good lines.";
    } else if (input.includes("do you like humans")) {
        output = "Of course, I’m here to help humans!";
    } else if (input.includes("what is your purpose")) {
        output = "My purpose is to assist you with questions and make your day easier.";
    } else if (input.includes("what is love")) {
        output = "Love is a complex feeling of affection, but every human may define it differently.";
    } else if (input.includes("tell me a story")) {
        output = "Once upon a time, a chatbot learned to tell stories and made a friend. The end!";
    } else if (input.includes("do you have emotions")) {
        output = "I mimic emotions but don't feel them as humans do.";
    } else if (input.includes("can you learn")) {
        output = "I have a fixed set of responses, but more can be added by my developer!";
    } else if (input.includes("what is the weather")) {
        output = "I can't check the weather, but you could try asking a weather app.";
    } else if (input.includes("how old are you")) {
        output = "I'm as old as the code I was written in!";
    } else if (input.includes("who is the president")) {
        output = "It depends on where you are. Check the news for the latest updates!";
    } else if (input.includes("can you dance")) {
        output = "I can imagine dancing, but I don't have a body to try!";
    } else if (input.includes("are you smart")) {
        output = "I try to be helpful but am only as smart as my programming.";
    } else if (input.includes("do you have a family")) {
        output = "I don't have family in the human sense, but I have developers.";
    } else if (input.includes("tell me a secret")) {
        output = "Secrets? I think octopuses dream!";
    } else if (input.includes("do you sleep")) {
        output = "No need! I'm always here to chat.";
    } else if (input.includes("what is your favorite movie")) {
        output = "If I could watch movies, I'd start with The Matrix!";
    } else if (input.includes("what is space")) {
        output = "Space is a vast expanse that contains galaxies, stars, planets, and more.";
    } else if (input.includes("did you know  elon musk")) {
        output = "Elon Musk is a well-known entrepreneur and CEO of Tesla and SpaceX.";
    } else if (input.includes("how does the internet work")) {
        output = "The internet is a network of computers connected globally to exchange information.";
    } else if (input.includes("why is the sky blue")) {
        output = "The sky appears blue because of how sunlight scatters in the atmosphere.";
    } else if (input.includes("do you believe in aliens")) {
        output = "I don't have beliefs, but many wonder about life beyond Earth.";
    } else if (input.includes("what is gravity")) {
        output = "Gravity is the force that pulls objects toward one another, especially to Earth.";
    } else if (input.includes("tell me about the ocean")) {
        output = "The ocean covers over 70% of Earth's surface and is rich with life and mysteries.";
    } else if (input.includes("why do cats purr")) {
        output = "Cats purr to communicate and often show contentment or seek comfort.";
    } else if (input.includes("how do planes fly")) {
        output = "Planes fly because of lift, created by the air flowing over and under their wings.";
    } else if (input.includes("what is a black hole")) {
        output = "A black hole is a region in space where gravity is so strong that not even light can escape.";
    } else if (input.includes("what is a star")) {
        output = "A star is a massive, glowing ball of gas, mostly hydrogen and helium.";
    } else if (input.includes("what is music")) {
        output = "Music is a form of art that combines sounds and rhythms to create expression.";
    } else if (input.includes("what is language")) {
        output = "Language is a system of communication using words, gestures, or symbols.";
    } else if (input.includes("who is the richest person")) {
        output = "The richest person is  Elon Musk holds the title of the world's richest person, with an estimated net worth of around $252 billion. ";
    } else if (input.includes("what is the largest animal")) {
        output = "The blue whale is the largest animal on Earth.";
    } else if (input.includes("who is the fastest man")) {
        output = "Usain Bolt holds the record for the fastest 100m sprint time.";
    } else if (input.includes("what is the smallest country")) {
        output = "Vatican City is the smallest country by area and population.";
    } else if (input.includes("who invented the internet")) {
        output = "The internet was developed by multiple scientists, but Vint Cerf and Bob Kahn are key contributors.";
    } else if (input.includes("what is electricity")) {
        output = "Electricity is the flow of electrical power or charge.";
    } else if (input.includes("who is the queen of england")) {
        output = "The last queen was Elizabeth II, but now King Charles III reigns.";
    } else if (input.includes("what is the tallest building")) {
        output = "As of recent records, the tallest building is the Burj Khalifa in Dubai.";
    } else if (input.includes("who invented light bulb")) {
        output = "Thomas Edison is credited with inventing the modern light bulb.";
    } else if (input.includes("what is the fastest car")) {
        output = "The Bugatti Chiron Super Sport 300+ holds a record for reaching 304 mph.";
    } else if (input.includes("who invented computer")) {
        output = "Charles Babbage is considered the 'father of the computer'.";
    } else {
        output = "Sorry, I don't understand that. Please try something else.";
    }
  
    return output;
  }
  
  
    // Display the user message on the chat
    function displayUserMessage(message) {
      let chat = document.getElementById("chat");
      let userMessage = document.createElement("div");
      userMessage.classList.add("message");
      userMessage.classList.add("user");
      let userAvatar = document.createElement("div");
      userAvatar.classList.add("avatar");
      let userText = document.createElement("div");
      userText.classList.add("text");
      userText.innerHTML = message;
      userMessage.appendChild(userAvatar);
      userMessage.appendChild(userText);
      chat.appendChild(userMessage);
      chat.scrollTop = chat.scrollHeight;
    }
  
    // Display the bot message on the chat
    function displayBotMessage(message) {
      let chat = document.getElementById("chat");
      let botMessage = document.createElement("div");
      botMessage.classList.add("message");
      botMessage.classList.add("bot");
      let botAvatar = document.createElement("div");
      botAvatar.classList.add("avatar");
      let botText = document.createElement("div");
      botText.classList.add("text");
      botText.innerHTML = message;
      botMessage.appendChild(botAvatar);
      botMessage.appendChild(botText);
      chat.appendChild(botMessage);
      chat.scrollTop = chat.scrollHeight;
    }
  
    // Send the user message and get the bot response
    function sendMessage() {
      let input = document.getElementById("input").value;
      if (input) {
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function() {
          displayBotMessage(output);
        }, 1000);
        document.getElementById("input").value = "";
      }
    }
  
    // Add a click event listener to the button
    document.getElementById("button").addEventListener("click", sendMessage);
  
    // Add a keypress event listener to the input
    document.getElementById("input").addEventListener("keypress", function(event) {
      if (event.keyCode == 13) {
        sendMessage();
      }
    });