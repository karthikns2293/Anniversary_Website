function openEnvelope() {
    document.getElementById("envelope-screen").style.display = "none";
    document.getElementById("invitation").style.display = "block";
  }
  
  function respond(answer) {
    const response = document.getElementById("response");
    const itinerary = document.getElementById("itinerary");
  
    response.innerText = "Yay!! Can't wait to see you tomorrow 💖💃";
  
    // Confetti burst
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });
  
    itinerary.style.display = "block";
  }
  