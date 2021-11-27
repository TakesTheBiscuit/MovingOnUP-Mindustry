const lib = require("moulib");

Events.on(WaveEvent, event => {
    
    Vars.ui.hudfrag.showToast("^^^ MOVING ON UP ^^^");

    const player = Vars.player;
    const mouSound = lib.loadSound("mou");
    mouSound.at(player.getX(), player.getY(), 1);

})
