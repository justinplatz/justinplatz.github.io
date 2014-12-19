<a href="about.php" id="logo">JustinPlatz</a>

<header>

<nav role='navigation'>
  <ul style="left:0">
    <li class="entypo-user"><a href="about.php">About</a></li>
    <li class="entypo-newspaper"><a href="contact.php">Resume</a></li>    
    <li class="entypo-suitcase"><a href="projects.php">Work</a></li>
    <li class="entypo-mail"><a href="form.php">Contact</a></li>
    <li class="entypo-record button red"><a href="#">Red</a></li>
    <li class="entypo-record button green"><a href="#">Green</a></li>
    <li class="entypo-record button blue"><a href="#">Blue</a></li>
  </ul>
</nav>

  </header>

  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script>

(function () {
    var body = $('body'), links = $('nav li').not('.button'), buttons = $('nav li.button'), current = $('#current'), savedColor;
    if (typeof Storage !== 'undefined') {
        savedColor = localStorage.color;
    }
    var colors = [
        '#ff3e39',
        '#00ce61',
        '#0074ce',
        '#404041'
    ];
    function setActive(index) {
        body.css('background', colors[index]);
        buttons.removeClass('active entypo-cd');
        buttons.eq(index).addClass('active entypo-cd');
        current.text(colors[index]);
        links.hover(function () {
            $(this).css('color', colors[index]);
        }, function () {
            $(this).css('color', colors[3]);
        });
    }
    if (savedColor) {
        setActive(savedColor);
        current.text(colors[savedColor]);
    } else {
        setActive(0);
        current.text(colors[0]);
    }
    buttons.on('click', function (e) {
        e.preventDefault();
        var index = $(this).index('li.button');
        setActive(index);
        localStorage.color = index;
    });
}());
//@ sourceURL=pen.js

  </script>