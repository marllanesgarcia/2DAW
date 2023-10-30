"use script";

  document.addEventListener('keydown', function(event) {
    var element = document.getElementById('cuadrado');
    var left = parseInt(element.style.left) || 0;
    var top = parseInt(element.style.top) || 0;
    var step = 10; // Cantidad de píxeles a mover en cada paso
  
    var imgIzquierda=
    switch (event.key) {
      case 'ArrowUp':
            top -= step;
        break;
      case 'ArrowDown':
            top += step;
        break;
      case 'ArrowLeft':
             left -= step;
    //         <img src="https://i.pinimg.com/originals/3e/50/c8/3e50c82d8802a640d1e68cf7a7427d74.gif" 
    // style="height: 50px;width: 50px;">
        break;
      case 'ArrowRight':
            left += step;
    //         var item=document.createElement("img");
    //         item.innerHTML=`src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/365e45cb-f07a-4c88-a433-10e18063baad/d3iapfh-fc5d77be-fcf5-43a9-b676-83b7553bf246.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8zNjVlNDVjYi1mMDdhLTRjODgtYTQzMy0xMGUxODA2M2JhYWQvZDNpYXBmaC1mYzVkNzdiZS1mY2Y1LTQzYTktYjY3Ni04M2I3NTUzYmYyNDYuZ2lmIn1dXX0.rrySX_gaiVqKQMHRVerWDvqInE6C5qFuLyvdCt6TCcw" 
    // style="height: 50px;width: 50px;"`;
        break;
    }
  
    element.style.left = left + 'px';
    element.style.top = top + 'px';
  }); 



//   // evento KeyDown
//   document.addEventListener("keydown",function(event) {
//       info.innerHTML=`Evento keydown : Tecla Presionada - ${event.key}`;
//       var info=document.getElementById("cuadrado");
//   });





