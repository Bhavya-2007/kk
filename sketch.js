var canva;


function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  form= new Form();
 
}


function draw(){
  background("pink");
 form.display();

}
