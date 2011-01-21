// JavaScript Document


window.onload = function() {
   ajaxFunction();
   document.onkeydown = keyDown;
   document.onkeyup = keyUp;
   var ship = document.getElementById('ship');
   ship.style.left = window.innerWidth/2;
   ship.style.top = window.innerHeight - (window.innerHeight/5);
   var moving = setInterval(move, 15);
   var firing = setInterval(fire, 100);
   var leftDown = false;
   var rightDown = false;
   var fireDown = false;
   var maxAmmo = 100;
   ship.ammo = maxAmmo;
   ship.score = 0;
   rock();
 
 function keyDown(e) {	
	var code;
	if (!e) {var e = window.event;}
	if (e.keyCode) {code = e.keyCode;}
	else if (e.which) {code = e.which;}
	
	if(code == 39) {rightDown = true;}
	if(code == 37) {leftDown = true;}
	if(code == 65) {fireDown = true;}
 }

 function keyUp(e) {
	var code;
	if (!e) {var e = window.event;}
	if (e.keyCode) {code = e.keyCode;}
	else if (e.which) {code = e.which;}
	
	if(code == 39) {rightDown = false;}
	if(code == 37) {leftDown = false;}
	if(code == 65) {fireDown = false;}
 }
 
 function move(){	 
	var sQ = window.innerWidth/4;	
	var shipX = parseInt(ship.style.left);
		
	if(leftDown){shipX += -5;}
	if(rightDown){shipX += 5;}	
	
	if(shipX < sQ){shipX = sQ;}
	if(shipX > (sQ*3)- ship.width){shipX = (sQ*3)- ship.width;} 
	
	$('#score').html('Score: ' + ship.score);
	ship.style.left = shipX + 'px';
	
	$('.rock').each(function(index, value) { 	
				var by = parseInt(value.style.top) + 12;
				var bx = parseInt(value.style.left) + 12;
				
				var ey = parseInt(ship.style.top) + 16;
				var ex = parseInt(ship.style.left) + 16;
				
				var diffY = Math.abs(ey - by);
				var diffX = Math.abs(ex - bx);
				
				//$('#op').html(diffX + ', ' + diffY);
				
				if((diffY < 16)&&(diffX < 16)){
					gameOver();
				}
			});
 }
 function gameOver(){
	clearInterval(moving);
	clearInterval(firing);
	ship.ammo = 0;
	$('#ammo').html('Ammo: ' + ship.ammo);
	document.getElementById('playField').removeChild(ship);
	$('.rock').each(function(index, value) {
	window.clearInterval(value.moveVal);
	document.body.removeChild(value);
	});
	$('#fScore').html(ship.score);
	$('#overview').css('display', 'block');
 }
 function fire(){
	if((fireDown) && (ship.ammo > 0)){
		bullet(); 
		ship.ammo -= 1; 
		$('#ammo').html('Ammo: ' + ship.ammo);
	}
	if(ship.ammo <= maxAmmo/2){
		$('#ammo').css('background', '#dab14e');
	}
	if(ship.ammo <= 10){
		$('#ammo').css('background', '#cc6666');
	}
 }

 function bullet(){
	
	var obj = document.createElement('div');
	obj.setAttribute('class', 'bullet');
	obj.style.top = ship.style.top;
	obj.style.left = (parseInt(ship.style.left) + 15) + 'px';
	obj.bullY = parseInt(obj.style.top);
	
	obj.moveVal = window.setInterval(moveBull, 15);
	function moveBull(){
		obj.bullY -= 10;
		obj.style.top = obj.bullY + 'px';
		if(parseInt(obj.style.top) <= 0){
			document.body.removeChild(obj); 
			window.clearInterval(obj.moveVal);
		}
	}
	document.body.appendChild(obj);
 }
 
  

}