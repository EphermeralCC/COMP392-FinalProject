var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @module scenes
 */
var scenes;
(function (scenes) {
    /**
     * This class instantiates the game over scene object
     *
     * @class Over
     * @extends scenes.Scene
     */
    var Over = (function (_super) {
        __extends(Over, _super);
        /**
         * Empty Contructor
         *
         * @constructor
         */
        function Over() {
            _super.call(this);
            this._initialize();
            this.start();
        }
        Over.prototype._setupCanvas = function () {
            canvas.style.width = "100%";
            canvas.setAttribute("height", config.Screen.HEIGHT.toString());
            canvas.style.backgroundColor = "#ffffff";
        };
        /**
         * This method sets up default values for class member variables
         * and objects
         *
         * @method _initialize
         * @return void
         */
        Over.prototype._initialize = function () {
            // Create to HTMLElements
            this._blocker = document.getElementById("blocker");
            this._blocker.style.display = "none";
            // setup canvas for menu scene
            this._setupCanvas();
            // setup a stage on the canvas
            this._stage = new createjs.Stage(canvas);
            this._stage.enableMouseOver(20);
        };
        /**
         * The start method is the main method for the scene class
         *
         * @method start
         * @return void
         */
        Over.prototype.start = function () {
            this._bgImage = new createjs.Bitmap(assets.getResult("MenuBackground"));
            this._bgImage.scaleX = 2;
            this._bgImage.scaleY = 2;
            this._stage.addChild(this._bgImage);
            this._auxImage = new createjs.Bitmap(assets.getResult("GameOver"));
            this._auxImage.x = (config.Screen.WIDTH * 0.5) - (this._auxImage.getBounds().width * 0.5);
            this._auxImage.y = (config.Screen.HEIGHT * 0.5) - 250;
            this._stage.addChild(this._auxImage);
            this._finalScoreLabel = new createjs.Text("" + gameController.score, "80px Consolas", "#000000");
            this._finalScoreLabel.regX = this._finalScoreLabel.getMeasuredWidth() * 0.5;
            this._finalScoreLabel.regY = this._finalScoreLabel.getMeasuredLineHeight() * 0.5;
            this._finalScoreLabel.x = config.Screen.WIDTH * 0.5;
            this._finalScoreLabel.y = (config.Screen.HEIGHT * 0.5) - 25;
            this._stage.addChild(this._finalScoreLabel);
            this._restartButton = new createjs.Bitmap(assets.getResult("RestartButton"));
            this._restartButton.regX = this._restartButton.getBounds().width * 0.5;
            this._restartButton.regY = this._restartButton.getBounds().height * 0.5;
            this._restartButton.x = config.Screen.WIDTH * 0.5;
            this._restartButton.y = (config.Screen.HEIGHT * 0.5) + 150;
            this._stage.addChild(this._restartButton);
            this._restartButton.on("mouseover", function (event) {
                event.target.alpha = 0.7;
            });
            this._restartButton.on("mouseout", function (event) {
                event.target.alpha = 1.0;
            });
            this._restartButton.on("click", function (event) {
                currentScene = config.Scene.MENU;
                changeScene();
            });
        };
        /**
         * The update method updates the animation loop and other objects
         *
         * @method update
         * @return void
         */
        Over.prototype.update = function () {
            this._stage.update();
        };
        /**
         * The resize method is a procedure that sets variables and objects on screen resize
         *
         * @method resize
         * @return void
         */
        Over.prototype.resize = function () {
            this._setupCanvas();
        };
        return Over;
    }(scenes.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));

//# sourceMappingURL=over.js.map
