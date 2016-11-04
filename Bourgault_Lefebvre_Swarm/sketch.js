//Déclaration de Variable Utilisée pour faire l'inversion de couleur.
var invert = false;

function setup() {
        createCanvas(windowWidth, windowHeight);
        background(255, 255, 255);
       
}
function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
        background(255, 255, 255);
        generateArtPale();
                generateArtPaleInverse();
                generateArtPaleCentre();
                generateRandomBG();
                generateArtMidFonce();
                generateArtFonce();
                generateFrame();
                if(invert===true){
          
            filter(INVERT);
          }
}
function draw() {
        
        //Génère un tableau différent chaque fois que la souris est appuyée grace aux appels de fonction.
        if ( mouseIsPressed ) {
                background(255, 255, 255);
                generateArtPale();
                generateArtPaleInverse();
                generateArtPaleCentre();
                generateRandomBG();
                generateArtMidFonce();
                generateArtFonce();
                generateFrame();
          //Regarde l'état de la variable Invert pour savoir si on désire ou non l'inversion de couleur.    
          if(invert===true){
          
            filter(INVERT);
          }
        }
}
//Cette fonction génère les lignes très fine de l'arrière plan pour donner plus de texture a l'aide d'une boucle FOR.
function generateRandomBG()
{
  for(var i=0; i<=3000; i++)
  {
    strokeWeight(random(50)/500);
    stroke(random(100)+80);
    noFill();
    beginShape();
    
    var rx = random(windowWidth+800)-400;
    var ry = random(windowHeight+800)-400;
    
    vertex(rx, ry);
    bezierVertex(rx, ry, rx, ry, random(windowWidth), random(windowHeight));
    bezierVertex(rx, ry, rx, ry, random(windowWidth), random(windowHeight));
    bezierVertex(rx, ry, rx, ry, random(windowWidth), random(windowHeight));
    
    endShape();
    
  }
}
//Cette fonction génère des lignes un peu plus grace a l'aide d'une boucle FOR.
//Un seed random est ajouté a chaque ligne pour s'assurer des micro divergeance.
function generateArtPale()
{
  var baseSeedY1 = -500;
  var seedcx3 = random(windowWidth/10) + windowWidth/5;
  var seedcy3 = random(windowHeight)/3;
  var seedcx6 = random(windowWidth/10) + windowWidth/2;
  var seedcy6 = 0;
  var seedcx9 = random(windowWidth/10) + windowWidth - windowWidth/10;
  var seedcy9 = random(windowHeight)/3;
  var baseSeedY2 = -500;
  
  var seedRandom = 50;
  
  for(var i=0; i<=200; i++)
  {
    var p1x = 0;
    var p1y = baseSeedY1+i*3+random(seedRandom);
    var p2x = seedcx3+i*3+random(seedRandom);
    var p2y = seedcy3+i*3+random(seedRandom);
    var p3x = seedcx6+i*3+random(seedRandom);
    var p3y = seedcy6+i*3+random(seedRandom);
    var p4x = seedcx9+i*3+random(seedRandom);
    var p4y = seedcy9+i*3+random(seedRandom);
    
    strokeWeight(random(100)/300);
    stroke(random(50)+20);
    noFill();
    beginShape();
    
    vertex(p1x+random(60), p1y);
    bezierVertex(p1x+400, p1y, p2x-400, p2y, p2x, p2y);
    bezierVertex(p2x+400, p2y, p3x-400, p3y, p3x, p3y);
    bezierVertex(p3x+400, p3y, p4x-400, p4y, p4x, p4y);
    
    endShape();
  }
}

//Comme les lignes de la fonction précédente ont tendance a descendre vers le bas, nous avons inversé la formule pour donner un équilibre au tableau.
function generateArtPaleInverse()
{  
  var baseSeedY1 = windowHeight-200;
  var seedcx3 = random(windowWidth/10) + windowWidth/5+200;
  var seedcy3 = random(windowHeight)/3;
  var seedcx6 = random(windowWidth/10) + windowWidth/2+200;
  var seedcy6 = windowHeight-200;
  var seedcx9 = random(windowWidth/10) + windowWidth - windowWidth/10+200;
  var seedcy9 = random(windowHeight)/3;
  var baseSeedY2 = windowHeight-200;
  
  var seedRandom = 50;
  
  for(var i=0; i<=200; i++)
  {
    var p1x = 0;
    var p1y = baseSeedY1+(i*3)+random(seedRandom);
    var p2x = seedcx3+(i*3)+random(seedRandom);
    var p2y = seedcy3+(i*3)+random(seedRandom);
    var p3x = seedcx6+(i*3)+random(seedRandom);
    var p3y = seedcy6+(i*3)+random(seedRandom);
    var p4x = seedcx9+(i*3)+random(seedRandom);
    var p4y = seedcy9+(i*3)+random(seedRandom);
    
    strokeWeight(random(100)/300);
    stroke(random(50)+20);
    noFill();
    beginShape();
    
    vertex(p1x+random(60), p1y);
    bezierVertex(p1x+400, p1y, p2x-400, p2y, p2x, p2y);
    bezierVertex(p2x+400, p2y, p3x-400, p3y, p3x, p3y);
    bezierVertex(p3x+400, p3y, p4x-400, p4y, p4x, p4y);
    
    endShape();
    
  }
}

