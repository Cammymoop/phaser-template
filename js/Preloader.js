BaseNamespace.Preloader = function (game) {
    "use strict";

	this.ready = false;
};

BaseNamespace.Preloader.prototype = {
	preload: function () {
        "use strict";
        this.game.load.image('logo', 'img/phaser.png');

	},

	create: function () {
        "use strict";
        this.game.state.start('Game');
	}
};
