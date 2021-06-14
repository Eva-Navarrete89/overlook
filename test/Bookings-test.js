import chai from 'chai';
const expect = chai.expect;
import User from '../src/User';
import Booking from '../src/Bookings';
import Room from '../src/Rooms';
import {customerData, bookingsData, roomData} from './test-data';

describe('Booking', () => {
  let booking1, booking2

  beforeEach(() => {
    booking1 = new Booking(bookingsData[0]);
    booking2 = new Booking(bookingsData[1]);
  });

  it('Should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('Should be an instance of booking', () => {
    expect(booking1).to.be.an.instanceof(Booking);
  });

  it('should have an id', () => {
    expect(booking1.id).to.equal('5fwrgu4i7k55hl6sz');
    expect(booking2.id).to.equal('5fwrgu4i7k55hl6t5');
  });

  it('Should have a users id', () => {
    expect(booking1.userID).to.equal(1);
    expect(booking2.userID).to.equal(1);
  });

  it('Should have a date', () => {
    expect(booking1.date).to.equal('2020/04/22');
    expect(booking2.date).to.equal('2020/01/24');
  });

  it('Should have a room number', () => {
    expect(booking1.roomNumber).to.equal(6);
    expect(booking2.roomNumber).to.equal(5);
  });

  it('Should store room service charges', () => {
    expect(booking1.roomServiceCharges).to.be.an('array');
    expect(booking1.roomServiceCharges.length).to.equal(0);
    expect(booking2.roomServiceCharges).to.be.an('array');
    expect(booking2.roomServiceCharges.length).to.equal(0);
  })

});
