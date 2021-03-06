const customerData = [
  {
   "id": 1,
   "name": "Eva Navarrete"
 },
 {
   "id": 2,
   "name": "Lindsay Parker"
 },
 {
   "id": 3,
   "name": "Hannah Hudson"
 }
];
const roomData = [
  {
     "number": 1,
     "roomType": "residential suite",
     "bidet": true,
     "bedSize": "queen",
     "numBeds": 1,
     "costPerNight": 358.4
   },
   {
     "number": 2,
     "roomType": "suite",
     "bidet": false,
     "bedSize": "full",
     "numBeds": 2,
     "costPerNight": 477.38
   },
   {
     "number": 3,
     "roomType": "single room",
     "bidet": false,
     "bedSize": "king",
     "numBeds": 1,
     "costPerNight": 491.14
   },
   {
     "number": 4,
     "roomType": "single room",
     "bidet": false,
     "bedSize": "queen",
     "numBeds": 1,
     "costPerNight": 429.44
   },
   {
     "number": 5,
     "roomType": "single room",
     "bidet": true,
     "bedSize": "queen",
     "numBeds": 2,
     "costPerNight": 340.17
   },
   {
   "number": 6,
   "roomType": "single room",
   "bidet": false,
   "bedSize": "twin",
   "numBeds": 2,
   "costPerNight": 172.09
 },

];

const bookingsData = [
  {
    "id": "5fwrgu4i7k55hl6sz",
    "userID": 1,
    "date": "2020/04/22",
    "roomNumber": 6,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6t5",
    "userID": 1,
    "date": "2020/01/24",
    "roomNumber": 5,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6t6",
    "userID": 2,
    "date": "2020/01/10",
    "roomNumber": 4,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6t7",
    "userID": 2,
    "date": "2020/02/16",
    "roomNumber": 3,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6t8",
    "userID": 1,
    "date": "2020/02/05",
    "roomNumber": 1,
    "roomServiceCharges": []
  },
  {
   "id": "5fwrgu4i7k55hl6t9",
   "userID": 3,
   "date": "2020/02/14",
   "roomNumber": 2,
   "roomServiceCharges": []
 },
 {
   "id": "5fwrgu4i7k55hl6ta",
   "userID": 3,
   "date": "2020/01/11",
   "roomNumber": 6,
   "roomServiceCharges": []
 },
 {
   "id": "5fwrgu4i7k55hl6tb",
   "userID": 2,
   "date": "2020/02/06",
   "roomNumber": 5,
   "roomServiceCharges": []
 },
 {
   "id": "5fwrgu4i7k55hl6tc",
   "userID": 1,
   "date": "2020/01/30",
   "roomNumber": 3,
   "roomServiceCharges": []
 },
];

export {customerData, roomData, bookingsData};
