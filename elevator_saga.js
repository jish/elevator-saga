{
  init: function(elevators, floors) {

    function randomFloor() {
      return Math.floor(Math.random() * elevators.length);
    }

    elevators.forEach(function(elevator) {
      elevator.on('idle', function() {
        elevator.goToFloor(randomFloor());
      });
      elevator.on('floor_button_pressed', function(floor) {
        elevator.goToFloor(floor);
      });
    });

  },
  update: function(dt, elevators, floors) {
    // We normally don't need to do anything here
  }
}
