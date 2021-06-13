class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.userBookings = [];
    this.bookingCost = 0;

  }
  // Methods I think I'll need

  retrieveRoomBookings(bookingData) {

    bookingData.filter(booking => {
      if (this.id === booking.userID) {
        this.userBookings.push(booking);
      }
    });
    // console.log(this.userBookings)
    return this.userBookings;

  }

  calculateRoomCost(roomData) {
    this.userBookings.forEach(bookingInput => {
      // console.log('booking input',bookingInput);
      roomData.filter(room => {
        if (room.number === bookingInput.roomNumber) {
          bookingInput.totalCost = room.costPerNight;
          // console.log(bookingInput);
        };
      });
    });

    let roomTotal = this.userBookings.reduce((acc, bookingPrice) => {
      return acc += bookingPrice.totalCost;
    }, 0);

    return this.bookingCost = roomTotal;
    // return Math.round(roomTotal).toFixed(2);
  }



}


export default User;
