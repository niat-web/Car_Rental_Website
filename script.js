// script.js
 

 // Dark Mode Toggle Functionality
 document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
 

  const enableDarkMode = () => {
  body.setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', 'dark');
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  };
 

  const disableDarkMode = () => {
  body.removeAttribute('data-theme');
  localStorage.setItem('theme', 'light');
  darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
  };
 

  // Check local storage for theme
  if (localStorage.getItem('theme') === 'dark') {
  enableDarkMode();
  }
 

  darkModeToggle.addEventListener('click', () => {
  if (body.hasAttribute('data-theme')) {
  disableDarkMode();
  } else {
  enableDarkMode();
  }
  });
 

  // Booking Form Submission
  const rentalForm = document.getElementById('rentalForm');
  const bookingNotification = document.getElementById('bookingNotification');
  const bookingsList = document.getElementById('bookingsList');
 

  rentalForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if (rentalForm.checkValidity()) {
  // Simulate adding to upcoming bookings (replace with actual logic)
  const formData = new FormData(rentalForm);
  const bookingDetails = {};
  formData.forEach((value, key) => {
  bookingDetails[key] = value;
  });
 

  //Add booking details to the list
  addBookingToList(bookingDetails);
  bookingNotification.style.display = 'block';
 

  //Clear the form
  rentalForm.reset();
  //Hide the notification after 3 seconds
  setTimeout(() => {
  bookingNotification.style.display = 'none';
  }, 3000);
  } else {
  rentalForm.classList.add('was-validated');
  }
  });
 

  //Function to add booking to the list
  function addBookingToList(booking) {
  const bookingDiv = document.createElement('div');
  bookingDiv.classList.add('col-md-4', 'mb-3');
  bookingDiv.innerHTML = `
  <div class="card">
  <div class="card-body">
  <h5 class="card-title">${booking.name}</h5>
  <p class="card-text">Car Type: ${booking.carType}</p>
  <p class="card-text">Pickup: ${booking.pickupDate}</p>
  <p class="card-text">Return: ${booking.returnDate}</p>
  <p class="card-text">Email: ${booking.email}</p>
  </div>
  </div>
  `;
  bookingsList.appendChild(bookingDiv);
  }
 

  // Function to create car cards dynamically
  function createCarCard(car) {
  const card = document.createElement('div');
  card.classList.add('col-md-4', 'mb-4');
  card.innerHTML = `
  <div class="card">
  <img src="${car.image}" class="card-img-top" alt="${car.make} ${car.model}">
  <div class="card-body">
  <h5 class="card-title">${car.make} ${car.model}</h5>
  <p class="card-text">Year: ${car.year}</p>
  <p class="card-text">Color: ${car.color}</p>
  <p class="card-text">Price: $${car.price}</p>
  </div>
  </div>
  `;
  return card;
  }
 

  // Function to display car data
  function displayCars(cars) {
  const carCardsContainer = document.getElementById('carCards');
  carCardsContainer.innerHTML = ''; // Clear existing cards
  cars.forEach(car => {
  const card = createCarCard(car);
  carCardsContainer.appendChild(card);
  });
  }
 

  // Function to handle API data fetching and display
  async function fetchAndDisplayCars() {
  const loadingIndicator = document.getElementById('loadingIndicator');
  loadingIndicator.style.display = 'block';
  const carCardsContainer = document.getElementById('carCards');
  carCardsContainer.innerHTML = ''; // Clear existing cards
  try {
  const cars = await fetchData('https://freetestapi.com/api/v1/cars');
  if (cars && Array.isArray(cars)) {
  // Shuffle the array and take the first 6 elements
  const shuffledCars = cars.sort(() => Math.random() - 0.5).slice(0, 6);
  displayCars(shuffledCars);
  } else {
  displayError('Failed to fetch or invalid car data.');
  }
  } catch (error) {
  console.error('Error fetching cars:', error);
  displayError('An error occurred while fetching car data.');
  } finally {
  loadingIndicator.style.display = 'none';
  }
  }
 

  async function fetchData(url) {
  try {
  const response = await fetch(url);
  if (response.ok) {
  return await response.json();
  } else {
  const proxyUrl = `https://api.allorigins.win/raw?url=${url}`;
  const proxyResponse = await fetch(proxyUrl);
  if (proxyResponse.ok) {
  return await proxyResponse.json();
  } else {
  return null;
  }
  }
  } catch (error) {
  const proxyUrl = `https://api.allorigins.win/raw?url=${url}`;
  const proxyResponse = await fetch(proxyUrl);
  if (proxyResponse.ok) {
  return await proxyResponse.json();
  } else {
  return null;
  }
  }
  }
 

  // Error Display Function
  function displayError(message) {
  const carCardsContainer = document.getElementById('carCards');
  const errorDiv = document.createElement('div');
  errorDiv.classList.add('alert', 'alert-danger');
  errorDiv.textContent = message;
  carCardsContainer.appendChild(errorDiv);
  }
 

  // Initial car data load
  fetchAndDisplayCars();
 

  // Refresh Cars Button
  const refreshCarsButton = document.getElementById('refreshCars');
  refreshCarsButton.addEventListener('click', fetchAndDisplayCars);
 });