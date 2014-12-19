<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="icon" 
      type="image/png" 
      href="logo.png">
  <title>Justin Platz </title>  <link rel="stylesheet" href="css/general.css">
  <link href='http://fonts.googleapis.com/css?family=Cinzel+Decorative:400,900' rel='stylesheet' type='text/css'>
  <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
  <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
  <script src="js/main.js"></script>
</head>
<body>

<?php 
	$pagename=basename($_SERVER['REQUEST_URI'],'.php');
 include("header.php");
?>
  
<div id="container">
<div class="wrapper">
  <div class="wheel closed">
	<form action="proccess.php" method="post">
      <ul>
        <li>
          <label class="sent-label">Thank You!</label>
          <input placeholder="Hi there! Press Tab..." tabindex="1">
        </li>
        <li>
          <input placeholder="Who is this from? " tabindex="2" id="firstname" name="firstname">
        </li>
        <li>
          <input placeholder="Whats your email?" tabindex="3" id="usremail" name="usremail">
        </li>
        <li>
          <input placeholder="Is it super urgent?" tabindex="4" id="message" name="message">
        </li>
        <li>
          <input placeholder="Alright, what's up?" tabindex="5">
        </li>
        <li>
          <input placeholder="Do you want a hug?" tabindex="6">
        </li>
        <li>
          <input placeholder="press Enter to Send." tabindex="7">
        </li>
      </ul>
      <input type="submit">
    </form>
  </div>
</div>

</div>

<script>
function setWheelRotation(rotation) {
  $('.wheel').css('transform', 'rotate('+rotation+'deg)');
}

function onSubmit() {
  $('.wheel').addClass('sent');
  setWheelRotation(697.5);
  setTimeout(function() {
    $('.wheel').removeClass('sent');
    $('input').val('');
    firstInputField().focus();
  }, 5000);
  return false;
}

function firstInputField() {
  return $('.wheel li:first-child > input');
}

$('form').on('submit', function() {
  onSubmit();
});

$('input').on('focus', function() {
  var index = $(this).parent().index();
  var rotation = -22.5 - (45 * index);
  setWheelRotation(rotation);
});

var lastTabIndex = $('[tabindex]').length;

$('[tabindex]').on('keydown', function(event) {
  if (event.keyCode == 9) { // Tab pressed
    event.preventDefault();
    var currentElement = $(this).get(0);
    var curIndex = currentElement.tabIndex;
    if (event.shiftKey) {
      if (curIndex == 1) {
        return;
      } else {
        curIndex--;
      }
    } else {
      if (curIndex == lastTabIndex) {
        return;
      } else {
        curIndex++;
      }
    }
    
    $('[tabindex='+curIndex+']').focus();
  }
});

$(document).ready(function() {
  $('.wheel').removeClass('closed');
  firstInputField().focus();
});
</script>
<?php 
  $pagename=basename($_SERVER['REQUEST_URI'],'.php');
 include("footer.php");
?>

</body>
</html>
