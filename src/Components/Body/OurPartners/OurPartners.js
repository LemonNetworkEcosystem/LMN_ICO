import React from 'react'

//images
import PartnerA from '../../../assets/images-main/partners/a-xs.png'
import PartnerB from '../../../assets/images-main/partners/b-xs.png'
import PartnerC from '../../../assets/images-main/partners/c-xs.png'
import PartnerD from '../../../assets/images-main/partners/d-xs.png'
import PartnerE from '../../../assets/images-main/partners/e-xs.png'

const OurPartners = () => {
    return (
        <div className="container">
            <div className="nk-block block-partners">
                <div className="section-head section-head-xs">
                    <h6 className="title title-xs text-center animated" data-animate="fadeInUp" data-delay=".1">
                        Our Partners</h6>
                </div>
                <ul className="partner-list flex-lg-nowrap">
                    <li className="partner-logo-s3 animated" data-animate="fadeInUp" data-delay=".2"><img
                        src={PartnerA} alt="partner" /></li>
                    <li className="partner-logo-s3 animated" data-animate="fadeInUp" data-delay=".25"><img
                        src={PartnerB} alt="partner" /></li>
                    <li className="partner-logo-s3 animated" data-animate="fadeInUp" data-delay=".3"><img
                        src={PartnerC} alt="partner" /></li>
                    <li className="partner-logo-s3 animated" data-animate="fadeInUp" data-delay=".35"><img
                        src={PartnerD} alt="partner" /></li>
                    <li className="partner-logo-s3 animated" data-animate="fadeInUp" data-delay=".4"><img
                        src={PartnerE} alt="partner" /></li>
                
                </ul>
            </div>
        </div>
    )
}

export default OurPartners
