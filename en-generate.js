var imgs=[
  "МЕМ/1test-mem-img-en.jpg",
  "МЕМ/41test-mem-img.jpg",
  "МЕМ/42test-mem-img.jpg",
  "МЕМ/4test-mem-img.jpg",
  "МЕМ/43test-mem-img.jpg",
  "МЕМ/44test-mem-img.jpg",
  "МЕМ/7test-mem-img.jpg",
  "МЕМ/8test-mem-img.jpg",
  "МЕМ/9test-mem-img.jpg",
  "МЕМ/46test-mem-img-en.jpg",
  "МЕМ/11test-mem-img.jpg",
  "МЕМ/47test-mem-img.jpg",
  "МЕМ/48test-mem-img.jpg",
  "МЕМ/50test-mem-img.jpg",
  "МЕМ/15test-mem-img.jpg",
  "МЕМ/16test-mem-img.jpg",
  "МЕМ/51test-mem-img.jpg",
  "МЕМ/52test-mem-img.jpg",
  "МЕМ/53test-mem-img.jpg",
  "МЕМ/54test-mem-img.jpg",
  "МЕМ/21test-mem-img-en.jpg",

  "МЕМ/55test-mem-img-en.jpg",
  "МЕМ/23test-mem-img.jpg",
  "МЕМ/24test-mem-img.jpg",
  "МЕМ/25test-mem-img.jpg",
  "МЕМ/56test-mem-img.jpg",
  "МЕМ/57test-mem-img.jpg",
  "МЕМ/28test-mem-img.jpg",
  "МЕМ/29test-mem-img.jpg",
  "МЕМ/30test-mem-img.jpg",
  "МЕМ/31test-mem-img.jpg",
  "МЕМ/32test-mem-img-en.jpg",
  "МЕМ/33test-mem-img.jpg",
  "МЕМ/49test-mem-img.jpg",
  "МЕМ/35test-mem-img.jpg",
  "МЕМ/39test-mem-img-en.jpg",
]
  
var texts=[
  "When mom asks what do <br>you eat in the dorm?",
  "When I restarted the code 15 times <br>and it still didn`t work:",
  "When you decided to try a new recipe, <br>but instead of a finished dish, <br>you got a culinary disaster",
  "The feeling when you accidentally like someone <br>else`s photo on Instagram from 2012",
  "Men say we don`t get depressed. <br>And then they create it:",
  "When he did not read the terms of <br>reference and the final result did not <br>coincide with the customer`s expectations",
  "When I got up to the first pairs:",
  "Someone: How are you doing? <br> I'm with a lot of debts and unwillingness to study:",
  "Awaken your inner beast! <br>My inner beast:",
  "Me: Why doesn`t anyone meet me? <br>I`m also at all the events:",
  "Nobody: <br>Absolutely nobody: <br>Me at random:",
  "Teens: schools don't let us get enough sleep! Also teenagers at 3 a.m:",
  "My cat every time <br>I open the refrigerator:",
  "When you've paid your rent, <br>and now you have a place <br>to starve:",
  "My peers are: getting married, <br>building a career, having kids, <br>building a house <br>I am:",
  "When the report is not according to the STC",
  "When the instructor decided to see <br>how our coursework was progressing",
  "When I saw the couples in IKIT <br>on the fifth floor",
  "When the tasks at the end of the sprint <br>didn't burn out",
  "Me: Mom, let`s get a pet <br>Mom: We have a pet at home <br>A pet at home:",

  "When you're on a diet, but you see pizza on the table",
  "When your girlfriend says <br>that she'll do all the work on a project, <br>and then disappears",
  "When you think you've done all the work for the day, <br>and then you remember the term paper",
  "When you wake up in the morning and realize <br>you forgot to set your alarm clock",
  "When you wake up thinking, <br>“Today's gonna be different,” <br>and you end up lying on the couch all day",
  "When you're done watching your favorite show <br>and you don't know what to watch next",
  "When you decide to see a new movie, <br>and it turns out to be a total disappointment",
  "When you changed your account password, <br>but forgot where you put it",
  "When you decide to start a new hobby, but realize <br>that there is neither time nor energy",
  "When you're trying to humor a friend after a bad day, <br>but the words don't come to mind",
  "When you think you still have a whole day before <br>deadline and then suddenly realize, deadline was yesterday",
  "When you find out in the morning that you forgot to plug <br>the phone charger into the outlet",
  "When you're trying to take selfies, <br>but every photo turns out to be a failure",
  "When you open a long-awaited email and it turns out <br>that it's just spam"
],
  
image=document.getElementById('image'),
button=document.getElementById('button');

var mainElement = document.getElementById("text");

button.onclick=function(){
  image.src=imgs[Math.floor(Math.random()*imgs.length)];
  mainElement.innerHTML = text.src=texts[Math.floor(Math.random()*texts.length)];

  document.getElementById('previewImage').innerHTML = '';
  document.getElementById("buttonLoad").disabled = false; 
}
