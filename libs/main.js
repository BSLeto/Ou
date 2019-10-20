function myFunction() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

const live = document.querySelector('.score'),
    start = document.querySelector('.startmenu'),
    gameArea = document.querySelector('.gameArea'),
    player = document.createElement('div');
player.classList.add('player');

document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};

const setting = {
    start: false,
    live : 100,
    meat: 0,
    speed: 4,
    speedForce: 10,
};

function getQuantityElements(heightElement){
    return document.documentElement.clientHeight / heightElement + 1;
}
function startGame() {
    start.classList.add('hide');
    gameArea.innerHTML = '';

    setting.score = 0;
    setting.start = true;
    gameArea.appendChild(player);
    player.style.left = gameArea.offsetWidth/2 - player.offsetWidth/2;
    player.style.bottom = '10px';
    player.style.top = 'auto';
    setting.x = player.offsetLeft;
    setting.y = player.offsetTop;
    requestAnimationFrame(playGame);

}

function playGame() {
    if (setting.start){
        if(keys.ArrowLeft & setting.x > 0){
            setting.x -= setting.speed;
            player.style.transform = 'scale(-1, 1)';
        }
        if(keys.ArrowRight & setting.x < (gameArea.offsetWidth - player.offsetWidth)){
            setting.x += setting.speed;
            player.style.transform = null;
        }
        if(keys.ArrowDown& setting.y < (gameArea.offsetHeight - player.offsetHeight)){
            setting.y += setting.speedForce;
        }
        if(keys.ArrowUp & setting.y>0){
            setting.y -= setting.speedForce;
        }

        player.style.left = setting.x + 'px';
        player.style.top = setting.y + 'px';
        requestAnimationFrame(playGame);
    }

}
function startRun(event){
    event.preventDefault();
    if (keys.hasOwnProperty(event.key)){
        keys[event.key] = true;
    }
}

function stopRun(event){
    event.preventDefault();
    if (keys.hasOwnProperty(event.key)){
        keys[event.key] = false;
    }

}