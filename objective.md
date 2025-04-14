# Car_Rental_Website

## Objective
The Car Rental Website project aims to provide a user interface for browsing available cars and submitting rental requests. It features a dark mode toggle for improved user experience, dynamic car card generation using data fetched from an external API, and form validation for rental submissions. The project leverages JavaScript for interactivity, DOM manipulation, and asynchronous data fetching.

## Output
<iframe src="https://niat-web.github.io/Car_Rental_Website/" height="1000" width="300" title="Car_Rental_Website"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript, Bootstrap, Font Awesome (for icons)

## Features to Implement
- Dark/Light mode toggle with local storage persistence.
- Dynamic display of car listings fetched from an external API.
- Submission of car rental requests with form validation.

## UI Enhancements
- Display loading indicator while fetching car data.
- Display error messages when data fetching fails.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Implement Dark Mode Toggle | Users can switch between dark and light themes, with the selected theme persisting across sessions. |
| Fetch Car Data from API | Car data is successfully fetched from the API and displayed in the car cards section. |
| Implement Form Validation | The rental form is validated to ensure all required fields are filled correctly. |
| Display Booking Confirmation | Upon successful form submission, a booking notification is displayed to the user. |
| Create Dynamic Car Cards | Each car is rendered as a visually appealing card with details like make, model, year, color, and price. |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| DOM Manipulation | Used to dynamically create and update car cards, display booking notifications, and toggle dark mode. |
| Event Handling | Used to handle form submissions, dark mode toggle clicks, and refresh car button clicks. |
| Asynchronous JavaScript | Used to fetch car data from an external API using `async/await` and `fetch`. |
| Local Storage | Used to persist the user's dark mode preference across sessions. |
| Form Validation | Used to ensure the form is filled before submission |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| freetestapi.com | `/api/v1/cars` | Retrieves an array of car objects. |
| allorigins.win | `/raw?url=[URL]` | Used as a proxy to bypass CORS issues when fetching data from freetestapi.com. |

## MISC Section:

### 1. Formulas/Calculations:
- This project does not use explicit mathematical formulas. The randomization of cars is achieved using `Math.random() - 0.5` within the `sort()` method, which provides a pseudo-random shuffling of the car array before the first six elements are selected. This ensures a different set of cars is displayed each time the page is loaded or refreshed.

### 2. Array Data:
- The code retrieves JSON data from an external API. The data structure is assumed to be an array of car objects, where each car object contains properties such as `make`, `model`, `year`, `color`, `price`, and `image`. A sample structure is as follows:

```json
[
  {
    "id": 1,
    "make": "Toyota",
    "model": "Camry",
    "year": 2018,
    "color": "Silver",
    "price": 18000,
    "image": "https://example.com/toyota-camry.jpg"
  },
  {
    "id": 2,
    "make": "Honda",
    "model": "Civic",
    "year": 2020,
    "color": "Blue",
    "price": 22000,
    "image": "https://example.com/honda-civic.jpg"
  },
    {
    "id": 3,
    "make": "Ford",
    "model": "F-150",
    "year": 2022,
    "color": "Black",
    "price": 35000,
    "image": "https://example.com/ford-f150.jpg"
  }
]
```