// JavaScript Document
	function rock(){
		var en = document.createElement('img');
		var ship = document.getElementById('ship');
		en.src = 'rock.png';
		en.setAttribute('class', 'rock');
		en.style.top = '-16px';
		en.style.left = Math.floor(Math.random()*((parseInt(window.innerWidth)/4)*3)) + 'px';
		en.Y = parseInt(en.style.top);
		en.X = parseInt(en.style.left);
		en.speed = Math.floor(Math.random()*3) + 1;
		en.direc = Math.floor(Math.random()*11);
		//$('#op').html(en.direc + ' ');
		
		
		
		en.moveVal = window.setInterval(moveEn, 15);
		function moveEn(){
			en.Y += 2;
			if(en.direc < 5){
				en.X += en.speed;
			}
			else{ 
				en.X -= en.speed;	
			}
			
			en.style.top = en.Y + 'px';
			en.style.left = en.X + 'px';
			//$('#op').html('X: ' + en.style.left + ' ');
			if(parseInt(en.style.top) >= parseInt(ship.style.top) + 100){
				//$('#op').html('');	
				en.Y = 0;	
				rock();
				//document.body.removeChild(en); 
				//clearInterval(moveVal);
			}
			if(parseInt(en.style.left) <= (parseInt(window.innerWidth)/4)){
				en.X =  ((parseInt(window.innerWidth)/4)*3) - 10;
				en.style.left = en.X + 'px';
			}
			if(parseInt(en.style.left) >= (parseInt(window.innerWidth)/4)*3){
				en.X =  (parseInt(window.innerWidth)/4) + 2;
				en.style.left = en.X + 'px';
			}
			
			$('.bullet').each(function(index, value) { 
				var by = parseInt(value.style.top) + 3;
				var bx = parseInt(value.style.left) + 1;
				
				var ey = parseInt(en.style.top) + 12;
				var ex = parseInt(en.style.left) + 12;
				
				var diffY = Math.abs(ey - by);
				var diffX = Math.abs(ex - bx);
				
				//$('#op').html(diffX + ', ' + diffY);
				
				if((diffY < 12)&&(diffX < 12)){
					//$('#op').html('');					
					document.body.removeChild(en); 
					window.clearInterval(en.moveVal);					
					window.clearInterval(value.moveVal);
					document.body.removeChild(value);
					ship.ammo += 3;
					ship.score += 1;
					rock();
				}
			});
			
		}
		document.body.appendChild(en);
 	}	