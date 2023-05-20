<?php
session_start();
$answer5 = $_POST['answer5'];
$_SESSION['answer5'] = $answer5;

$correct_answers = array('105x68', 'Кетчунез', 'Геральт', 'Ватикан', 'Гвинт');
$score = 0;

for ($i = 1; $i <= 5; $i++) {
    if (strcasecmp($_SESSION["answer{$i}"], $correct_answers[$i - 1]) == 0) {
        $score++;
    }
}

echo "Результат: $score/5";
session_destroy();
