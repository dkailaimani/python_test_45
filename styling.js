<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Styling with JavaScript</title>
<style>
  #box {
    width: 200px;
    height: 200px;
    background-color: blue;
    color: white;
    text-align: center;
    line-height: 200px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  #box:hover {
    background-color: red;
  }
</style>
</head>
<body>

<div id="box" onclick="changeColor()">Click me to change color</div>

<script>
  function changeColor() {
    let box = document.getElementById("box");
    let randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
  }

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
</script>

</body>
</html>
