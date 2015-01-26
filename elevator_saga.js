{
  init: function(elevators, floors) {
    var idleElevators = [];
    var queuedFloors = [];

    elevators.forEach(function(elevator) {
      elevator.on('idle', function() {
        if (queuedFloors.length) {
          queuedFloors.forEach(function(floor) {
            elevator.goToFloor(floor);
          });
          queuedFloors = [];
        } else {
          idleElevators.push(elevator);
        }
      });
      elevator.on('floor_button_pressed', function(floor) {
        if (elevator.destinationQueue.indexOf(floor) < 0) {
          elevator.goToFloor(floor);
        }
      });
    });

    floors.forEach(function(floor) {
      floor.on('up_button_pressed', function() {
        var elevator = idleElevators.shift();

        if (elevator) {
          elevator.goToFloor(floor.floorNum());
        } else {
          if (queuedFloors.indexOf(floor.floorNum()) < 0) {
            queuedFloors.push(floor.floorNum());
          }
        }
      });
      floor.on('down_button_pressed', function() {
        var elevator = idleElevators.shift();

        if (elevator) {
          elevator.goToFloor(floor.floorNum());
        } else {
          if (queuedFloors.indexOf(floor.floorNum()) < 0) {
            queuedFloors.push(floor.floorNum());
          }
        }
      });
    });

  },
  update: function(dt, elevators, floors) {
    // We normally don't need to do anything here
  }
}
