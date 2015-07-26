

$(document).ready(function() {
	var canvas = $("#myCanvas");
	var context = canvas.get(0).getContext("2d");
	var canvasWidth = canvas.width();
	var canvasHeight = canvas.height();
	function grid(){
	for (var x = 0.5; x < canvasWidth; x += 20) {
		context.moveTo(x, 0);
		context.lineTo(x, canvasHeight);
	}

	for (var y = 0.5; y < canvasHeight; y += 20) {
		context.moveTo(0, y);
		context.lineTo(500, y);
	}



	context.strokeStyle = "#ddd";
	context.stroke();
	}
	grid();

	var playAnimation = true;
	var startButton = $("#startAnimation");
	var stopButton = $("#stopAnimation");
	stopButton.hide();
	startButton.click(function() {
		$(this).hide();
		stopButton.show();
		playAnimation = true;
		animate();
	});
	stopButton.click(function() {
		$(this).hide();
		startButton.show();
		playAnimation = false;
	});
	
	var newObjects=[];
	
	var createTetris= function(x,y,width,height,Vy){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.Vy=Vy;
	}
	
	
function create(){
	
		var x=Math.floor(Math.random()*9)*20*2;
		//var y=Math.floor(Math.random()*9)*20;
		var y=0;
		var width=Math.floor(Math.random()*9)*10+10;
		var height=Math.floor(Math.random()*9)*10+10;
		var Vy=20;
		
		newObjects.push(new createTetris(x,y,width,height,Vy));
	}
	var count=0;
	create();
	function animate(){
		context.clearRect(0,0,canvasWidth,canvasHeight);
		grid();
		
		var temp=newObjects[count];
		if(temp.y>canvasHeight-20){
			create();
			count++;
		}
		
		
		
		for(var a=0;a<newObjects.length;a++){
			var tempObjectA=newObjects[a];
			
			for(var b=a+1;b<newObjects.length;b++){
				var tempObjectB=newObjects[b];
				var dX=tempObjectB.y-tempObjectA.y;
				var dY=tempObjectB.x-tempObjectA.x;
				
				
			}
		}
		
		for(var j=0;j<newObjects.length;j++){
			var tempObject=newObjects[j];
			
			document.onkeydown = function(e) {
				switch (e.keyCode) {
				case 37:
				if(tempObject.y<canvasHeight-20){
				context.clearRect(0,0,canvasWidth,canvasHeight);
				grid();
				tempObject.x=tempObject.x-20;}
				break;
				
				case 39:
				if(tempObject.y<canvasHeight-20){
				context.clearRect(0,0,canvasWidth,canvasHeight);
				grid();
				tempObject.x=tempObject.x+20;
				}
				break;
				
				case 40:
				if(tempObject.y<canvasHeight-20){
				context.clearRect(0,0,canvasWidth,canvasHeight);
				grid();
				tempObject.y=tempObject.y+20;}
				break;
				
				
				
		}
			
			}
	
		
			if(tempObject.y>canvasHeight-20){
				tempObject.Vy=0;
				tempObject.y=canvasHeight-20;
			}
			
			
			
			tempObject.y=tempObject.y+tempObject.Vy;
			context.fillStyle="rgb(200,180,160)";
			context.fillRect(tempObject.x,tempObject.y,40,20);
		}
		
		
		
	
	if (playAnimation) {
		setTimeout(animate, 500);
		};
	
	}
});

