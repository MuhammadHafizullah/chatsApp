// sidebar links click event
let sideLink = document.querySelectorAll(".side-link");
let sideIcons = document.querySelectorAll(".ico");
for (let i = 0; i < sideLink.length; i++) {
    sideLink[i].addEventListener("click",(e)=>{

        // remove active class first
        sideIcons.forEach(e=>{
            e.classList.remove("main-clr");
        });
        sideLink.forEach(e=>{
            e.classList.remove("clicked");
        });

        // add active class on clicked link
        sideLink[i].classList.add("clicked");
        sideIcons[i].classList.add("main-clr");
    });
}




const dropBtn = document.getElementById("drop-down");
const chats = document.querySelector(".chats");

dropBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    chats.classList.toggle("hidden");
});





// chats

const chat = document.querySelectorAll(".chat"),
names = document.querySelectorAll(".name"),
image = document.querySelectorAll(".image"),
personName = document.querySelector(".person-name"),
personImg = document.querySelector(".person-img"),
messages = document.querySelector(".messages");




randomMgs = ["Hi! What going on.<br/> Can you meet me at 9'o clock",'Johny is going to lahore','Hi! can you help to arrage a party for duaghter\'s birthday',]


for (let i = 0; i < chat.length; i++) {
    chat[i].addEventListener("click",(e)=>{

        randNo = Math.floor(Math.random() * randomMgs.length);


        chat.forEach(e=> e.classList.remove("opened"))
        e.target.classList.add("opened");
        personName.innerHTML = names[i].innerHTML;
        personImg.innerHTML = image[i].innerHTML;   
            messages.innerHTML = `<div class="chat-img me-2">
                    ${image[i].innerHTML}
                </div>
                <div class="col">
                    <div class="message col-6 mb-2">
                    <p class="mb-0">${randomMgs[randNo]}.</p>
                    </div>
                    <span>Message sent 2:45PM</span>
             </div>`
    });   
}

