# Vegas Poker Pulse

## Description
Vegas Poker Pulse is a companion app designed for poker players and fans participating in live tournaments in Las Vegas. The app allows players to manage their profiles, track tournament schedules, and receive real-time updates. This ensures that players and attendees stay organized and informed throughout their playing experience.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/andrewhamerly/vegas-poker-pulse.git
   ```
2. Navigate to the project directory:
   ```sh
   cd vegas-poker-pulse
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
  - CSS

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

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. 

For major changes, please open an issue first to discuss what you would like to change.

## Contact
For any questions or feedback, please reach out to us at:
- **Email:** support@vegaspokerpulse.com
- **GitHub:** [AndrewHamerly](https://github.com/andrewhamerly), TO DO: Add Collaborators GitHub Links.
