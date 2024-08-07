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
   # In the project directory
   npm run develop
   ```

## Usage
1. Register a new account.
2. Log in to the app.
3. Create or update your player profile with personal details and tournament history.
4. View the event schedule to see upcoming tournaments, including dates, times, and locations.
5. Select a tournament to add it to your personal player schedule.
6. Mark tournaments as favorites to receive specific notifications about those events. (Coming Soon)
7. Players receive reminders for important updates regarding a players personal event schedule. (Coming Soon)

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

- **Player Schedule:**
  - Detailed view of tournaments that player is looking to be a part of their schedule.

- **Favorite Tournaments:**
  - Players can mark tournaments as favorites to receive specific notifications about those events.

- **Responsive Design:**
  - The app is designed to provide a seamless user experience across desktops, tablets, and smartphones.
 
- **Real-time Reminders:** (Coming Soon)
  - Players receive reminders for important updates regarding a players personal event schedule.

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
  - GitHub Repo

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. 

For major changes, please open an issue first to discuss what you would like to change.

## Contact
For any questions or feedback, please reach out to us at:
- **Email:** (Email Coming Soon)
- **GitHub:** [Chris Lose](https://github.com/chrislose23), [John Doyle](https://github.com/JohnTD796), [Brendan Trepal](https://github.com/BeeCeeTee), [Avery Gallagan](https://github.com/averygallagan), [Tim Watson](https://github.com/tawatson02), [Andrew Hamerly](https://github.com/andrewhamerly)
