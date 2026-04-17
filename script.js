const lyrics = [
  "Dear Lord, when I get to heaven",
  "Please let me bring my MAN",
  "When he comes, tell me that you'll let him in",
  "Father tell me if you can",
  "All that grace",
  "All that body",
  "All that face",
  "Makes me want to party",
  "He is my SUN"
  "He makes me shine",
  "like Diamonds",
];

let index = 0;

const container = document.getElementById("lyrics");

function waveText(text){
  container.innerText = text;
}

function fadeOut(callback){
  container.style.transition = "opacity 1s ease";
  container.style.opacity = 0;

  setTimeout(() => {
    callback();
    container.style.opacity = 1;
  }, 1000);
}

function showLyrics(){
  if(index < lyrics.length){
    fadeOut(() => {
      waveText(lyrics[index]);
    });

    index++;
    setTimeout(showLyrics, 4500);
  } else {
    showEnding();
  }
}

function showEnding(){
  fadeOut(() => {
    container.innerText = "hope u r entertained";

    container.style.fontSize = "clamp(1.2rem, 4vw, 2rem)";
    container.style.letterSpacing = "3px";

    container.style.textShadow =
      "0 0 8px rgba(255,255,255,0.6), " +
      "0 0 20px rgba(230,230,250,0.4), " +
      "0 0 30px rgba(78,167,233,0.3)";
  });
}

document.getElementById("startBtn").onclick = () => {
  document.getElementById("overlay").style.display = "none";

  const iframe = document.getElementById("music");
  iframe.style.display = "block";

  setTimeout(showLyrics, 1000);
};
