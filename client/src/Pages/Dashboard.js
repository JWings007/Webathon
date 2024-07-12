import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/add-stocks')}>Dashboard</div>
  )
}

export default Dashboard