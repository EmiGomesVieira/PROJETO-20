const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600); // Ajuste o tamanho da tela
	background(255); // Mude a cor do plano de fundo

	engine = Engine.create();
	world = engine.world;

	// Crie um corpo plano (plane) que será a base para o jogo
	plane = Bodies.rectangle(400, 600, 800, 10, { isStatic: true }); // Adicione o corpo plano ao mundo
	World.add(world, plane); // A propriedade isStatic para plano será true (verdadeira)

	// Crie dois corpos retangulares block1 e block2 e adicione-os ao world (mundo)
	block1 = Bodies.rectangle(200, 300, 200, 20);
	block2 = Bodies.rectangle(600, 150, 200, 20);
	World.add(world, [block1, block2]);

	// Estilize os corpos
	fill("#EFD469");
	rectMode(CENTER);
	ellipseMode(RADIUS);

	// Crie três corpos de rotador retangulares, ou seja, rotator1, rotator2, rotator3 e adicione-os ao objeto de mundo
	rotator1 = Bodies.rectangle(300, 150, 200, 20, { isStatic: true });
	rotator2 = Bodies.rectangle(500, 350, 200, 20, { isStatic: true });
	rotator3 = Bodies.rectangle(700, 200, 200, 20, { isStatic: true });
	World.add(world, [rotator1, rotator2, rotator3]);

	// Crie três variáveis de ângulo e atribua seus valores como 60
	let angle1 = 60;
	let angle2 = 60;
	let angle3 = 60;

	// Gire os rotadores com diferentes valores de ângulo
	Body.rotate(rotator1, angle1);
	Body.rotate(rotator2, angle2);
	Body.rotate(rotator3, angle3);

	// Crie cinco corpos de partículas circulares em setup() e adicione-os ao objeto de mundo
	particle1 = Bodies.circle(300, 50, 10, { restitution: 0.4, friction: 0 });
	particle2 = Bodies.circle(400, 50, 10, { restitution: 0.4, friction: 0 });
	particle3 = Bodies.circle(500, 50, 10, { restitution: 0.4, friction: 0 });
	particle4 = Bodies.circle(600, 50, 10, { restitution: 0.4, friction: 0 });
	particle5 = Bodies.circle(700, 50, 10, { restitution: 0.4, friction: 0 });
	World.add(world, [particle1, particle2, particle3, particle4, particle5]);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);

  // Desenhe os corpos de partículas
  fill("#66CCFF");
  ellipse(particle1.position.x, particle1.position.y, 10, 10);
  ellipse(particle2.position.x, particle2.position.y, 10, 10);
  ellipse(particle3.position.x, particle3.position.y, 10, 10);
  ellipse(particle4.position.x, particle4.position.y, 10, 10);
  ellipse(particle5.position.x, particle5.position.y, 10, 10);
}
