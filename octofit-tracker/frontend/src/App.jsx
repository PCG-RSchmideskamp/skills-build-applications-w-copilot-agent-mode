import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import logo from './assets/octofitapp-small.png'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navItems = [
  { to: '/users', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' },
]

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src={logo} alt="OctoFit logo" height="36" />
            OctoFit Tracker
          </NavLink>
          <ul className="navbar-nav flex-row flex-wrap gap-3">
            {navItems.map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <NavLink className="nav-link" to={to}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<p className="text-muted">Page not found.</p>} />
        </Routes>
      </main>
    </>
  )
}

export default App
