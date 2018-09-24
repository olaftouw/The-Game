var HasSword = false;
var HasTrident = false;
var myAudio = new Audio('./img/cave.mp3');
	myAudio.loop = true;
	myAudio.play();

function level1(){
	console.log('level 1');
	document.getElementById('text').innerHTML ='Just follow the bridge.';
	document.body.style.background="url('./img/level1.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2').style.display="block";
	document.getElementById('back1').style.display="none";
	document.getElementById("image-holder2").style.display="none";
	document.getElementById("image-holder").style.display="none";
}
function level2(){
	console.log('level 2');
	document.getElementById('text').innerHTML ='Wich way?';
	document.body.style.background="url('./img/level2.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2').style.display="none";
	document.getElementById('knop3').style.display="block";
	document.getElementById('knop4').style.display="block";
	document.getElementById('back1').style.display="none";
	document.getElementById("image-holder2").style.display="none";
	document.getElementById("image-holder").style.display="none";

}
function levelcave(){
	console.log('level cave');
	document.getElementById('text').innerHTML ='Brrrrr it is cold in here... Can you find something?';
	document.body.style.background="url('./img/cave2.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('back1').style.display="block";
	document.getElementById("image-holder2").style.display="none";
	document.getElementById("image-holder").style.display="block";
	document.getElementById("image-holder").innerHTML = "<img src='./img/sword.png' alt='Sword' />";
	document.getElementById("image-holder").onclick = function(){
		document.getElementById("image-holder").style.display="none";
		alert("Congratulations you have the sword!");
		console.log('picked up sword');
		HasSword = true;
		
	}

}
function level3(){
	console.log('level 3');
	document.getElementById('text').innerHTML ='Find your way down.';
	document.body.style.background="url('./img/level3.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('back1').style.display="none";
	document.getElementById('knop5').style.display="block";
	document.getElementById('knop6').style.display="block";
	document.getElementById('attack').style.display="none";
	document.getElementById("image-holder2").style.display="none";
	document.getElementById("image-holder").style.display="none";
}
function level4a(){
	console.log('level 4a');
	document.getElementById('text').innerHTML ='I hear the noise of a dragon...';
	document.body.style.background="url('./img/dragon1.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('back1').style.display="none";
	document.getElementById('knop5').style.display="none";
	document.getElementById('knop6').style.display="none";
	document.getElementById('next1').style.display="block";
	document.getElementById('attack').style.display="none";
	document.getElementById("image-holder2").style.display="none";
	document.getElementById("image-holder").style.display="none";
}
function level4b1(){
	console.log('level 4b1');
	document.getElementById('text').innerHTML ='The dock, can you find somenthing?';
	document.body.style.background="url('./img/dock.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('back1').style.display="none";
	document.getElementById('knop5').style.display="none";
	document.getElementById('knop6').style.display="none";
	document.getElementById('next1').style.display="none";
	document.getElementById('next2').style.display="none";
	document.getElementById('next3').style.display="block";
	document.getElementById('attack').style.display="none";
	document.getElementById("image-holder2").style.display="block";
	document.getElementById("image-holder2").innerHTML = "<img src='./img/trident.png' alt='Trident' />";
	document.getElementById("image-holder").style.display="none";
	document.getElementById("image-holder2").onclick = function(){
		document.getElementById("image-holder2").style.display="none";
		alert("Congratulations you have the Trident!");
		console.log('picked up trident');
		HasTrident = true;
	}
}
function level4b2(){
	console.log('level 4b2');
	document.getElementById('text').innerHTML ='Oooh no there is Mr Snoek...';
	document.body.style.background="url('./img/snoek.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('speech1').style.display="block";
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('back1').style.display="none";
	document.getElementById('knop5').style.display="none";
	document.getElementById('knop6').style.display="none";
	document.getElementById('next1').style.display="none";
	document.getElementById('next2').style.display="block";
	document.getElementById('next3').style.display="none";
	document.getElementById('attack').style.display="none";
	document.getElementById("image-holder2").style.display="none";
	document.getElementById("image-holder").style.display="none";
}
function level4c(){
	console.log('level 4c');
	document.getElementById('text').innerHTML ='Stab him with your trident.';
	document.body.style.background="url('./img/snoek.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('speech1').style.display="none";
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('back1').style.display="none";
	document.getElementById('knop5').style.display="none";
	document.getElementById('knop6').style.display="none";
	document.getElementById('next1').style.display="none";
	document.getElementById('next2').style.display="none";
	document.getElementById('next3').style.display="none";
	document.getElementById('attack').style.display="block";
	document.getElementById("image-holder2").style.display="none";
	document.getElementById("image-holder").style.display="none";


			document.getElementById('attack').onclick = function(){
		if (HasTrident) {
			deadmonster();
		} else {
			leveldead();
			alert("Maybe I need a weapon to kill it.");
		}
	}


}
function deadmonster(){
	console.log('level dead monster');
	document.getElementById('text').innerHTML ='Congratulations you have defeated Mr Snoek.';
	document.body.style.background="url('./img/deadmonster.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('speech2').style.display="block";
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('back1').style.display="none";
	document.getElementById('knop5').style.display="none";
	document.getElementById('knop6').style.display="none";
	document.getElementById('next1').style.display="none";
	document.getElementById('knop7').style.display="none";
	document.getElementById('dodge1').style.display="none";
	document.getElementById('attack').style.display="none";
	document.getElementById('walk').style.display="block";
	document.getElementById("image-holder2").style.display="none";
	document.getElementById("image-holder").style.display="none";
}
function leveldragon(){
	console.log('level dragon');
	document.getElementById('text').innerHTML ='Slay him or dodge his attack.';
	document.body.style.background="url('./img/dragon2.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('back1').style.display="none";
	document.getElementById('knop5').style.display="none";
	document.getElementById('knop6').style.display="none";
	document.getElementById('next1').style.display="none";
	document.getElementById('knop7').style.display="block";
	document.getElementById('dodge1').style.display="block";
	document.getElementById('attack').style.display="none";
	document.getElementById("image-holder2").style.display="none";
	document.getElementById("image-holder").style.display="none";

	document.getElementById('knop7').onclick = function(){
		if (HasSword) {
			level5();
		} else {
			leveldead();
			alert("Maybe I need a weapon to kill it.");
		}
	}

}
function level5(){
	console.log('level dead dragon');
	document.getElementById('text').innerHTML ='Congratulations you have defeated the dragon.';
	document.body.style.background="url('./img/dragondead2.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('back1').style.display="none";
	document.getElementById('knop5').style.display="none";
	document.getElementById('knop6').style.display="none";
	document.getElementById('next1').style.display="none";
	document.getElementById('knop7').style.display="none";
	document.getElementById('dodge1').style.display="none";
	document.getElementById('walk1').style.display="block";
	document.getElementById('attack').style.display="none";
	document.getElementById("image-holder2").style.display="none";
	document.getElementById("image-holder").style.display="none";

}

