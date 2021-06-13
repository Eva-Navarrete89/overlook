import chai from 'chai';
const expect = chai.expect;
import User from '../src/User';
import Bookings from '../src/Bookings';
import Rooms from '../src/Rooms';
import Hotel from '../src/Hotel';
import {
  customerData,
  bookingsData,
  roomData
} from './test-data';

describe('Hotel', () => {
  let user;
  let room;
  let booking;
  let hotel;

  beforeEach(() => {
    user = new User(customerData[0]);
    room = new Rooms(roomData[0]);
    booking = new Bookings(bookingsData);
    hotel = new Hotel(user, room, booking);
    console.log(user);
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('Should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  // Methods I might need!!

// checkRoomAvailability


});
