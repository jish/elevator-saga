{
  init: function(elevators, floors) {
    var elevator1 = elevators[0];
    var elevator2 = elevators[1];

    function randomFloor() {
      return Math.floor(Math.random() * elevators.length);
    }

    elevator1.on("idle", function() {
      elevator1.goToFloor(randomFloor());
    });
    elevator1.on('floor_button_pressed', function(floor) {
      elevator1.goToFloor(floor);
    });

    elevator2.on("idle", function() {
      elevator2.goToFloor(randomFloor());
    });
    elevator2.on('floor_button_pressed', function(floor) {
      elevator2.goToFloor(floor);
    });
  },
  update: function(dt, elevators, floors) {
    // We normally don't need to do anything here
  }
}
