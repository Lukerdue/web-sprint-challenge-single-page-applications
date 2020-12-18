import React from 'react';
import { Link } from 'react-router-dom'

function Home(){
    return(
        <div className="home">
            <header>
                <div className="hero">
                    <nav>
                        <a href="#">Home</a>
                        <a href="#">Pizza</a>
                    </nav>
                    <div>
                        <h3>Hungry?</h3>
                        <Link to="/pizza"><button>Pizza?</button></Link>
                    </div>
            </div>
            </header>
        </div>
    )
}
export default Home;