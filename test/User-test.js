import chai from 'chai';
const expect = chai.expect;
import User from '../src/User';
import Booking from '../src/Bookings';
import Room from '../src/Rooms';
import {
  customerData,
  bookingsData,
  roomData
} from './test-data';

describe('User', () => {
  let user1, user2;
  let room;
  let booking, booking2;

  beforeEach(() => {
    user1 = new User(customerData[0])
    user2 = new User(customerData[1])
  });

  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('Should be an instance of User', () => {
    expect(user1).to.be.an.instanceof(User);
  });

  it('Should have an id', () => {
    expect(user1.id).to.equal(1);
    expect(user2.id).to.equal(2);
  });

  it('Should have a name', () => {
    expect(user1.name).to.equal('Eva Navarrete');
    expect(user2.name).to.equal('Lindsay Parker')
  });

  it('Should start with no booking', () => {
    expect(user1.userBookings).to.deep.equal([]);
    expect(user2.userBookings).to.deep.equal([]);
  });

  it('should dafault to 0 booking cost', () => {
    expect(user1.totalBookingCost).to.equal(0);
  });

  it('Should display any bookings user has done', () => {
    user1.retrieveRoomBookings(bookingsData);
    expect(user1.userBookings).to.deep.equal([{
        id: '5fwrgu4i7k55hl6sz',
        userID: 1,
        date: '2020/04/22',
        roomNumber: 6,
        roomServiceCharges: []
      },
      {
        id: '5fwrgu4i7k55hl6t5',
        userID: 1,
        date: '2020/01/24',
        roomNumber: 5,
        roomServiceCharges: []
      },
      {
        id: '5fwrgu4i7k55hl6t8',
        userID: 1,
        date: '2020/02/05',
        roomNumber: 1,
        roomServiceCharges: []
      },
      {
        id: '5fwrgu4i7k55hl6tc',
        userID: 1,
        date: '2020/01/30',
        roomNumber: 3,
        roomServiceCharges: []
      }
    ]);
  });

  it('Should Calculate all of user room cost', () => {
    booking = new Booking(bookingsData[1]);
    user1.userBookings.push(booking);
    user1.calculateRoomCost(roomData);
    expect(user1.totalBookingCost).to.equal(340.17);
  });



});
