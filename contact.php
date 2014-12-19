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
  

<div class ="time" id="container">
<ol class="timeline">
  <li class="event rit">
    <p class="title">Student</p>
    <p class="dates">Sept 2012 - Present</p>
    <p class="company">Univeristy of Michigan</p>
    <ul class="description">
      <li>B.S. in Computer Science</li>
      <li>Minor in Entrepreneurship</li>
      <li>Expected Graduation: May 2016</li>
      <li>Activies: MHacks, Startup in TechArb, Lloyd Hall Scholars, Autism Speaks!</li>
    </ul>
  </li>
  <li class="event csh">
    <p class="title">Co-Founder</p>
    <p class="dates">September 2014 - Present</p>
    <p class="company">Whosat</p>
    <p class="description">
     • Founded product, assembled team, developed UI/UX and lead product development
    </p>
    <p class="description">
     • Programmed and designed website using HTML, CSS, JavaScript, jQuery & PHP
   </p>
  </li>
  <li class="event pdp">
    <p class="title">Creator, Developer</p>
    <p class="dates">September 2014 - Present</p>
    <p class="company">Yogurt</p>
    <p class="description">
      • Yogurt is a Chrome Extension which allows Michigan students to chat anonymously only amongst their classmates
    </p>
    <p class="description">
        • Worked with a team of four to develop app in 24 hours at Mhacks competition
    </p>

  </li>

  <li class='event prog'>
    <p class='title'>Product Developer</p>
    <p class='dates'>Summer 2014</p>
    <p class='company'>Legal Funding Central</p>
    <p class='description'>
      • Directed development team on creation of two products now featured on homepage
    </p>
    <p class='description'> 
      • Developed optimized and responsive web pages for mobile and tablet viewers
    </p>
    <p class='description'> 
      • Employed new SEO campaign which resulted in twice as many leads weekly
    </p>

  </li>
  <li class='event prog'>
    <p class='title'>Campus Brand Manager</p>
    <p class='dates'>Auguest 2014 - Present</p>
    <p class='company'>Yik Yak</p>
    <p class='description'>
      • Used innovative promotion techniques to grow local user base over 300% 
    </p>
    <p class='description'> 
      • Raised over $1,000 for charity event by getting more than 200 downloads    
    </p>
  </li>
</ol>

<script src="/assets/common/stopExecutionOnTimeout.js"></script>
<script>

var viewMoreButtons = document.querySelectorAll('.more');
var toggleVisibile = function (el) {
    if (el.style.fontSize === '0px' || el.style.fontSize === '')
        el.style.fontSize = '1rem';
    else
        el.style.fontSize = '0px';
};
var toggleText = function (el) {
    if (el.innerHTML === 'View Details')
        el.innerHTML = 'View Less';
    else
        el.innerHTML = 'View Details';
};
var viewMoreButtonClickHandler = function (currBtn) {
    var details = currBtn.previousSibling;
    while (details.nodeType !== 1) {
        if (window.CP.shouldStopExecution(1)) {
            break;
        }
        details = details.previousSibling;
    }
    toggleVisibile(details);
    toggleText(currBtn);
};
var moveDown = function (btnToMove) {
};
var addEventListenerPlus = function (i) {
    viewMoreButtons.item(i).addEventListener('click', function (e) {
        var nextI;
        viewMoreButtonClickHandler(this);
        if (i % 2 !== 0 && i + 2 < viewMoreButtons.length) {
            moveDown(viewMoreButtons.item(i + 2));
        }
    }, false);
};
for (var i = 0; i < viewMoreButtons.length; i++) {
    if (window.CP.shouldStopExecution(2)) {
        break;
    }
    addEventListenerPlus(i);
}
//@ sourceURL=pen.js

</script>
</div>

<?php 
  $pagename=basename($_SERVER['REQUEST_URI'],'.php');
 include("footer.php");
?>
</body>
</html>
