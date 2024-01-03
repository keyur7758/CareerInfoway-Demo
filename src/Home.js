import './Home.css'
import Header from './Header';
import Footer from './Footer'
import Address from './Address';
import Box from './Box';
import Carousel from 'react-bootstrap/Carousel';
function Home() {

    return (
        <>
            <Header />
            <div className="sliding-area">
            <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/slide1.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/slide2.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/slide3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/slide4.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
            </div>
            <div className="welcome-area">
                <div className="container">
                    <div className="row">
                        <div className="welcome-title">
                            <h1>Welcome To <strong>Career</strong> Infoway</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="paragrapgh-area">
                <div className="container">
                    <div className="paragraph-box">
                        <p>Career Infoway is a global Web Development & Web Design company focused on Word press web development, E-Commerce web development, Mobile Application Development and SEO Company in Rajkot.

                        </p>
                        <p>Career Infoway is a group entity, is developed to focus on providing corporate training to students who look up to build their career in the corporate world. It is a cutting edge training program which exports you from your classroom right into the corporate world of real time programming. The program tries to bridge the gap between the academic knowledge that students pursue from colleges and the actual practical implementation which is required in the corporate IT world and industry at large.
                        </p>

                        <p>The specially designed IT training program is highly detail oriented, unique and industry leading which enables you to learn ahead of your syllabus in today's competitive edge and environment.
                        </p>
                    </div>
                </div>
            </div>
            <div className="training-head">
                <div className="container">
                    <div className="training-title">
                        <h1>Our Training Programs</h1>
                    </div>
                </div>
            </div>
            <div className="card-area">
                <div className="container">
                    <div className='row'>
                        <Box />
                    </div>
                </div>
            </div>
            <Address />
            <Footer />
        </>

    )
}
export default Home;