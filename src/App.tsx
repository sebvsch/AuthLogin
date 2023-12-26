import React from 'react'
import { Link } from 'react-router-dom'

function App() {
    return (
        <>
            <h1>App</h1>
            <div className='text-blue-600 underline'>
                <div>
                    <Link to="/login">Login</Link>
                </div>
                <div>
                    <Link to="/registrar">Registrar</Link>
                </div>
            </div>
        </>
    )
}

export default App