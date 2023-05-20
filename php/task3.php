<?php
session_start();
$answer2 = $_POST['answer2'];
$_SESSION['answer2'] = $answer2;
?>

<!DOCTYPE html>
<html>
<head>
    <title>Task 3</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<h1>Вопрос 3:</h1>
<p>Главный герой серии игр Ведьмак ?</p>
<form action="task4.php" method="post">
    <input type="text" name="answer3" placeholder="Введите ваш ответ">
    <input type="submit" value="Отправить">
</form>
</body>
</html>
