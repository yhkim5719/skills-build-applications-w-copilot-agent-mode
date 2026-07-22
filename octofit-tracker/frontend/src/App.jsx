import './App.css'
import { Link, Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
          <p className="lead text-muted">
            A modern multi-tier fitness experience for teams, workouts, and leaderboards.
          </p>
          <div className="d-flex gap-3 mt-4">
            <Link className="btn btn-primary" to="/dashboard">Open dashboard</Link>
            <a className="btn btn-outline-secondary" href="http://localhost:8000/api/health">
              Check API health
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="h4">Why OctoFit?</h2>
              <ul className="mb-0">
                <li>Track activities and workouts</li>
                <li>Build teams and leaderboards</li>
                <li>Connect to a Node.js + MongoDB backend</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="container py-5">
      <h1 className="display-6 fw-semibold">Dashboard</h1>
      <p className="text-muted">This is a placeholder dashboard for the OctoFit experience.</p>
      <Link className="btn btn-outline-primary" to="/">Back home</Link>
    </div>
  )
}

function App() {
  return (
    <div className="min-vh-100 bg-light">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
