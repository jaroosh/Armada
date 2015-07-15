﻿// Main game.
var Game;
(function (Game) {
    var ArmadaGame = (function () {
        function ArmadaGame() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                create: this.create,
                preload: this.preload
            });
        }
        ArmadaGame.prototype.create = function () {
            this.game.state.add("TitleScreenState", Game.TitleScreenState, true);
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        };

        ArmadaGame.prototype.preload = function () {
            // Gfx.
            this.game.load.image("title", "Graphics/TitleScreen.png");
            this.game.load.image("scene", "Graphics/scene270.png");
            this.game.load.image("gameover", "Graphics/GameOver.png");

            // Spritesheet.
            this.game.load.atlasXML("Hero_Walking", "Graphics/hero_walking.xml");
            this.game.load.atlasXML("Hero_Idle", "Graphics/hero_idle.xml");

            // Audio.
            // use audio sprites.
            // send appropriate item.
            this.game.load.audio("TitleSong", ["Sounds/TitleSong.mp3", "Sounds/TitleSong.ogg", "Sounds/TitleSong.wav"]);
        };
        return ArmadaGame;
    })();
    Game.ArmadaGame = ArmadaGame;

    window.onload = function () {
        var game = new ArmadaGame();
    };
})(Game || (Game = {}));
//# sourceMappingURL=app.js.map
