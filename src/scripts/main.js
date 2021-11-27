//listen for the event where a unit is destroyed
Events.on(WorldLoadEvent, event => {
  //display toast on top of screen when the unit was a player
  
Vars.ui.hudfrag.showToast("Pathetic.");

const myDialog = new BaseDialog("Dialog Title");
myDialog.addCloseButton();
myDialog.cont.add("Goodbye.");
myDialog.show();


})
