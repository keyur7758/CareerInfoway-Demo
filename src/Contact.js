import './contact.css'
import Header from './Header';
import Footer from './Footer'
import Address from './Address';

function Contact() {
    return (
        <>
            <Header />
            <div className="map-area">
                <div className="map-box">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5380819081215!2d70.76663387529234!3d22.29548097969004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca2fea04e1bd%3A0xfae47ee2149ec714!2sCareer%20Infoway!5e0!3m2!1sen!2sin!4v1695562913330!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="title-area">
                <div className="container">
                    <div className="title">
                        <h2>Contact Us</h2>
                        <span></span>
                        <p>We'd Love to Hear From You, Get In Touch With Us!</p>

                    </div>
                </div>
            </div>
            <div className="form-area">
                <div className="form">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSct8IXeiihHqXBcl0g7dKV6WNEcHvREIryInTd4CfHJxTrKSA/viewform?embedded=true"  frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                </div>
            </div>
            <Address />
            <Footer />
        </>
    )
}
export default Contact;