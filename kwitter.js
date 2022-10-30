function Sumb() {
    user = document.getElementById("amos").value;
    console.log(user)
    localStorage.setItem(user, "Userq");
    window.location = "kwitter_room.html";

}