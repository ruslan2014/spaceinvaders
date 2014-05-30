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
		this.$divEnemigo.css('top', this.iPosY + 'px');
		this.$divEnemigo.css('left', this.iPosX + 'px');
		this.$pantalla.append(this.$divEnemigo);
	
	}


       this.crearEnemigo();
}