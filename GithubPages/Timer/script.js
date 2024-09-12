function showTime() {  
  const now = new Date();
  time = now.toLocaleTimeString('en-US');
  document.getElementById("MyClockDisplay").textContent = time;
  setTimeout(showTime, 100);
}

var time = "";
showTime();

document.getElementById("tenMin").addEventListener("click", function() {
    startTimer(10);
});

document.getElementById("fifteenMin").addEventListener("click", function() {
    startTimer(15);
});

document.getElementById("twentyMin").addEventListener("click", function() {
    startTimer(20);
});

document.getElementById("twentyFiveMin").addEventListener("click", function() {
    startTimer(25);
});

document.getElementById("thirtyMin").addEventListener("click", function() {
    startTimer(30);
});

document.getElementById("oneHour").addEventListener("click", function() {
    startTimer(60);
});

document.getElementById("customTimer").addEventListener("click", function() {
    let customTime = prompt("Enter time in minutes:");
    if(customTime) {
        startTimer(parseInt(customTime));
    }
});

function startTimer(minutes) {
    const clockDisplay = document.getElementById("MyClockDisplay");

    // Calculate the target end time based on the current time and the specified minutes
    const targetTime = new Date().getTime() + minutes * 60 * 1000;

    // Apply transformations to the clock
    clockDisplay.classList.add('shrink', 'fade');

    // Create and show the timer display
    let timerElement = document.createElement("div");
    timerElement.id = "timerDisplay";
    document.body.appendChild(timerElement);

	setTimeout(() => {
        timerElement.classList.add('grow');
    }, 0);


    // Start the interval to update the timer every second
    const timerInterval = setInterval(() => {
        // Calculate the remaining time
        const currentTime = new Date().getTime();
        const remainingTime = targetTime - currentTime;

        // If time is up, stop the timer
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
			timerElement.textContent = "Time's Up!";
            
			
				setTimeout(() => {
					document.body.removeChild(timerElement);
					resetClockDisplay();
				}, 5000);

			
        } else {
            // Update the timer display with the formatted remaining time
            timerElement.textContent = formatTime(Math.floor(remainingTime / 1000));
        }
    }, 100);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function resetClockDisplay() {
    const clockDisplay = document.getElementById("MyClockDisplay");
    clockDisplay.classList.remove('shrink', 'fade');
}

