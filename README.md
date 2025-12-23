# 🧠 Interactive Memory Match Game

A sleek, responsive memory card game built with **Vanilla JavaScript** and **Vite**. This project focuses on DOM manipulation, state management, and CSS 3D transformations.

---

## 🚀 Features

- **3D Flip Animation:** Smooth card flipping using CSS `perspective` and `backface-visibility`.
- **Game Logic:** Prevents double-clicking the same card and handles board locking during mismatched animations.
- **Randomized Layout:** Cards are shuffled dynamically on every page load and reset.
- **Win Celebration:** Integrated with `canvas-confetti` for a visual celebration upon completing all 8 pairs.
- **Instant Replay:** A "Play Again" feature that resets the game state without refreshing the page.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Grid & 3D Transforms)
- **Scripting:** Vanilla JavaScript (ES6+)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Library:** [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone (https://github.com/moradhi/memory-card-game.git)

2. Navigate into the directory:
   cd memory-game

3. Install dependencies
  Make sure you have Node.js installed, then run:
    npm install

4. Run the development server
   npm run dev
Click the local link provided in the terminal (usually http://localhost:5173) to view the game.

## 🎮 How to Play
Step 1: Start the Game
The game loads with all cards face down. The layout is automatically shuffled using a random grid order.

Step 2: Reveal Cards
Click on any card to flip it and reveal the icon.

Click a second card to find its matching pair.

Step 3: Match or Mismatch
Match: If the icons are identical, the cards remain flipped and are disabled from further clicks.

Mismatch: If they do not match, the board "locks" for 800ms, and the cards flip back over automatically.

Step 4: Win & Reset
Successfully match all 8 pairs to trigger a confetti celebration.

Click the "Play Again" button to reshuffle the board and start a new round.

🧠 Key Concepts Learned
Event Handling: Managing named function references (handleCardsClicked) to effectively add and remove event listeners.

State Management: Using boolean flags like lockBoard and hasFlippedCard to control user interaction flow.

Data Attributes: Utilizing data-name attributes to identify and compare card identities.

CSS Grid & 3D: Implementing a responsive grid and using transform-style: preserve-3d for the flip effect.
