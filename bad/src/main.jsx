import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Deliberate Best Practices penalties:
// 1. Deprecations (weight 5)
window.addEventListener('unload', () => {});
try {
  document.domain = window.location.hostname;
} catch (e) {}
try {
  if (navigator.getUserMedia) {
    navigator.getUserMedia({ audio: true }, () => {}, () => {});
  }
} catch (e) {}

// 2. Notification on start (weight 1)
try {
  if (typeof window !== 'undefined' && 'Notification' in window) {
    Notification.requestPermission();
  }
} catch (e) {}

// 3. Geolocation on start (weight 1)
try {
  if (typeof navigator !== 'undefined' && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(() => {}, () => {});
  }
} catch (e) {}

// 4. Console errors (weight 1)
console.error('TrackingBeaconNetworkFailure: 504 Gateway Timeout at https://telemetry-sink.adnetwork.biz/event');
console.error('TypeError: Cannot read properties of undefined (reading "dimensions") in legacy-tracker.js');
console.error('SecurityError: Blocked a frame with origin "http://localhost:5173" from accessing a cross-origin frame.');


// 5. Inspector Issues (weight 1)
try {
  document.cookie = 'untrusted_session_id=corrupted_token; SameSite=None; path=/';
} catch (e) {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
