

//Tecla que ha pulsado 
    $body.keydown(function(event) {
    //	console.log( "Tecla pulsada: " + event.which);
		switch(event.which) {
			case 39://derecha
			      /* if(parseInt($pantalla.css('width')) - iVelNav - parseInt($nave.css('width')) > $nave.position().left) 
			        	$nave.css('left','+=' + iVelNav + 'px');
			        break;*/
			        moverDer();

			case 37://Izquierda
			        /*if( iVelNav < parseInt($nave.css('left')))
                      $nave.css('left','-=' + iVelNav + 'px');
                break;*/
                moverIzq();

            case 90://disparo letra z

             /* var iPosX = parseInt($nave.css('left')) + parseInt($nave.css('width')) / 2;
              
              var $divDisparo = $('<div>');
              $divDisparo.addClass('misil');
              $divDisparo.css({
              	   'left' : iPosX + 'px',
              	   'bottom' : posDisY + 'px'
              });
              //Animacion disparo
              $pantalla.append($divDisparo);


              		$divDisparo.animate({
				'bottom' : parseInt($pantalla.css('height'))
			}, iVelDis, function() {
				//Cuando termina la animación, la elimina
				$divDisparo.remove();
			});  */
                 disparar();
		break;
	}
});

      //Raton
      var $botonIzq = $('#controlIzq');
      $botonIzq.click(function(event){
       	       moverIzq();
       }); 
       var $botonDer = $('#controlDer');
       $botonDer.click(function(event){
       	       moverDer();
       }); 
       var $botonDisp = $('#controlDisp');
       $botonDisp.click(function(event) {
         disparar();
       });

	

  
