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

<div class="circle"></div>



<p>I'm a Computer Scientist from New York with an eye for opportunity. I am a seeker of entrepeneurial ventures with the love of the logic and structure of coding. My eye for design not only allows me to build beautiful responsive websites, but also allows me to be flexible and adaptable. When I'm not pushing pixels, I'm attending classes at the University of Michigan or purveying new music.</p>

<p>Specialties: C++; HTML5; CSS3; PHP; jQuery; JavaScript; Product Development; Lean Startup; Wireframes; Design Briefs; SEO; Web Development; Web Hosting;</p>

     
<div class="clear"></div>
</div>
<?php 
  $pagename=basename($_SERVER['REQUEST_URI'],'.php');
 include("footer.php");
?>

</body>
</html>
