let menu = document.querySelector ('.menu-icon');
let navbar = document.querySelector ('.navbar');

menu.onclick = () => {
    navbar.classList.toggle(".open-menu")
    menu.classList.toggle("move")
};
window.onscroll = () => {
    navbar.classList.remove(".open-menu")
    menu.classList.remove("move")
}

//email js

function validate () {
    let name = document.querySelector (".name");
    let email = document.querySelector (".email");
    let msg = document.querySelector (".message");
    let sendBtn = document.querySelector (".send-btn");
    
    sendBtn.addEventListener ('click', (e) => {
        e.preventDefault();
        if (name.value == ""|| email.value == "" || msg.value == "") {
            emptyerror ();
        } else {
            sendmail (name.value, email.value, msg.value);
            success ();
        }
    });
}

validate();

function sendmail (name,email,msg) {
    emailjs.send("service_fd604ws","template_rot5lfn",{
        from_name: email,
        name: name,
        message: msg,
        });
}

function emptyerror () {
    swal({
        title: "Um, sorry....",
        text: "Fields canot be empty!",
        icon: "error",
        
      });
}


function success () {
    swal({
        title: "Email sent successfully",
        text: "I will refer to you later",
        icon: "Success",
        
      });
}

//header background change on scroll
document.addEventListener("DOMContentLoaded", () => {
    let header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        header.classList.toggle("header-active", window.scrollY > 0)
        });
    });