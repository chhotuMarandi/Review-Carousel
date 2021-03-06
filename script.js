//people profile data 
const review = [
    {
        id: 1,
        name: "jeneliya oslen",
        job: "software developer",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        text: "he whole idea of working in a learning atmosphere (since it is a university), makes you feel young and gives the opportunity to interact and network with bright minds (Professors/Researchers). Work environment is amazing and I have a very supportive team",
    },
    {
        id: 2,
        name: "mark jones",
        job: "web developer",
        img: "https://images.unsplash.com/photo-1504199367641-aba8151af406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        text: "1. Scope of skill improvement - A huge scope of developing own skill as there are many different types of projects. 2. Good environment - Very good and friendly working environment. 3. Co-operative seniors - Seniors are very helpful and supportive. 4.",
    },
    {
        id: 3,
        name: "yuan lee",
        job: "web developer",
        img: "https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60s",
        text: "I have been working at Toppscholars for almost a year and to be honest this is a very good organization. I was unsure about working here before considering that it’s far away from my home but it’s worth it. The colleagues are very helpful and easy to talk to.",
    },
    {
        id: 4,
        name: "natasha carel",
        job: "web developer",
        img: "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
        text: "Work from home is so nice to have, this is company is highly professional. Gives lots of benefits and opportunity to grow to its employees. I have recetnly started in this company and i think i will have a good and long career ahead.The colleagues are very helpful"
    }
    
    
];

//select itemes

const img = document.getElementById("person-img");
const name = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

//select buttons

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const random = document.getElementById("random");

//set starting item

let currentItem = 0;

//load intial item

window.addEventListener("DOMContentLoaded", function() {
    showPerson();
})

//show person based on item

function showPerson() {
    const item = review[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


// show next person after click button

nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > review.length -1) {
        currentItem = 0;
   }
    showPerson(currentItem);
    
})

//show prev person after click button
        
prevBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = review.length -1;
    }
    showPerson(currentItem); 
})

//random button 

random.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * review.length);
    showPerson();
})