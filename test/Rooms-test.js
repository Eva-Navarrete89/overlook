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

describe('Rooms', () => {
  let room1, room2;

  beforeEach(() => {
    room1 = new Rooms(roomData[0]);
    room2 = new Rooms(roomData[1])
  });
    it('Shouldshould be a function', () => {
      expect(Rooms).to.be.a('function');
    });

    it('should be an instance of Room', () => {
      expect(room1).to.be.an.instanceof(Rooms)
    });

    it('Should have a room number', () => {
      expect(room1.number).to.equal(1);
      expect(room2.number).to.equal(2);
    });

    it('Should have a room type', () => {
      expect(room1.roomType).to.equal('residential suite');
      expect(room2.roomType).to.equal('suite');
    });

    it("should state if it has bidet", () => {
      expect(room1.bidet).to.equal(true);
      expect(room2.bidet).to.equal(false);
    });

    it('Should have a bed size', () => {
      expect(room1.bedSize).to.equal('queen');
      expect(room2.bedSize).to.equal('full');
    });

    it('Should have a number of beds', () => {
      expect(room1.numBeds).to.equal(1);
      expect(room2.numBeds).to.equal(2);

    });

    it('Should have a cost per night', () => {
      expect(room1.costPerNight).to.equal(358.4);
      expect(room2.costPerNight).to.equal(477.38);
    });

    it('Should check room availablity', () => {
      // expect(room1.isAvailable).to.equal();
      // expect(room2.isAvailable).to.equal();
    });

});
