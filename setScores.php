<?php
	
  session_start();
  
  //New Score
  $nameNew = $_GET["nameNew"];
  $scoreNew = $_SESSION['score'];
  session_destroy();
  
  //Old Scores	
  $employees = array();
  $rankCount = 1;
  
  
  
  $xmlDoc = new DOMDocument();
  $xmlDoc->load("top.xml");
  
  $x=$xmlDoc->getElementsByTagName('score');
  
  	for ($i=0; $i<=9; $i++){
		$employees [] = array(
		  'name' => $x->item($i)->childNodes->item(1)->nodeValue,
		  'score' => $x->item($i)->childNodes->item(3)->nodeValue,
		  'rank' => ($i + 1)
		  );
	}  
  $doc = new DOMDocument();
  $doc->formatOutput = true;
  
  $r = $doc->createElement( "scores" );
  $doc->appendChild( $r );
  
  foreach( $employees as $employee )
  {

  if(floor($scoreNew) > floor($employee['score'])){
	  $bNew = $doc->createElement( "score" );
	  
	  $namenew = $doc->createElement( "name" );
	  $namenew->appendChild(
	  $doc->createTextNode( $nameNew )
	  );
	  $bNew->appendChild( $namenew );
	  
	  $ageNew = $doc->createElement( "points" );
	  $ageNew->appendChild(
	  $doc->createTextNode( $scoreNew )
	  );
	  $bNew->appendChild( $ageNew );
	 
	  $attrNew = $doc->createAttribute( "place" );
	  $bNew->appendChild($attrNew);
	  $bNew->setAttribute("place", $rankCount);
	  
	  $r->appendChild( $bNew );
	  $rankCount++;
	  $scoreNew = -1;
	  array_splice($employees, -1, 1);
	  
  }
  $b = $doc->createElement( "score" );
  
  $name = $doc->createElement( "name" );
  $name->appendChild(
  $doc->createTextNode( $employee['name'] )
  );
  $b->appendChild( $name );
  
  $age = $doc->createElement( "points" );
  $age->appendChild(
  $doc->createTextNode( $employee['score'] )
  );
  $b->appendChild( $age );
 
  $attr = $doc->createAttribute( "place" );
  $b->appendChild($attr);
  $b->setAttribute("place", $rankCount);
  
  $r->appendChild( $b );
  $rankCount++;
  }
  
  echo $doc->saveXML();
  $doc->save("top.xml")
  ?> 