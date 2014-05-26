var Enemigo = function(iniPosX, iniPosY) {
	this.iVida = 100;
	this.iPosX = iniPosX;
	this.iniPosY = iniPosY;
	this.$divEnemigo;
	this.$pantalla = $('#juego');
	this.iOsci = 50;
	this.iTiemAni = 2000;

	this.crearEnemigo = function() {
		this.$divEnemigo = $('<div>');
		this.$divEnemigo.addClass('enemigo');
		this.$divEnemigo.css('top', this.iPosX + 'px');
		this.$divEnemigo.css('left', this.iPosY + 'px');
		this.$pantalla.append(this.$divEnemigo);
	}

	this.animaIzq = function() {
		this.$divEnemigo.animate({
			'left' : this.iPosX - this.iOsci
		},   'linear' , this.iTiemAni, function(){
                this.animarDer();
		});
	}

		this.animaDer = function() {
		this.$divEnemigo.animate({
			'left' : this.iPosX - this.iOsci
		},   'linear' , this.iTiemAni, function(){
                this.animarIzq();
		});
	}

	this.animar = function(){
		animarDer();
	}

       this.crearEnemigo();
}