
# Fan Ball-Catch Probability Map at Truist Park (Prototype)

[**Live Demo**](https://samgrowth.github.io/fan-catch-probability/)

This project is an interactive D3.js web app for visualizing where home runs and foul balls land at Truist Park, with overlays for catch probability. It is designed for demo and educational purposes, using mostly mock data inspired by MLB Statcast.

## How It Works

- **index.html** is the main file. Open it in a browser to use the app.
- The app loads a Truist Park SVG and overlays hit data from CSV files for each player.
- Use the dropdowns to filter by contact type (All, Home Runs, Foul Balls) and by player (or All players).
- Dots represent where balls landed. Hover for details (type, exit velocity, distance for home runs).
- The Play button animates each hit from home plate to its landing spot.
- The overlay button toggles a grid showing the percentage of balls in each area (for HR or FOUL only).
- The legend is clickable to quickly filter for Home Runs or Foul Balls.
- Player photos show in the top-right (hidden when "All" is selected).

## File Structure

- `index.html` – Main app, UI, and D3 logic
- `truist-field.svg` – SVG background of the stadium
- `*.csv` – Player hit data (partial mock data)
- `*.avif` - Player photos
- `README.md` – This file

## Usage

1. Open `index.html` in your browser.
2. Select a player or "All" to view all data.
3. Filter by hit type using the dropdown or legend.
4. Hover over dots to see details (type, exit velocity, distance if available).
5. Use the Play button to animate hits.

## Notes
- All foul ball data is mock, launch angle is also mock, home run distance and launch angle is mostly real and accurate as of mid-August 2025 from Baseball Savant. For educational and demo purposes only. 
- No backend is required for basic use.
- Created by Sam Morris. Inspired by Baseball Savant.
