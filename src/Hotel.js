class Hotel {
  constructor(roomData, bookingsData) {
    this.bookings = bookingsData;
    this.rooms = roomData;
    this.roomsAvailable = [];
    // console.log(this.allBookings);
  }

  checkRoomAvailabilityByDate(date) {
    // console.log(this.bookings)
    let notAvailableRoom = []
    let filterByDate = this.bookings.filter(booking => {
      // console.log(booking.date)
      if(booking.date === date) {
        notAvailableRoom.push(booking.roomNumber)
      }
    })

    console.log("notAva", notAvailableRoom);
    // console.log(filterByDate);
    return filterByDate;

   // I need to go through the data set that has a date ---> bookingsData.date
   // I get a room nuber that is not available
   // iterate through the roomsData and filter room 6
   // return other rooms not matching room 6
   // output: rooms that are available
  }

  checkRoomAvailabilityByType() {

  }


}






export default Hotel;