//Même fonction que la précédente mais ammenuisant le random pour que les figure soient plus centrée.
function generateArtPaleCentre()
{  
  var baseSeedY1 = random(windowHeight/2);
  var seedcx3 = random(windowWidth/10) + windowWidth/5;
  var seedcy3 = random(windowHeight)/3;
  var seedcx6 = random(windowWidth/10) + windowWidth/2;
  var seedcy6 = 0;
  var seedcx9 = random(windowWidth/10) + windowWidth - windowWidth/10-300;
  var seedcy9 = random(windowHeight/2);
  
  var seedRandom = 50;
  
  for(var i=0; i<=200; i++)
  {
    var p1x = 0;
    var p1y = baseSeedY1+(i*3)+random(seedRandom);
    var p2x = seedcx3+(i*3)+random(seedRandom);
    var p2y = seedcy3+(i*3)+random(seedRandom);
    var p3x = seedcx6+(i*3)+random(seedRandom);
    var p3y = seedcy6+(i*10)+random(seedRandom);
    var p4x = seedcx9+(i*3)+random(seedRandom);
    var p4y = seedcy9+(i*20)+random(seedRandom)-2000;
    
    strokeWeight(random(100)/300);
    stroke(random(50)+20);
    noFill();
    beginShape();
    
    vertex(p1x+random(60), p1y);
    bezierVertex(p1x+400, p1y, p2x-400, p2y, p2x, p2y);
    bezierVertex(p2x+400, p2y, p3x-400, p3y, p3x, p3y);
    bezierVertex(p3x+400, p3y, p4x-400, p4y, p4x, p4y);
    
    endShape();
  }
}

//Fonction qui génère les modules coloré centré comme la fonction précédente mais plus foncé.
function generateArtMidFonce()
{
  var seedcx3 = random(192) + 192*2;
  var seedcy3 = random(windowHeight);
  var seedcx6 = random(192) + 192*5;
  var seedcy6 = random(windowHeight);
  var seedcx9 = random(192) + 192*8;
  var seedcy9 = random(windowHeight);
  var baseSeedY1 = random(windowHeight);
  var baseSeedY2 = random(windowHeight);
  var seedRandom = 150;
  var incr = 40;
  
  for(var i=0; i<=800; i++)
  {
    var p1x = random(400)+300;
    var p1y = baseSeedY1+i/incr+random(seedRandom);
    var p2x = seedcx3+i/incr+random(seedRandom);
    var p2y = seedcy3+i/incr+random(seedRandom);
    var p3x = seedcx6+i/incr+random(seedRandom);
    var p3y = seedcy6+i/incr+random(seedRandom);
    var p4x = windowWidth-random(200);
    var p4y = baseSeedY2+i/incr+random(250);
    
    angleMode(DEGREES);
    
    strokeWeight(random(100)/200);
    stroke(100*sin(i));
    noFill();
    beginShape();
    
    vertex(p1x, p1y);
    bezierVertex(p1x+400, p1y, p2x-100, p2y, p2x, p2y);
    bezierVertex(p2x+400, p2y, p3x+200, p3y, p3x, p3y);
    bezierVertex(p3x+100, p3y, p4x-200, p4y, p4x, p4y);
    
    endShape();
  }
  
  
}

//Le module de ligne le plus foncé.
function generateArtFonce()
{
  var seedcx3 = random(192) + 192*2;
  var seedcy3 = random(windowHeight);
  var seedcx6 = random(192) + 192*5;
  var seedcy6 = random(windowHeight);
  var seedcx9 = random(192) + 192*8;
  var seedcy9 = random(windowHeight);
  var baseSeedY1 = random(windowHeight);
  var baseSeedY2 = random(windowHeight);
  var seedRandom = 200;
  var incr = 40;
  
  for(var i=0; i<=800; i++)
  {
    var p1x = random(200)+50;
    var p1y = baseSeedY1+i/incr+random(seedRandom+100);
    var p2x = seedcx3+i/incr+random(seedRandom+50);
    var p2y = seedcy3+i/incr+random(seedRandom+75);
    var p3x = seedcx6+i/incr+random(seedRandom+80);
    var p3y = seedcy6+i/incr+random(seedRandom+90);
    var p4x = windowWidth-random(150)-50;
    var p4y = baseSeedY2+i/incr+random(seedRandom+100);
    
    angleMode(DEGREES);
    
    strokeWeight(random(50)/150);
    stroke(70*sin(i));
    noFill();
    beginShape();
    
    vertex(p1x, p1y);
    bezierVertex(p1x+400, p1y, p2x-200, p2y, p2x, p2y);
    bezierVertex(p2x+400, p2y, p3x-400, p3y, p3x, p3y);
    bezierVertex(p3x+400, p3y, p4x-400, p4y, p4x, p4y);
   
    endShape();
  }
}

//Nous avons décidé de créer un cadre autour de notre oeuvre donc c'est ici qu,il est créé avec des rectangles.
function generateFrame(){
  
  noFill();
  strokeWeight(25);
  stroke(color(255,255,255));
  rect((12,5),(12,5),(windowWidth-12.5),(windowHeight-12.5));
  strokeWeight(2);
  stroke(color(0));
  rect(12.5,12.5,(windowWidth-25),(windowHeight-25));
  
}

//Fonction qui regarde si la barre d'espace a été appuyée.  Si oui, change l'état de la variable Invert (Qui inverse les couleurs)
function keyPressed() {
  
  if (keyCode === 32) {
    if(invert===true){
      
      invert=false;
    }
    else if(invert===false){
     
      invert=true;
    }
    
  } 
}
