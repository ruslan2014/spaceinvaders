var disparar = function() {


this.calcularPosIni = function() {
	//variable
	this.iPosXIni = 0;
    this.iPosYIni = 0;
    this.$divDisparo;
    this.iTiemComCol = 20;

	this.iPosXIni = parseInt($nave.css('left')) + parseInt($nave.css('width')) / 2 - 10;

this.iPosYIni = parseInt($nave.css('bottom')) + parseInt($nave.css('height'));

}

this.mover = function() {
	this.$divDisparo = $('<div>');
			$divDisparo.addClass('disparo');
			
			$divDisparo.css({
				'left': iPosX + 'px',
				'bottom': posDisY + 'px'
			});
			//Animación disparo
			$pantalla.append($divDisparo);
			$divDisparo.animate({
				'bottom' : parseInt($pantalla.css('height'))
			}, iVelDis, 'linear', function() {
				//Cuando termina la animación, la elimina
				this.$divDisparo.remove();
			});



}

this.comprobarColision = function() {
	var $enemigos = $('.enemigo');
	$enemigos.each(function(index) {
            this.isCollision(index, this.$divDisparo) {
            	console.log('colisiooon!!!');
            }
	});

}

this.isCollision = function($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
  }

              	
              	//llamamos las dos funciones de arriba
              	this.calcularPosIni();
              	this.mover();
              	setInterval('comprobarColision()', this.iTiemComCol);
}

