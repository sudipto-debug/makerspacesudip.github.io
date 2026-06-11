function scrollToSection() {
    document
    .getElementById("about")
    .scrollIntoView({
        behavior: "smooth"
    });
}

document
.getElementById("joinBtn")
.addEventListener("click", function() {

    alert(
        "Welcome to Makerspace Hub! We are excited to have you join our community of innovators."
    );

});
