document.addEventListener('DOMContentLoaded', () => {
   var backgroundContainer = document.getElementById('backgroundContainer')
   var loading = document.getElementById('pre-loader');
   window.addEventListener('DOMContentLoaded', function () {
      this.setTimeout(function () {
         loading.style.display = 'none'
         document.body.style.display = 'hidden'
         backgroundContainer.style.color = 'red'

      }, 1500);
   });




   document.getElementById('closeButton').addEventListener('click', function () {
      sidebarMenu.style.display = 'none';
      sidebarMenu.style.left = '-200px'
      sidebarMenu.classList.remove('active');
   });
   document.getElementById('sidebarMenuBtn').addEventListener('click', function () {
      sidebarMenu.style.display = 'block';
      sidebarMenu.style.left = '0px'
      sidebarMenu.classList.add('active')
      
   });

   document.getElementById('openPopupList').addEventListener('click', function () {
      popupContainer.style.display = 'block'
   })

   document.getElementById('closePopupList').addEventListener('click', function () {
      popupContainer.style.display = 'none'
   })

   let profilePic = document.querySelectorAll('.changeable-profile');
   let inputFile = document.getElementById('profile-pic');


   var profilePicture = localStorage.getItem('changeable-profile');
  

   profilePic.forEach(profile => {
      if(profilePicture){
         profile.src = profilePicture;
      } else{
         profile.src = 'default image.jpg';
      }
     
   })


      window.addEventListener('DOMContentLoaded', () => {
         const storedProfilePic = localStorage.getItem('changeable-profile');
         if (storedProfilePic) {
            profilePic.src = storedProfilePic;
         }
         inputFile.addEventListener('change', function (event) {
            const file = event.target.files[0];
            if (file) {
               const reader = new FileReader();
               reader.onload = function (e) {
                  const imageUrl = e.target.result;
                  profilePic.forEach(profile => {
                     profile.src = imageUrl;
                  })
                  localStorage.setItem('changeable-profile', imageUrl);
               };
               reader.readAsDataURL(file);
            }
         })
      })




      const accountPopup = document.getElementById('account');
      const inputField = document.getElementById('profileName');
      document.getElementById('OpenPopupAccount').addEventListener('click', function () {
         accountPopup.style.display = 'flex'
      });
      document.getElementById('accountClose').addEventListener('click', function () {
         accountPopup.style.display = 'none'
      });
      document.getElementById('openAccountLarge').addEventListener('mouseover', function () {
         accountPopup.style.display = 'flex'
           
      })





      inputField.addEventListener('focus', function () {
         inputField.style.transform = 'translateY(75vh)'
      });
      inputField.addEventListener('blur', function () {
         inputField.style.transform = 'translateY(0)'
      });


      document.getElementById('cancelBtn').addEventListener('click', function () {
         document.getElementById('profileName').value = ''
      });

      document.getElementById('scrollToMovies').addEventListener('click', function () {
       
         sidebarMenu.style.display = 'none';
        
      })
      var waitingMessage = document.getElementById('waitingMessage');
      var middleSearchInput = document.getElementById('middleSearch').value;
      middleSearch.addEventListener('keydown', function (event) {

         if (event.key === 'Enter') {
            waitingMessage.style.display = 'block'

            document.getElementById('message').innerHTML = ("<span style='color:white; font-size:30px'>Searching...</span> " + middleSearchInput);
         }
         setTimeout(function () {
            waitingMessage.style.display = 'none'
         }, 2000)
      })

     
  

      var printText = document.getElementById('printBtn');
      printText.addEventListener('click', function () {
         print();
      })



      const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb103343580d3bdb8cb5075d3617f0f4&page=1'
      const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
      const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=eb103343580d3bdb8cb5075d3617f0f4&query="

      const mainContainer = document.getElementById('main');
      const formContainer = document.getElementById('form');
      const searchContainer = document.getElementById('middleSearch');
      /* possible source of error.. Try changing the variable name */

      returnMovies(APILINK)


      function returnMovies(url) {
         fetch(url).then(res => res.json())
            .then(function (data) {
              
               data.results.forEach(element => {
                  const divCard = document.createElement('div');
                  divCard.setAttribute('class', 'card');
                  const imageContainer = document.createElement('img');
                  imageContainer.setAttribute('class', 'thumbnail')
                  imageContainer.setAttribute('id', 'image')
                  const movieTitle = document.createElement('h3');
                  movieTitle.setAttribute('class', 'title')
                  const footerContainer = document.createElement('footer');

                  movieTitle.innerHTML = `${element.title}`;
                  imageContainer.src = element.poster_path ? IMG_PATH + element.poster_path : 'https://via.placeholder.com/1280x720?text=No+Image';

                  footerContainer.appendChild(imageContainer);
                  divCard.appendChild(footerContainer);
                  divCard.appendChild(movieTitle);
                  mainContainer.appendChild(divCard);

               });
            });
      }
      formContainer.addEventListener('submit', (e) => {
         e.preventDefault();
         mainContainer.innerHTML = ''
         const searchItem = searchContainer.value

         if (searchItem) {
            returnMovies(SEARCHAPI + searchItem);
            searchContainer.value = "";
         }
      })


      document.getElementById('micButton').addEventListener('click', () => {
         var recognition = new webkitSpeechRecognition();
         recognition.lang = 'en-US';
         
         recognition.onresult = function(event) {
             var transcript = event.results[0][0].transcript;
             console.log(transcript);
             document.getElementById('middleSearch').value = transcript;
         };
     
         recognition.start();
     });


     let availableKeywords=[
          //some movies starting with letter A
             'Avengers:End game','Avengers : Infinity war', 'A Bad Idea Gone Wrong','A quiet place : Day one','Attack', 'A',
             'All American', 'Amazing Spiderman', 'Spiderman: Away from home','avengers:age of ultron','a family affair','aka',
             'after the storm','ant man and the wasp','assasin','ashes of time','avatar:the way of life','furiosa',
         //some movies starting with letter B
         'blackish','black adam',''
            
             
     ];
     const resultsBox=document.querySelector('.auto-complete');
     var middleSearchInput = document.getElementById('middleSearch');
   
     middleSearchInput.onkeyup=function(){
      let result=[]
      let input=middleSearchInput.value;

      if(input.length){
         result=availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
         });
         console.log(result);
      }
      display(result);
      if(!result.length){
         resultsBox.innerHTML=''
      }
     }
     function display(result){
      const content=result.map((list)=>{
         return '<li onclick = "selectInput(this)" >' + list + "</li>"
      });
      resultsBox.innerHTML="<ul>" + content.join('') + "</ul>"  // possible source of error just change the div and add ul tag
     }
     function selectInput(list){
      middleSearchInput.value=list.innerHTML;
      resultsBox.innerHTML=''
     };





     const chatBot= document.getElementById('chatbotSection');
     document.getElementById('closeBot').addEventListener('click',function(){
         chatBot.style.display='none'
     });
    document.getElementById('openBot').addEventListener('click',function(){
       chatBot.style.display='flex'
     
    })
     const botDirectory=document.getElementById('botDirectory')
     document.getElementById('openingBotMenu').addEventListener('click',function(){
        botDirectory.style.display='block'
     })
     document.getElementById('chatWithMeBotDir').addEventListener('click',function(){
      chatBot.style.display='flex'
      if(chatBot){
         const botPosition = document.body.scrollHeight / 1;
         sidebarMenu.style.display = 'none';
         botDirectory.style.display='none'
         window.scrollTo({
            top: botPosition,
            behavior: 'smooth'
         })
      }
     });




      const chatBotTextWrapper=document.getElementById('chatContainer');
      const userChatTextarea=document.getElementById('userTextArea');
      const sendIcon=document.getElementById('sendMessage');

      sendIcon.addEventListener('click', () => {
         console.log("Send button clicked");
         renderUserMessage();
     });

      userChatTextarea.addEventListener('keyup',function(event){
         if(event.key==='Enter'){
            console.log("Enter key pressed");
            renderUserMessage()
         }
      })
      const renderUserMessage= ()=>{
         const userInput= userChatTextarea.value;
         if (userInput === "") return;
         console.log("User input:", userInput);
         renderMessageEle(userInput, "user");
         userChatTextarea.value= "";
         status.style.display = 'flex';
         status.innerText = 'typing...';
         setTimeout(function(){
            renderChatbotResponse(userInput);
            setScrollPosition()
         },2000)
      }


       const renderChatbotResponse = (userInput)=>{
         const res=getChatbotResponse(userInput);
         console.log("Chatbot response:", res);
         renderMessageEle(res, "bot");
         status.innerHTML='online'
      }
      const renderMessageEle=(txt, type) =>{
         console.log("Rendering message:", txt, "Type:", type);
         let className="user-message"
         if(type !== "user"){
            className="chat-with-me-section"
         }
         const messageEle=document.createElement("div"); 
         const txtNode=document.createTextNode(txt);
         messageEle.classList.add(className); // CHANGE THE CALL AND PUT AN ID INSTEAD OF A CLASS
         messageEle.append(txtNode);
         chatBotTextWrapper.append(messageEle);
      }
      
      
     
     
     

      const setScrollPosition =()=>{
         if(chatBotTextWrapper.scrollHeight >0){
            chatBotTextWrapper.scrollTop= chatBotTextWrapper.scrollHeight;
         }
      }
      const status=document.getElementById('onlineStatus')
      userChatTextarea.addEventListener('keyup',function(event){
          if(event.key==='Enter'){
            status.style.display='flex'
          }
          else{
            status.innerHTML='online'
          }
      })




      // SENDING NOTIFICATIONS TO THE USER TO RECOMMEND A NEW MOVIE

     document.getElementById('learnMoreBtn').addEventListener('click',function(){
      Notification.requestPermission().then(perm=>{
         if( perm=== 'granted'){
            notify()
         }
         else if(perm==='denied'){
            console.error("Notification has been denied")
         }
         else{
            console.log("Notification is at default")
         }

         function notify(){
            const notification= new Notification("Movie Room",{
               body:"Thank you for subscribing to ours news. We'll update you about every new movie",
               icon:"lionardo.jpeg"
            })
            notification.addEventListener('click',function(){
               notification.close();
            })
         }
      })
     })



          //THE HEADER BEHAVIORS
      document.getElementById('windowPrint').addEventListener('click',function(){
         print()
      });
      document.getElementById('largeWindowScroll').addEventListener('click', function() {
         const middlePosition = document.documentElement.scrollHeight / 1.9; 
         window.scrollTo({
             top: middlePosition,
             behavior: 'smooth'
         });
     });
     document.getElementById('openLargeList').addEventListener('click',function(){
      popupContainer.style.display='block'
     })
     document.getElementById('openEmailAccount').addEventListener('click',function(){
      window.open("mailto:petermambo577@gmail.com")
     })
     document.getElementById('memepalHelp').addEventListener('click',function(){
      window.open("mailto:memepalhelp@gmail.com")
     })
     document.getElementById('WIDHelp').addEventListener('click',function(){
      window.open("mailto:wideintelligentdata@gmail.com")
     })



     //COOKIE CONTAINER BEHAVIOR
     window.addEventListener('load', function(){
     const cookieBox=document.getElementById("cookieContainer");
     const buttons=document.querySelectorAll('.button');
      // this one checks if the user has accepted the cookie
     if(document.cookie.includes("cookieBy= PETERDEV; max-age=")){
      return;
     }
      
         cookieBox.classList.add("active");
      
     
      buttons.forEach((button)=>{
         button.addEventListener('click',()=>{
            cookieBox.classList.remove("active");
         //user has accepted cookie
         if(button.id==="acceptCookie"){
            document.cookie="cookieBy= PETERDEV; max-age="+60 * 60 * 24 * 30;
         }
         })
       })
    })


    //CHANGE THE COOKIE CONTENT ONCE THE USER CLICKS THE READMORE TEXT
     var textPolicy=document.getElementById('text-policy');
    document.getElementById('readMore').addEventListener('click',function(){
       textPolicy.textContent='These cookies are kept on your device when you visit our website.They are widely used to make websites to work more efficiently'
       
    })



    //DARK MODE AND LIGHT MODE CHANGER
   
     var backtheme=document.getElementById('theme');
     var themeContainer=document.getElementById('backgroundTheme');
     var lightmode=document.getElementById('lightMode');
     var darkmode=document.getElementById('darkMode');
     var originalmode=document.getElementById('defaultMode');
     var themes=document.querySelectorAll('.closeTheme')

     backtheme.addEventListener('click', function() {
      if (themeContainer.style.display === 'block') {
         themeContainer.style.display = 'none';
      }
       else {
         themeContainer.style.display = 'block';
      }
     });
     lightmode.addEventListener('click',function(){
      document.body.style.backgroundColor='white'
     });
     darkmode.addEventListener('click',function(){
      document.body.style.backgroundColor='black'
     });
     originalmode.addEventListener('click',function(){
      document.body.style.backgroundColor='#131720'
     })
     // FOR CLOSING THE THEME CONTAINER
      themes.forEach((closing)=>{
         closing.addEventListener('click',function(){
            setTimeout(()=>{
               themeContainer.style.display = 'none';
            },1000)
         })
      })



      //THIS SECTION IF THE USER  HAS NOT UPDATED HIS/HER CREDENTIALS OR
      // HAS NOT SIGNED UP THE USER WILL NOT BE ABLE TO ACCESS THE ADD MY LIST PROPERTY
     const addListBtn=document.getElementById('AddMyListBtn');
     const alertText=document.getElementById('alertListText');
     addListBtn.addEventListener('click',function(){
      alertText.style.display='flex'
      alertText.textContent='Please sign up to access this feature' 

       setTimeout(()=>{
         alertText.style.display='none'
       },2000)
     });

     //LIGHT MODE AND DARK MODE FOR SMALL

     var lightmodesmall=document.getElementById('lightModeSmall');
     var darkmodesmall=document.getElementById('darkModeSmall');

     lightmodesmall.addEventListener('click', function() {
      var currentBackgroundColor = document.body.style.backgroundColor;
      if (currentBackgroundColor === 'white' || currentBackgroundColor === '') {
          document.body.style.backgroundColor = '#131720';
      } else {
          document.body.style.backgroundColor = 'white';
      }
  });





    
     
     
     





     
      

     
   })