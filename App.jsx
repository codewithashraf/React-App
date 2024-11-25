import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './context/themeContext'

export default function App() {
  return (
      <ThemeProvider>
        <Header />
        <Outlet /> 
      </ThemeProvider>
  )
}
