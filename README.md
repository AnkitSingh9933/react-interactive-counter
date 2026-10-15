# ⚡ PulseCount — Modular Interactive Counter

A modern, responsive, and resilient counter application built with React and Tailwind CSS. Designed with clean component composition, lifting state up, controlled inputs, and type-safe updates.

## 🚀 Live Demo

[https://pulsecount-anku.netlify.app/](https://pulsecount-anku.netlify.app/)

## ✨ Features

- 🔄 **Modular Component Architecture**: Decoupled container and presentational components (`Counter`, `CounterDisplay`, `StepController`, `CounterControls`).
- 🎯 **Lifting State Up Pattern**: Single source of truth managed at the parent container with event contracts.
- 🛡️ **Type-Safe Calculations**: Resilient state updates preventing string concatenation bugs and NaN values.
- ⚡ **Dynamic Step Controller**: Custom step adjustment with min/max range controls.
- 🟢 **Derived State Status Badge**: Real-time polarity feedback (Positive, Negative, Zero) without redundant state variables.
- 📱 **Fully Responsive Layout**: Mobile-first design optimized across handheld devices, tablets, and desktops.
- 🎨 **Glassmorphism Dark Theme**: Modern UI aesthetics using Tailwind CSS backdrop blurs and subtle borders.

## 🛠️ Work in Progress & Future Additions

I am continuously improving this project as part of my React core concepts learning journey:

- ⏳ **Custom Hook (`useCounter`)**: Extracting count and step state logic into a reusable hook.
- 💾 **LocalStorage Persistence**: Auto-saving counter values across browser refreshes using `useEffect`.
- ⌨️ **Keyboard Shortcuts**: Arrow key support for increment, decrement, and reset actions.
- 📊 **Step History**: Visual timeline of recent count changes.

## 🛠️ Tech Stack

- **React.js (Vite)**
- **Tailwind CSS**
- **JavaScript (ES6+)**

## 🧠 Concepts Used

- **React State (`useState`)**
- **Lifting State Up & Unidirectional Data Flow**
- **Controlled Components & Input Binding**
- **Derived State (Zero-overhead UI updates)**
- **Event Callbacks vs Direct Setters**
- **Type Coercion Safeguards (`Number()` parsing)**
- **Functional State Updates (`(prev) => prev + step`)**
- **Responsive Flexbox & Grid Systems**

## 📁 Project Structure

```text
react-counter/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Counter.jsx
│   │   ├── CounterDisplay.jsx
│   │   ├── CounterControls.jsx
│   │   └── StepController.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```
