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
<div class="case-study-gallery" >
<div class="case-study study1">
  <div class="case-study__overlay">
  	<h2 class="case-study__title">Whosat</h2>
    <a class="case-study__link" href="http://www.getwhosat.com">View Website</a>
  </div>
</div>
  
<div class="case-study study2">
  <div class="case-study__overlay">
  	<h2 class="case-study__title">Yogurt</h2>
    <a class="case-study__link" href="http://www.getyogurt.me">View Website</a>
  </div>
</div>
  
<div class="case-study study3">
  <div class="case-study__overlay">
  	<h2 class="case-study__title">Legal Funding Central</h2>
    <a class="case-study__link" href="https://legalfundingcentral.com/">View Website</a>
  </div>
</div>
  
<div class="case-study study4">
  <div class="case-study__overlay">
  	<h2 class="case-study__title">Yik Yak</h2>
    <a class="case-study__link" href="http://www.yikyakapp.com/">View Website</a>
  </div>
</div>

</div>

<?php 
  $pagename=basename($_SERVER['REQUEST_URI'],'.php');
 include("footer1.php");
?>
</body>
</html>
