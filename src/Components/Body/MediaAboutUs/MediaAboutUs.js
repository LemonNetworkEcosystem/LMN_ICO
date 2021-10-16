import React from 'react'

//images
import mediaPartner1 from '../../../assets/images-main/partners/a-md.png'
import mediaPartner2 from '../../../assets/images-main/partners/b-md.png'
import mediaPartner3 from '../../../assets/images-main/partners/c-md.png'


const MediaAboutUs = () => {
    return (
        <div className="container">
            <div className="section-head section-head-s4 wide-auto-sm text-center">
                <h2 className="title title-s2 title-s2-alt animated" data-animate="fadeInUp" data-delay=".1">
                    Media Says About Us</h2>
            </div>
            <div className="nk-block animated" data-animate="fadeInUp" data-delay=".2">
                <div className="has-carousel carousel-shadow-fix" data-items="3" data-items-tab-p="2"
                    data-dots="true">
                    <div className="feature feature-center boxed-sm bg-white gradient-background round">
                        <div className="feature-image">
                            <img src={mediaPartner1} alt="" />
                        </div>
                        <div className="feature-text-2">
                            <h5 className="title title-sm font-weight-bold">LEMON is the future of our Social Life
                            </h5>
                            <p>We are building a whole ecosystem where everybody can fit in & take profit from their content.</p>
                        </div>
                    </div>
                    <div className="feature feature-center boxed-sm bg-white gradient-background round">
                        <div className="feature-image">
                            <img src={mediaPartner2} alt="" />
                        </div>
                        <div className="feature-text-2">
                            <h5 className="title title-sm font-weight-bold">
                            LEMON will launch with less than 10 M supply</h5><p>The ICO will contain just 7,5 M LMN, which means the initial circulating supply will be low compared to other market currencies.</p>
                        </div>
                    </div>
                    <div className="feature feature-center boxed-sm bg-white gradient-background round">
                        <div className="feature-image">
                            <img src={mediaPartner3} alt="" />
                        </div>
                        <div className="feature-text-2">
                            <h5 className="title title-sm font-weight-bold">Invest in the tech that will change people’s life</h5>
                            <p>Choose to earn insted of just uploading your content for free. You have the rights over your content, choose control.</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default MediaAboutUs
