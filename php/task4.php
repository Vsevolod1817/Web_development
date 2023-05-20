<?php
session_start();
$answer3 = $_POST['answer3'];
$_SESSION['answer3'] = $answer3;
?>

<!DOCTYPE html>
<html>
<head>
    <title>Task 4</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<h1>Вопрос 4:</h1>
<p>Самое маленькое государство?</p>
<form action="task5.php" method="post">
    <input type="text" name="answer4" placeholder="Введите ваш ответ">
    <input type="submit" value="Отправить">
</form>
</body>
</html>
