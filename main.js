require("jsb.js");

var MW = MW || {};

var appFiles = [
                'Resource.js',
                'GameConfig.js',
                'EnemyType.js',
                'Level.js',
                'Effect.js',
                'Bullet.js',
                'Enemy.js',
                'Explosion.js',
                'Ship.js',
                'LevelManager.js',
                'GameControlMenu.js',
                'GameLayer.js',
                'GameOver.js',
                'AboutLayer.js',
                'SettingsLayer.js',
                'SysMenu.js'
                ];

cc.dumpConfig();

for( var i=0; i < appFiles.length; i++) {
    require( appFiles[i] );
}

var director = cc.Director.getInstance();
director.setDisplayStats(true);

// set FPS. the default value is 1.0/60 if you don't call this
director.setAnimationInterval(1.0 / 60);

// create a scene. it's an autorelease object
var mainScene = SysMenu.scene();

// run
director.runWithScene(mainScene);
