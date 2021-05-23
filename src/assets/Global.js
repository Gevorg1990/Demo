
  
window.onload=function () {
   // // Canvas
     const canvas = document.getElementById('canvas');
     console.log(canvas)
     var ctx = canvas.getContext("2d");
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
     let huo = 0;
     const particleArray = [];
   
     const mouse = {
       x: null,
       y: null,
     };
   
   
     canvas.addEventListener('click', function (event) {
       mouse.x = event.x;
       mouse.y = event.y;
   
       for (let i = 0; i < 10; i++) {
         particleArray.push(new Particle());
       }
   
     });
   
   
     canvas.addEventListener('mousemove', function (event) {
       mouse.x = event.x;
       mouse.y = event.y;
   
       for (let i = 0; i < 2; i++) {
         particleArray.push(new Particle());
       }
   
     });
   
     class Particle {
       // tslint:disable-next-line:typedef
       // x: number;
       // y: number;
       // size: number;
       // speedX: number;
       // speedY: number;
       // color: string;
       // tslint:disable-next-line:typedef
       constructor() {
         this.x = mouse.x;
         this.y = mouse.y;
   
         // this.x = Math.random() * canvas.width;
         // this.y = Math.random() * canvas.height;
   
         this.size = Math.random() * 25 + 1;
         this.speedX = Math.random() * 3 - 1.5;
         this.speedY = Math.random() * 3 - 1.5;
         this.color = 'hsl(' + huo + ', 100%, 50%)';
       }
   
       // tslint:disable-next-line:typedef
       update() {
         this.x += this.speedX;
         this.y += this.speedY;
         if (this.size > 0.2) {
           this.size -= 0.1;
         }
       }
   
       // tslint:disable-next-line:typedef
       draw() {
         ctx.fillStyle = this.color;
         ctx.beginPath();
         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
         ctx.fill();
       }
     }
   
   // tslint:disable-next-line:typedef
     function handleParticle() {
       // tslint:disable-next-line:prefer-for-of
       for (let i = 0; i < particleArray.length; i++) {
         particleArray[i].update();
         particleArray[i].draw();
   
         for (let j = i; j < particleArray.length; j++) {
           const dx = particleArray[i].x - particleArray[j].x;
           const dy = particleArray[i].y - particleArray[j].y;
           const distance = Math.sqrt(dx * dx + dy * dy);
           if (distance < 100) {
             ctx.beginPath();
             ctx.strokeStyle = particleArray[i].color;
             ctx.lineWidth = particleArray[i].size / 20;
             ctx.moveTo(particleArray[i].x, particleArray[i].y);
             ctx.lineTo(particleArray[j].x, particleArray[j].y);
             ctx.stroke();
             ctx.closePath();
           }
         }
         if (particleArray[i].size <= 0.3) {
           particleArray.splice(i, 1);
           i--;
         }
       }
   
     }
   
   // canvas Animate
     const animate = () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       ctx.fillStyle = 'rgba(0,0,0,0.01)';
       ctx.fillRect(0, 0, canvas.width, canvas.height);
       handleParticle();
       huo += 2;
       requestAnimationFrame(animate);
     };
     animate();
   
   // endJs
   
   
     function showHide(cs) {
       this.classList.toggle(cs)
       console.log(this)
     }
   
     var clock = showHide.bind(document.querySelector('.clock'), 'show');
     document.querySelector('.clock1').onclick = clock;
   
     var calculator = showHide.bind(document.querySelector('.calc'), 'show');
     document.querySelector('.calculator').onclick = calculator;
   
   
   }
   
