# Poker Pulse

## Description
Poker Pulse is your premier destination for all things poker in the heart of Las Vegas and beyond. Whether you're a seasoned pro or just starting out, our app provides a comprehensive platform to explore, track, and participate in the best poker tournaments across the city. With Poker Pulse, users can easily search for tournaments based on their preferences such as type, venue, entry fee, and guaranteed prize pools.

Our platform allows you to view detailed information about each event, including dates, times, and special features, while also enabling you to schedule and manage your poker calendar effortlessly. With features like real-time updates, personalized schedules, and interactive filters, Poker Pulse ensures you never miss out on the action.

Designed with the poker community in mind, Poker Pulse aims to enhance your gaming experience by providing a space where you can connect with fellow enthusiasts, share experiences, and even track your tournament history. Whether you're looking to join your first tournament or you're planning a series of high-stakes games, Poker Pulse is your ultimate guide to poker in Las Vegas and beyond.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Future Development](#future-development)
- [Contributing](#contributing)
- [Contact](#contact)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/andrewhamerly/poker-pulse.git
   ```
2. Navigate to the project directory:
   ```sh
   cd poker-pulse
   ```
3. Install dependencies for both client and server:
   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Create a .env file in the server directory and add your environment variables:
   ```env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

5. Start the development server:
   ```sh
   # In the server directory
   npm run dev

   # In the client directory
   npm start
   ```

## Usage
1. Register a new account.
2. Log in to the app.
3. Create or update your player profile with personal details and tournament history.
4. View the event schedule to see upcoming tournaments, including dates, times, and locations.
5. Select a tournament to view comprehensive details such as buy-ins, prize pools, and structure.
6. Mark tournaments as favorites to receive specific notifications about those events. (Coming Soon)
7. Receive real-time notifications for important updates such as schedule changes, start times, or delays. (Coming Soon)

## Features
- **User Registration and Authentication:**
  - Users can register with a unique username, email address, and password.
  - Confirmation message upon successful registration.
  - Users can log in to access their account.

- **Profile Management:**
  - Players can create and update their profiles.
  - Profiles include personal details, tournament history, and stats.

- **Event Schedule:**
  - Players can view a list of upcoming tournaments, including dates, times, and locations.

- **Tournament Details:**
  - Detailed view of tournaments including buy-ins, prize pools, and structure.

- **Real-time Notifications:** (Coming Soon)
  - Players receive notifications for important updates such as schedule changes, start times, or delays.

- **Favorite Tournaments:** (Coming Soon)
  - Players can mark tournaments as favorites to receive specific notifications about those events.

- **Responsive Design:**
  - The app is designed to provide a seamless user experience across desktops, tablets, and smartphones.

## Technologies Used
- **Frontend:**
  - React
  - Apollo Client
  - Tailwind CSS
  - Chakra UI

- **Backend:**
  - Node.js
  - Express.js
  - GraphQL
  - Apollo Server
  - MongoDB
  - Mongoose

- **Authentication:**
  - JWT (JSON Web Tokens)

- **Deployment:**
  - Render

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Future Development

Personalized Notifications and Alerts:

* Users could receive alerts when a new event is added that matches their preferences, or reminders for events they've shown interest in or added to their schedule.

* This feature would keep users informed about relevant events, ensuring they don't miss out on tournaments they might be interested in. It can enhance user engagement with timely, personalized content.

Advanced Search and Filters:

* Expand the search functionality to include more filters such as searching by prize pools, or even events their friends are attending. Include features like saving search preferences or creating custom filters.

* This would povide users with powerful tools to find exactly the events they're interested in, tailored to their specific poker preferences, enhancing the usability and personalized feel of the app.

Social Features:

* Integrate social features such as the ability to see which events friends are attending, share events on social media, or even form groups within the app to discuss upcoming tournaments or share results.

* By adding social features, we can enhance community building within the app, making it not just a tool for finding events but a platform for connecting with other poker enthusiasts. This can increase user retention and deepen engagement.

User Profiles and Stats:

* Allow users to create profiles where they can track their event participation, results, and rankings. Profiles could also display favorite venues and event types, and historical performance statistics.

* Personal profiles would not only help users keep track of their own gaming history but also enable them to compare and compete with friends and other community members, adding a competitive element to the app.

Venue Reviews and Ratings:

* Users can leave reviews and rate venues based on their experiences. Include details such as table quality, dealer professionalism, and overall atmosphere.

* Helps users make informed decisions about which events to attend based on community feedback. This feature can also foster a more engaged community as users contribute valuable insights.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. 

For major changes, please open an issue first to discuss what you would like to change.

## Contact
For any questions or feedback, please reach out to us at:
- **Email:** support@vegaspokerpulse.com
- **GitHub:** [AndrewHamerly](https://github.com/andrewhamerly), TO DO: Add Collaborators GitHub Links.
