export const fetchCalls = {

  fetchUserData() {
    return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    .then(data => data.customers)
    .catch(err => displayErr(err))
  },

  fetchRoomData() {
    return fetch('http://localhost:3001/api/v1/rooms')
    .then(response => response.json())
    .then(data => data.rooms)
    .catch(err => displayErr(err))
  },

  fetchBookingData() {
    return fetch('http://localhost:3001/api/v1/bookings')
    .then(response => response.json())
    .then(data => data.bookings)
    .catch(err => displayErr(err))
  },

  postNewRoomBooking(body) {
      return fetch('http://localhost:3001/api/v1/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
      })
        // .then(response => response) CHECKK THIS OUT!! 
    }
  }

  // const displayErr = (err) => {
  //   if(err.message === 'Failed to fetch')
  //   }
  // }
