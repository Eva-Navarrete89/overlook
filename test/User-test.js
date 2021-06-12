import chai from 'chai';
const expect = chai.expect;
import User from '../src/User';
import Bookings from '../src/Bookings';
import Rooms from '../src/Rooms';
import {
  customerData,
  bookingsData,
  roomData
} from './test-data';

describe('User', () => {
  let user1, user2;
  let room;
  let booking;

  beforeEach(() => {
    user1 = new User(customerData[0])
    user2 = new User(customerData[1])
    // room = new Rooms(roomsData);
    // booking = new Bookings(bookingsData);
    // console.log(room);
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
    expect(user1.bookingCost).to.equal(0);
  });

  it('Should display any bookings user has done', () => {
    user1.retrieveRoomBookings(bookingsData);
    expect(user1.userBookings.length).to.deep.equal(1)
  });

  it('Should Calculate all of user room cost', () => {
    booking = new Bookings(bookingsData[4]);
    user1.userBookings.push(booking);
    user1.calculateRoomCost(roomData);
    expect(user1.bookingCost).to.equal(172.09);
  });



});
