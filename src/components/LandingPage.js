import '../styles/LandingPage.css';
import Navbar from './Navbar';

export default function LandingPage() {
    return <section className='big-container'>
        <Navbar />
        <div className="big-image">
            <div className='text'>
                <span className='small'>the best foodie</span>
                <span className='big'>experience</span>
                <span className='x-small'>now in london</span>
            </div>
        </div>
    </section>
}