< ?php
/* Проверяем существуют ли переменные, которые передала форма обратной связи. 
   Если не существуют, то мы их создаем.
   Если форма передала пустые значения мы их удаляем */
if (isset($_POST['fio'])) {$fio = $_POST['fio']; if ($fio == '') {unset($fio);}}
if (isset($_POST['email'])) {$email = $_POST['email']; if ($email == '') {unset($email);}}
if (isset($_POST['money'])) {$money = $_POST['money']; if ($money == '') {unset($money);}}
if (isset($_POST['pr'])){$pr = $_POST['pr']; if ($pr == '') {unset($pr);}}
if (isset($_POST['captcha'])){$captcha = $_POST['captcha'];}

 

/* Проверяем заполнены ли все поля */
if (isset($fio) && isset($email) && isset($money) && isset($pr))
{

/* Убираем все лишние пробелы, а также преобразуем все теги HTML в символы*/
$fio = htmlspecialchars(trim($fio));
$email = htmlspecialchars(trim($email));
$money = htmlspecialchars(trim($money));

/* Проверяем правильность ввода email-адреса */
if(!preg_match("/[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/i", $email))
{
echo "<p>Неправильный формат e-mail адреса!</p>";
}

/* Проверяем правильность ввода капчи */
  if ($captcha == $pr)
  {
/* Формируем сообщение */
$address = "borisov.alexandr.57@ya.ru";
$sub = "Сообщение с блога";
$mes = "Автор назвался: $fio \nОставил такой E-mail: $email \n Текст сообщения: $money";

/* Отправка сообщения */
$verify = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
      if ($verify == 'true')
    
     {
       echo "<body bgcolor='609df9'>
<div style='margin-top: 30px'><table border='1' width='450' align='center' cellpadding='20' cellspacing='6' bgcolor='white'>
<tr>
<td>
<div style='margin'><div align='center'>Ваше сообщение успешно отправлено! <p>Вернуться на <a href='http://http://Alexandr57.github.io/MDK02/Prakt1/form.html'><font size='+1'>www.Alexandr57.github.io/MDK02/Prakt1/form.html</font></a></div>
<img src='http://Alexandr57.github.io/MDK02/Prakt1/img/message.jpg'>
<p><div align='center'>Я найду его, прочитаю и отвечу вам!</div>
<p><div align='right'><i><b>C уважением, Ваши Ф.И.О.</b></i></div>
</tr>
</td>
</table></div>";
      }
      else 
	  {
	  echo "Сообщение не отправлено!";
	  }
  }
  else
  {
  echo "Вы не правильно ввели сумму чисел с картинки";
  }
 

}
else
{
echo "Вы заполнили не все поля!";
}
?>
