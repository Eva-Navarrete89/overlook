// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import { fetchCalls } from './apiCalls';
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/greyroom.jpg'
import './images/dessertRoom.jpg'
import './images/outdoorRoom.jpg'
import './images/beachRoom2.jpg'

console.log('This is the JavaScript entry file - your code begins here.');
let customerData;
let bookingData;
let roomData;


window.onload = generateApiCalls();

function generateApiCalls() {
   fetchCalls.fetchUserData()
  .then(data => {
    console.log(data);
    // console.log('hola', data.usersData.length);
    // const randomUserNum = Math.floor(Math.random() * data.customersData.length);
    // let matchingUser = data.customersData.find((item) => {
    //   if (item.id === randomUserNum) {
    //     return item;
    //   }
    // })
  });
};
