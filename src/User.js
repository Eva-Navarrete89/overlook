class User {
  constructor(user, customer){
    this.id = user.id;
    this.name = user.name;
    this.customer = customer;
    this.userBookings = [];
  }
}





export default User;
