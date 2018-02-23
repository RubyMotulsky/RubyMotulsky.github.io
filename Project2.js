var bodySnake = function(x, y) {
        //This is the single square
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        //This is the border of the square
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }

 var drawSnake = function() {
        //Initially the body of the snake will be formed by 5 squares.
        var length = 4;
        snake = [];
        
        //Using a for loop we push the 5 elements inside the array(squares).
        //Every element will have x = 0 and the y will take the value of the index.
        for (var i = length; i>=0; i--) {
        snake.push({x:i, y:0});
          }  
        }

var snakeX = snake[0].x;
var snakeY = snake[0].y;

    if(direction == 'right') { 
      snakeX++; 
    } else if (direction == 'left') { 
      snakeX--; 
    } else if (direction == 'up') { 
      snakeY--; 
    } else if (direction == 'down') { 
      snakeY++; }