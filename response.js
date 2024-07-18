const responseObj = {
    hello: "hey whats up?",
    hey:"hey whats up?",
    what_is_your_name: "My name is PAWPL and i was created by PETER.DEV to help you find the best movies",
    how_are_you: "I'm fine thank you! And you?",
    am_good:"Thats great",
    what_movie_can_i_watch:"In movie room there are many types of movies, which genre do you like?",
    the_sky:"Hahahaha! i see what you did",
    can_you_open_youtube_for_me:"I have opened youtube for you",
    Good_day:"Have a good day",
    Good_bye:"Good bye and talk to you later",
    can_you_help_me_with_something:"Yes i would be happy to help you. What can i help you with?",
    i_love_you:"Thank you! I'm here to help you find the best movies",
    who_is_your_master:"I dont have a master but i was created by PETER.DEV. How can i help you?",
    what_are_your_commands:"I can explain to you movie scenes that you didnt understand. Which movie scene would you like me to explain to you",
    in_the_movie_avengers:"Sure! Please describe the part that you want me to explain to you",

    today: () => {
        return "Today is " + new Date().toDateString();
    },
    time: () => {
        return "The time now is " + new Date().toLocaleTimeString();
    },
    default_response: "I'm sorry, I couldn't quite catch that. Could you please repeat or ask differently?"
};








const getChatbotResponse = (userInput) => {
    const input = userInput.trim().toLowerCase();

    if (input.includes("how are you")) {
        return responseObj.how_are_you;
    }
    else if(input.includes("am good")){
        return responseObj.am_good
    }
    else if(input.includes("Good day")){
        return responseObj.Good_day
    }
    else if(input.includes("In the movie avengers can you explain to me the part where Dr.strange saw that only one of the outcome the will win")){
        return responseObj.in_the_movie_avengers
    }
    else if(input.includes("what are your commands")){
        return responseObj.what_are_your_commands
    }
    else if(input.includes("i love you")){
        return responseObj.i_love_you
    }
    else if(input.includes("who is your master")){
        return responseObj.who_is_your_master
    }
    else if(input.includes("Good bye")){
        return responseObj.Good_bye;
    }
    else if(input.includes("the sky")){
        return responseObj.the_sky
    }
    else if(input.includes("can you help me with something")){
        return responseObj.can_you_help_me_with_something
    }
    else if(input.includes("can you open youtube for me")){
        window.open("https://www.youtube.com");
        return responseObj.can_you_open_youtube_for_me;
    }
    else if(input.includes("hey")){
        return responseObj.hey;
    } 
    else if (input.includes("what is your name")) {
        return responseObj.what_is_your_name;
    } 
    else if (input.includes("hello")) {
        return responseObj.hello;
    } 
    else if(input.includes("what movie can i watch")){
        return responseObj.what_movie_can_i_watch;
    }
    else if (input.includes("today")) {
        return responseObj.today();
    }
     else if (input.includes("time")) {
        return responseObj.time();
    }
     else  {
        return responseObj.default_response;
    }
};