var names = ["ThangaPulla", "Sweetie", "Dear", "Angel", "Pookie", "Darling", "SweetHeart", "Honey!!!", "Treasure", "Thangoooo", "Azhaguuuu!!!!!!"];
var nameIndex = 0;

function updateCountdown() {
    var countdownElement = document.getElementById("countdown");
    var messageElement = document.getElementById("birthday-message");
    var eventDate = new Date("April 9, 2025 12:00:00").getTime();
    var now = new Date().getTime();
    var timeLeft = eventDate - now;

    if (timeLeft > 0) {
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        countdownElement.innerHTML = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
    } else {
        countdownElement.style.display = "none"; // Hide countdown
        messageElement.style.display = "block"; // Show birthday message
        updateName(); // Call function to update name every second
    }
}

function updateName() {
    var messageElement = document.getElementById("birthday-message");
    var changingNameElement = document.getElementById("changing-name");
    
    messageElement.innerHTML = `🎂 Happy Birthday ${names[nameIndex]} 🎉`;
    changingNameElement.innerHTML = names[nameIndex];
    
    nameIndex = (nameIndex + 1) % names.length; // Rotate names
    setTimeout(updateName, 1000); // Change name every second
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to avoid delay
updateName(); // Start name change immediately

