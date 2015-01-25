{
  init: function(elevators, floors) {
    var elevator1 = elevators[0];
    var elevator2 = elevators[1];

    elevator1.on("idle", function() {
      elevator1.goToFloor(0);
      elevator1.goToFloor(1);
      elevator1.goToFloor(2);
      elevator1.goToFloor(3);
      elevator1.goToFloor(4);
    });

    elevator2.on("idle", function() {
      elevator2.goToFloor(4);
      elevator2.goToFloor(3);
      elevator2.goToFloor(2);
      elevator2.goToFloor(1);
      elevator2.goToFloor(0);
    });
  },
  update: function(dt, elevators, floors) {
    // We normally don't need to do anything here
  }
}
