import '../styles/LandingPage.css';
import Navbar from './Navbar';

export default function LandingPage() {
    return <section className='big-container'>
        <Navbar />
        <div className="big-image">
            <h1>the best foodie experience</h1>
            <h3>now in london</h3>
        </div>
    </section>
}