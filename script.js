const lyrics = [
  "Dear Lord, when I get to heaven",
  "Please Let Me Bring My MAN",
  "When he comes, tell me that you'll let him in",
  "Father tell me if you can",
];

let index = 0;

const container = document.getElementById("lyrics");

function waveText(text){
  const container = document.getElementById("lyrics");
  container.innerHTML = "";
  container.classList.add("wave");

  text.split("").forEach((char, i)=> {
    const span = document.createElement("span");
    span.innerText = char;
    span.style.animationDelay = i*0.05 + "s";
    container.appendChild(span);
  });
}

function fadeOut(callback){
  container.style.transition = "opacity 1s ease";
  container.style.opacity= 0;

  setTimeout(() => {
    callback();
    container.style.opacity = 1;
  }, 1000);
}

function showLyrics(){
  if(index < lyrics.length){
    waveText(lyrics[index]);
    index++;
    setTimeout(showLyrics, 4000);
  }
}

document.getElementById("startBtn").onclick = () => {
  document.getElementById("overlay").style.display = "none";
  const iframe = document.getElementById("music");
  iframe.style.display = "block";

  showLyrics();
};
