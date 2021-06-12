class User {
  constructor(user){
    this.id = user.id;
    this.name = user.name;
    this.userBookings = [];
    this.bookingCost = 0;

  }
// Methods I think I'll need

retrieveRoomBookings(bookingData) {

  bookingData.filter(id => {
    if(this.id === id.userID) {
      this.userBookings.push(id)
    }
  });
  // console.log(this.userBookings)
  return this.userBookings;

}

calculateRoomCost(roomData) {
  this.userBookings.forEach(bookingInput => {
    console.log('this',bookingInput);
    // console.log('yo',roomData);
    roomData.filter(room => {
      if(room.number === bookingInput.roomNumber) {
        bookingInput.totalCost = room.costPerNight;
        console.log(bookingInput.totalCost);
      };
    });
  });

let roomTotal = this.userBookings.reduce((acc, roomPrice) => {
  return acc += roomPrice.totalCost;
}, 0);
console.log(roomTotal);
return Math.round(roomTotal).toFixed(2);
}



}


export default User;
