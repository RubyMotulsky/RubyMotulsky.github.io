
game.js
var game = { 
    canvas : document.createElement("canvas"), 
    start : function(){ 
        this.canvas.width = 1280; 
        this.canvas.height = 720; 
        // context lets us draw on the canvas 
        this.ctx = this.canvas.getContext("2d"); 
        document.body.appendChild(this.canvas); 
        // Creates interval, calls update() every 1 millisecond 
        this.interval = setInterval(update, 1); 
    }, 
    clear : function(){ 
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
        this.ctx.fillStyle = "black"; 
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); 
    } 
}; 
 
game.start(); 
 
function Character(x, y, width, height, color){ 
    this.x = x; 
    this.y = y; 
    this.width = width; 
    this.height = height; 
    this.color = color; 
 
    this.update = function(){ 
        game.ctx.fillStyle = this.color; 
        game.ctx.fillRect(this.x, this.y, this.width, this.height); 
    } 
} 
 
function Bullet(x, y, color, vy){ 
    this.x = x; 
    this.y = y; 
    this.width = 10; 
    this.height = 10; 
    this.color = color; 
    this.vy = vy; 
 
    this.update = function(){ 
        this.y += this.vy; 
        game.ctx.fillStyle = color; 
        game.ctx.fillRect(this.x, this.y, this.width, this.height); 
    } 
} 
 
function Enemy(img, x, y, vx, vy){ 
    this.img = document.createElement("img"); 
    this.img.setAttribute("src", img); 
    this.x = x; 
    this.y = y; 
    this.vx = vx; 
    this.vy = vy; 
    this.update = function(){ 
        this.x += this.vx; 
        this.y += this.vy; 
        game.ctx.drawImage(this.img, this.x, this.y); 
    } 
} 
 
var direction = 0; 
 
 
 
var aup = true; 
var dup = true; 
 
var shoot = false; 
var release = true; 
 
window.addEventListener("keydown", function(event){ 
    // A = 65; D = 68; SPACE BAR = 32; 
    if (event.keyCode === 65 && aup){ 
        direction -= 1; 
        aup = false; 
    } 
 
    if (event.keyCode === 68 && dup){ 
        direction += 1; 
        dup = false; 
    } 
 
    if (event.keyCode === 32 && release){ 
        shoot = true; 
        release = false; 
    } 
}); 
 
window.addEventListener("keyup", function(event){ 
    // A = 65; D = 68; SPACE BAR = 32; 
    if (event.keyCode === 65){ 
        direction += 1; 
        aup = true; 
    } 
 
    if (event.keyCode === 68){ 
        direction -= 1; 
        dup = true; 
    } 
 
    if (event.keyCode === 32){ 
        release = true; 
    } 
}); 
 
player = new Character(game.canvas.width/2 -25, game.canvas.height - 100, 50, 10, "red"); 
 
var bullets = []; 
var enemies = []; 
 
var num_en = 0; 
 
var score = 0; 
var health = 10; 
 
function update(){ 
    game.clear(); 
    player.x += direction * 2; 
 
    if(player.x > game.canvas.width + player.width){ 
        player.x = - player.width; 
    } 
    if(player.x < -player.width){ 
        player.x = game.canvas.width + player.width; 
    } 
    player.update(); 
 
    if(shoot){ 
        shoot = false; 
        bullets.push(new Bullet(player.x + player.width/2 - 5, player.y, "white", -2)); 
    } 
 
    for(var ib = 0; ib < bullets.length; ib++){ 
        var bullet = bullets[ib]; 
        if(bullet.y < - bullet.height){ 
            bullets.splice(ib, 1); 
        } 
        bullet.update(); 
    } 
 
    if(enemies.length === 0){ 
        num_en += 0.5; 
        for(var i = 0; i< num_en; i++){ 
            enemies.push(new Enemy("enemy.png", Math.random() * (1280 - 74), -i * (74*2), 0, num_en / 10)); 
        } 
    } 
 
    for(var ie = 0; ie < enemies.length; ie++){ 
        var enemy = enemies[ie]; 
 
        for(var a =0; a< bullets.length; a++){ 
            var b = bullets[a]; 
            if(!(b.x < enemy.x || b.y < enemy.y || b.x + b.width > enemy.x + 74 || b.y + b.height > enemy.y + 68)){ 
                score++; 
                enemies.splice(ie, 1); 
                bullets.splice(a, 1); 
            } 
        } 
        if(enemy.y > player.y){ 
            health--; // :( 
            enemies.splice(ie, 1); 
        } 
        enemy.update(); 
    } 
 
    game.ctx.font = "30px VT323, monospace"; 
    game.ctx.fillStyle = "white"; 
    game.ctx.fillText("Score: " + score + " Health: " + health, 10, 20); 
 
    if( health <= 0 ){ 
        clearInterval(game.interval); 
        game.ctx.fillStyle = "red"; 
        game.ctx.font = "50px VT323, monospace"; 
        game.ctx.fillText("GAME OVER", 550, 330); 
    } 
 
}