
# Lesson 1

## V2
- Create and html file called `index.html`. Inside, add this line

```html
<canvas id="drawing-area" width="500" height="500"></canvas>
```  

- Create a script called `script.js`. Then add it to the html file with this line:

```html
<script src="script.js"></script>
```

- In your script file, grab the canvas element and your drawing context with these lines

```js
var canvas = document.getElementById('drawing-area');
var ctx = canvas.getContext('2d');
```

- WEDO fill red rectangle

```js
ctx.fillstyle = 'red';
ctx.fillrect(10, 20, 25, 50);
```

- YOUDO fill a green rectangle

```js
ctx.fillStyle = 'green';
ctx.fillRect(60, 10, 100, 50);
```

- WEDO draw rectangle with border only

```js
ctx.strokeStyle = 'blue';
ctx.strokeRect(100, 100, 50, 50);
```
- YOUDO draw one with a purple border

```js
ctx.strokeStyle = 'purple';
ctx.strokeRect(25, 100, 50, 50);
```

- WEDO set line width

```js
ctx.strokeStyle = 'blue';
ctx.lineWidth = 5;
ctx.strokeRect(100, 100, 50, 50);
```

- YOUDO try it!

```js
ctx.strokeStyle = 'purple';
ctx.lineWidth = 15;
ctx.strokeRect(25, 100, 50, 50);
```

- WEDO lets try a line

```js
ctx.moveTo(50, 50);
ctx.lineTo(50, 100)
```

## V1


- draw a rectangle

```js
ctx.rect(10, 10, 50, 50);
```

- add color

```js
ctx.fillstyle = 'red';
```

- apply the color

```js
ctx.fill();
```

- lets try it with green

```js
ctx.rect(20, 20, 60, 60);
ctx.fillstyle = 'green';
ctx.fill();
```

- This affected our red square also! Lets try again. Clear the canvas with this line:

```js
ctx.clearRect(0, 0, canvas.width, canvas.height);
```
