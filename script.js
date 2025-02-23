var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d'); // Получаем контекст 2D-рендеринга

var scene1Image = new Image();
scene1Image.src = 'assets/scene1.png'; // Путь к изображению

scene1Image.onload = function() {
    // Вызываем функцию рисования после загрузки изображения
    drawScene1();
};

function drawScene1() {
    // Рисуем изображение
    ctx.drawImage(scene1Image, 0, 0, canvas.width, canvas.height); // Рисуем на весь холст

    // Настройки текста
    ctx.font = '24px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center'; // Выравниваем текст по центру

    // Рисуем текст
    var text = "Элизабет нашла утешение в слове Божьем, но ее сердце было встревожено судьбой ее сына.";
    wrapText(ctx, text, canvas.width / 2, 500, 750, 30); // Функция для переноса текста
}

// Функция для переноса текста на новую строку
function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
}
