# Expensiland

Expensiland is a modern, reliable mobile application designed for tracking personal expenses. Built with offline-first capabilities in mind, it uses local storage for data persistence—providing a seamless and robust user experience.

## 🛠 Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) & [Expo](https://expo.dev/) (SDK 51)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) for file-based routing
- **Local Database**: [SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/) (`expo-sqlite` & `react-native-sqlite-storage`)
- **Data Fetching & State**: [React Query](https://react-query.v3.tanstack.com/) (`v3`)
- **UI & Animations**: `react-native-reanimated`, `react-native-gesture-handler`, and `react-native-calendars`

## 🏗 Technical Overview & Architecture

- **Offline Storage**: The project uses **SQLite** to manage transactions and expense history directly on the user's device. No constant internet connectivity or external API backend is strictly required for core functionality.
- **State Management**: **React Query** wraps local database queries to manage the state. This simplifies syncing the local data to the UI efficiently and leverages caching and optimistic updates naturally.
- **File-Based Routing**: Application screens are mapped to the file system inside the `app/` directory (Expo Router), providing a standardized URL-like navigation experience and easily enabling deep-linking.
- **Build Services**: The project config (`app.json`, `eas.json`) is optimized for the **EAS (Expo Application Services)** workflow, providing a smooth path from local development to over-the-air updates or native app distribution.

## 🚀 Getting Started

Follow these steps to get the project up and running locally.

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- iOS Simulator (Mac only), Android Studio Emulator, or a physical mobile device with **Expo Go** installed.

### Installation

1. Navigate to the project directory:
   ```bash
   cd expensiland
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npx expo start
   ```

### Running the App

After starting the server, you will see a QR code in the terminal. You have several options:
- **Physical Device**: Scan the QR code using the camera on your phone (if you have the **Expo Go** app).
- **iOS Simulator**: Press `i` in the terminal to launch.
- **Android Emulator**: Press `a` in the terminal to launch.
