function responsiv() {

    var menuID = document.getElementById("menubar");
    if (menuID.className === "menybar") {
        menuID.className += " responsiv";
    } else {
        menuID.className = "menybar";
    }
}