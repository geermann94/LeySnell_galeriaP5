let x, y;
let a, b;
let angulo_i = 0.0;
let angulo_t = 0.0;
let largoSegmento = 350;

function setup() {
  createCanvas(800, 800);
  stroke(0);
  noCursor();

  x = width * 0.5;
  y = height * 0.5;

}

function draw() {
  background(200);

  if (mouseIsPressed) {
    a = mouseX;
    b = mouseY;
  }


  let d_op = int(dist(a, b, x, b));  //opuesto
  let d_h = int(dist(a, b, x, y));   //hipotenusa

  let n1 = 1.0002926     //coeficiente de reflexion del medio superior    
  let n2 = 1.46          //coeficiente de reflexion del medio inferior 

  angulo_i = asin(d_op / d_h);
  
  angulo_t = HALF_PI - asin((n1/n2)*(d_op / d_h)); //es el angulo desde donde empieza a rotar , no es el transmitido real 
  let angulo_t_real = asin((n1/n2)*(d_op / d_h)); //este si es el angulo simbolizado en el grafico



  line(a, b, x, y);


  push();
  segmento(x, y, angulo_t);
  
  pop();


  
  fill(0)
  ellipse(a, b, 16, 16);
  
  fill('rgba(0,255,0, 0.25)')
  rect(0, y, 2*x, y);

  noFill()
  arc(x,y,100,100,(3*PI)/2 - angulo_i ,(3*PI)/2)
  
  noFill()
  arc(x,y,100,100,angulo_t ,PI/2)


  stroke(255)

  line(x,50,x,(2*y) - 50)

  fill(255)
  triangle(x,50 , x-10,65 ,x+10,65)

  stroke(0)

  textSize(15);
  fill(0);
  text('n1  =  ' + n1, (2*x)-150, y-15);
  text('n2  =  ' + n2, (2*x)-150, y + 25);
  text('θ_Incidente  =  ' + angulo_i + "  RAD", 30 , y+150);
  text('θ_Transmitido  =  ' + angulo_t_real + "  RAD", 30 , y+215);
  

}

function segmento(x, y, a) {
  translate(x, y);
  rotate(a);
  line(0, 0, largoSegmento, 0);

}
