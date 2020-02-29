var video;
var rate = 1;
var mutestatus = false;


function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate = rate *= 0.8;
	console.log("Speed is "+ rate);
} 

function increaseSpeed() {
  video.playbackRate = rate *= 1.25;
  console.log("Speed is "+ rate);
} 


  
function mute() { 
	if (mutestatus == false) {
		document.getElementById("mute").innerHTML = "Unmute";
		video.muted = true;
		console.log("Muted");
		mutestatus = true;
	}

	else {
		document.getElementById("mute").innerHTML = "Mute";
		video.muted = false;
		console.log("Unmuted");
		mutestatus = false;
	}
}


function changeVolume() {
	var volume = document.getElementById("volumeSlider").value;
	var corrected = volume/100;
	video.volume = corrected;
    console.log("The volume is at " + video.volume*100);
}
 
function gray() { 
	video.classList.toggle("grayscale");
	console.log("In grayscale");
}
  
function color() {
	video.classList.toggle("grayscale");
    console.log("In color");
}

function skipAhead() {
	console.log("Current location is "+ video.currentTime);
	if (video.currentTime + 60 > video.duration) {
		video.currentTime = 0;
		rate = 1;
		video.playbackRate = 1;
	}

	else {
		video.currentTime += 60;
	}

} 