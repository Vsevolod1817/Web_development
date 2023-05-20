<?php
session_start();
$answer4 = $_POST['answer4'];
$_SESSION['answer4'] = $answer4;
?>

    <!DOCTYPE html>
    <html>
    <head>
        <title>Task 5</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
    </head>
    <body>
    <h1>Вопрос 5:</h1>
    <p>Самая лучшая настольная игра в мире?</p>
    <form action="result.php" method="post">
        <input type="text" name="answer5" placeholder="Введите ваш ответ">
        <input type="submit" value="Отправить">
    </form>
    </body>
    </html>
