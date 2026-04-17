const lyrics - [
  "Dear Lord, when I get to heaven"
  "Please Let Me Bring My MAN"
  "When he comes, tell me that you'll let him in"
  "Father tell me if you can"
];

let index = 0;

function waveText(text){
  const container = document.getElementById("lyrics");
  container.innerHTML = "";
  container.classList.add("wave");

  text.split("").forEach((char, i))=> {
    const span = document.createElement("span");
    span.innerText = char;
    span.stylen.animationDelay = i*0.05 + "s";
    container.appendChild(span);
  };
}

function showLyrics(){
  if(index < lyrics.length){
    waveText(lyric[index]);
    index++;
    setTimeout(showLyrics, 4000);
  }
}

document.getElementById("StartBtn").onclick () => {
  document.getElementById("overlay").style.display = "none";
  const iframe = document.getElementById("music");
  iframe.style.display = "block";

  showLyrics();
};
