import './Address.css'

function Address(){
    return(
        <div className="business-area">
                    <div className="row g-0">
                        <div className="col-sm-6 col-md-6 col-lg-3 border-line">
                            <div className="business-detail">
                                <i class="fa-solid fa-rocket"></i>
                                <h4>Center Address</h4>
                                <p>114-"Aadarsh Plaza", 150ft. Ring Road, Near Raiya <br />Telephone Exchange, Rajkot</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 border-line">
                            <div className="business-detail">
                                <i class="fa-solid fa-phone"></i>
                                <h4>Call Us On</h4>
                                <p className='callus'>(+91) 88663 02262</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 border-line">
                            <div className="business-detail">
                                <i class="fa-solid fa-envelope"></i>
                                <h4>Send Your Message</h4>
                                <p>inquiry@careerinfoway.com <br />
                                    careerinfoway99@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 border-line">
                            <div className="business-detail">
                                <i class="fa-regular fa-clock"></i>
                                <h4>Business Hours</h4>
                                <p>Mon - Sat: 10am - 7pm.</p>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default Address;