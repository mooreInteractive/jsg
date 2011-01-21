<?php
session_start();
// store session data
if (!isset($_SESSION['score']))
{
    session_regenerate_id();
    $_SESSION['score'] = 0;
}
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Javascript Game Time</title>
<link rel="stylesheet" type="text/css" href="style.css" />
<script language="javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
<script language="javascript" src="ajax.js"></script>
<script language="javascript" src="rock.js"></script>
<script language="javascript" src="ship.js"></script>
<script type="text/javascript">
 function restart() {
	window.location = window.location;	 
 }
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-15366707-1']);
  _gaq.push(['_setDomainName', '.moore-interactive.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>

<body>
<div id="playField"><img id="ship" src="ship.png"></div>
<div id="hud">
    <div id="topTen"><h2>High Scores</h2></div>
    <div id="guide">
      <strong>How to play:</strong><br />
        <div class="hide">
        1. Hit a rock for a point and 3 ammo.<br />
        2. Get hit by a rock and die.<br />
        3. If a rock passes you it respawns with a friend.<br /><br />
        <strong>Movement:</strong><br />
        Left Arrow: Move Left<br />
        Right Arrow: Move Right<br />
        <span class="Red">A</span>: Fire        </div>
    </div>
    <div id="score">Score: 0</div>
    <div id="ammo">Ammo: 100</div>
</div>
<div id="overview">
	You scored <span id="fScore">0</span> pts.<br /><br />
    <input type="text" name="pName" maxlength="20" value="...and you are?"><Br /><br />
    <input type="button" value="Save Score & Restart" onClick="javascript: ajaxPostFunction();"> <input type="button" value="Just Restart" name="dSave" onClick="javascript: restart();">	
</div>
</body>
</html>
