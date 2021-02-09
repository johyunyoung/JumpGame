const player = document.getElementById("player");
const rock = document.getElementById("rock");

function jump() {
    if(player.classList.contains("jump")){
        return;
    }
    player.classList.add("jump");
    setTimeout(function(){
        player.classList.remove("jump");
    }, 500);
}

function checkDead() {
    const playerTop = 
    parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    const rockLeft = 
    parseInt(window.getComputedStyle(rock).getPropertyValue("left"));
    if(rockLeft < 50 && playerTop >= 250){
        rock.style.display = "none";
        rock.style.animation = "none";
        alert("u lose");
    }
}

function init() {
    document.addEventListener("keydown", jump);
    setInterval(checkDead, 10);
}

init();