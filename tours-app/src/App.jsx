import './css/style.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tools from './components/Tools';

function App() {

return (
// navbar 
<>
<Navbar />
{/* hero  */}
<Hero />
{/* about */}
<About />
{/* services */}
<Services />
{/* tour section  */}
<Tools />
{/* footer  */}
<Footer />
    </>
)

}
export default App



