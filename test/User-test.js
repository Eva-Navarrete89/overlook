import chai from 'chai';
const expect = chai.expect;
import User from '../src/User';
import Bookings from '../src/Bookings';
import {customerData, bookingsData} from './test-data';

describe('User', () => {
  let user1;

  beforeEach(() => {
    user1 = new User(customerData[0])
  });

  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('Should be an instance of User', () => {
    expect(user1).to.be.an.instanceof(User);
  });

  it('Should have an id', () => {
    expect(user1.id).to.equal(1);
  });

  it('Should have a name', () => {
    expect(user1.name).to.equal('Eva Navarrete');
  })





});
