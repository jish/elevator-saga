{
  init: function(elevators, floors) {
    var idleElevators = [];

    elevators.forEach(function(elevator) {
      elevator.on('idle', function() {
        idleElevators.push(elevator);
      });
      elevator.on('floor_button_pressed', function(floor) {
        elevator.goToFloor(floor);
      });
    });

    floors.forEach(function(floor) {
      floor.on('up_button_pressed', function() {
        var elevator = idleElevators.shift();
        if (elevator) {
          elevator.goToFloor(floor.floorNum());
        }
      });
    });

  },
  update: function(dt, elevators, floors) {
    // We normally don't need to do anything here
  }
}
