import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from './hooks/themeContext'
import App from './App'
import 'toasted-notes/src/styles.css'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
