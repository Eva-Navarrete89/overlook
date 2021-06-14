import chai from 'chai';
const expect = chai.expect;
import User from '../src/User';
import Booking from '../src/Bookings';
import Room from '../src/Rooms';
import Hotel from '../src/Hotel';
import {
  customerData,
  bookingsData,
  roomData
} from './test-data';

describe('Hotel', () => {
  let user1, user2
  let hotel;

  beforeEach(() => {
    user1 = new User(customerData[0]);
    user2 = new User(customerData[1]);
    hotel = new Hotel(roomData, bookingsData);
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('Should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('Should hold all room data', () => {
    expect(hotel.rooms).to.equal(roomData);
  });

  it('Should hold all booking data', () => {
    expect(hotel.bookings).to.equal(bookingsData);
  });

  it('Should have start with empty room available array', () => {
    expect(hotel.roomsAvailable).to.deep.equal([]);
  })

  it('Should check all room availablity by date', () => {
    let availableByDate = hotel.checkRoomAvailabilityByDate("2020/01/11");
    console.log("availableByDate", availableByDate)
    expect(availableByDate).to.deep.equal([])
  });

  it('Should check all room availablity by type', () => {
    hotel.checkRoomAvailabilityByType();
    expect(this)
  });

  // Methods I might need!!

// checkRoomAvailability
// checkRoomAvailabilityByDate


});
