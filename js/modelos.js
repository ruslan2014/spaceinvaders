var $body = $('body');
	var $nave = $('#nave');
	var $pantalla = $('#juego');
	var $iOsci = 50;
	var iVelNav = 20;
    var iVelDis = 1000;

	//centrar la nave
	/*var posNavCen = parseInt($pantalla.css('width')) / 2) - parseInt($nave.css('width')) / 2;
$nave.css('left', posNavCen + 'px'); */


    //centrar eje y del disparo
    var posDisY = parseInt($nave.css('bottom')) + parseInt($nave.css('height'));

    //creamos los enemigos
    //
    new Enemigo(20, 20);
     new Enemigo(220, 20);
      new Enemigo(420, 20);
 new Enemigo(620, 20);

/* var moverEnemigosDer = function(){
  
     $('.enemigo').each(function() {
          var $this = $('this');
          $this.animate({
          'left' : parseInt($this.css('left')) + iOsci + 'px'

        }, iTiemAni, 'linear');

  });

   }
            var moverEnemigosDer = function(){
            $('.enemigo').each( function(){
                   var $this = $(this);
                   $this.animate({

                   'left' : parseInt($this.css('left')) + iOsci + 'px'

        }, iTiemAni, 'linear');
      });
 }
        moverEnemigosDer();*/

       //Movimientos
var moverDer = function() {
  if(parseInt($pantalla.css('width')) - iVelNav - parseInt($nave.css('width')) > parseInt($nave.css('left'))) 
        $nave.css('left', '+=' + iVelNav + 'px');
}

var moverIzq = function() {
  if(iVelNav < parseInt($nave.css('left')))
        $nave.css('left', '-=' + iVelNav + 'px');
}

var disparar = function() {
  new disparo();
}

