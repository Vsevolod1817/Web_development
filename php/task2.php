<?php
session_start();
$answer1 = $_POST['answer1'];
$_SESSION['answer1'] = $answer1;
?>

<!DOCTYPE html>
<html>
<head>
    <title>Task 2</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<h1>Вопрос 2:</h1>
<p>Кетчуп + майонез?</p>
<form action="task3.php" method="post">
    <input type="text" name="answer2" placeholder="Введите ваш ответ">
    <input type="submit" value="Отправить">
</form>
</body>
</html>
