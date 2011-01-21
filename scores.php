<?php

$xmlDoc = new DOMDocument();
$xmlDoc->load("top.xml");

$x=$xmlDoc->getElementsByTagName('score');
echo '<h2>High Scores</h2>';
echo '<table class="scoreCard" cellpadding="5" cellspacing="0" border="0">';
for ($i=0; $i<=$x->length-1; $i++){
echo '<tr><td>'.($i + 1).'</td>';
echo '<td>'.$x->item($i)->childNodes->item(1)->nodeValue.'</td>';
echo '<td>'.$x->item($i)->childNodes->item(3)->nodeValue.'</td></tr>';
}
echo '</table>';
?>
