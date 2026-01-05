function bookRoom() {
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let room = document.getElementById("room").value;

    if (name === "" || date === "" || room === "") {
        alert("Please fill all details");
        return false;
    }

    alert("Room Booked Successfully!\nName: " + name + "\nRoom: " + room);
    return true;
}