function leveldodge(){
	console.log('level dodge');
	document.getElementById('text').innerHTML ='Oooh no he was to fast.';
	document.body.style.background="url('./img/dragon3.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('back1').style.display="none";
	document.getElementById('knop5').style.display="none";
	document.getElementById('knop6').style.display="none";
	document.getElementById('next1').style.display="none";
	document.getElementById('knop7').style.display="none";
	document.getElementById('dodge1').style.display="none";
	document.getElementById('dead').style.display="block";
	document.getElementById('walk').style.display="none";
	document.getElementById('attack').style.display="none";
	document.getElementById("image-holder2").style.display="none";
	document.getElementById("image-holder").style.display="none";

}
function leveldead(){
	console.log('level dead');
	document.getElementById('text').innerHTML ='Game over you have died.';
	document.body.style.background="url('./img/dead.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('back1').style.display="none";
	document.getElementById('knop5').style.display="none";
	document.getElementById('knop6').style.display="none";
	document.getElementById('next1').style.display="none";
	document.getElementById('knop7').style.display="none";
	document.getElementById('dodge1').style.display="none";
	document.getElementById('dead').style.display="none";
	document.getElementById('walk').style.display="none";
	document.getElementById('attack').style.display="none";
	document.getElementById("image-holder2").style.display="none";
	document.getElementById("image-holder").style.display="none";

}
function walk(){
	console.log('level 5');
	document.getElementById('text').innerHTML ='Almost there.';
	document.body.style.background="url('./img/walkcity.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('speech3').style.display="block";
	document.getElementById('speech2').style.display="none";
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('back1').style.display="none";
	document.getElementById('knop5').style.display="none";
	document.getElementById('knop6').style.display="none";
	document.getElementById('next1').style.display="none";
	document.getElementById('knop7').style.display="none";
	document.getElementById('dodge1').style.display="none";
	document.getElementById('dead').style.display="none";
	document.getElementById('attack').style.display="none";
	document.getElementById('walk').style.display="none";
	document.getElementById('walk1').style.display="none";
	document.getElementById('end').style.display="block";
	document.getElementById("image-holder2").style.display="none";
	document.getElementById("image-holder").style.display="none";



}
function end(){
	console.log('level end');
	document.getElementById('text').innerHTML ='Congratulations you have found the city.';
	document.body.style.background="url('./img/city.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('speech3').style.display="none";
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('back1').style.display="none";
	document.getElementById('knop5').style.display="none";
	document.getElementById('knop6').style.display="none";
	document.getElementById('next1').style.display="none";
	document.getElementById('knop7').style.display="none";
	document.getElementById('dodge1').style.display="none";
	document.getElementById('dead').style.display="none";
	document.getElementById('end').style.display="none";
	document.getElementById('attack').style.display="none";
	document.getElementById("image-holder2").style.display="none";
	document.getElementById("image-holder").style.display="none";



}



