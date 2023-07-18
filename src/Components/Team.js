import React from 'react'
import parth from '../img/team/20220519_165839.jpg'
import ayushi from '../img/team/1000018094.jpg'
import linkedin from '../img/icons/linkedin (1).png';
import instagram from '../img/icons/instagram (1).png';
import twitter from '../img/icons/twitter.png';
import facebook from '../img/icons/facebook.png';
const Team = () => {
  return (
    <div id='team'>
      
      <div className='team-section' >
        <div className='container'>
            <div className="team-header">
                <div className='team-header-title'><h2>TEAM</h2></div>
                <p className='team-paragraph'>"We are the BMP Infotech Group team, committed to providing innovative solutions and exceptional service to meet our clients' needs."</p>
                <div className='founders-block'>
                    <div className='founders-block-1'>
                        <div><img src={parth} alt="" /></div>
                        <div className='about-founder'>
                            <h3>Parth vyas</h3>
                            <h5>Chief Executive Officer</h5>
                            <div>
                            <p>As the CEO of BMP Infotech Group, I am a visionary leader committed to driving innovation, delivering exceptional services, and maximizing value for our clients.</p>
                            </div>
                            <div className='about-founder-icons'>
                                <ul>
                                    <li> <a href=""><img src={twitter} alt="" /></a></li>
                                    <li> <a href=""><img src={facebook} alt="" /></a></li>
                                    <li> <a href=""><img src={instagram} alt="" /></a></li>
                                    <li> <a href=""><img src={linkedin} alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='founders-block-2'>
                        <img src={ayushi} alt="" />
                        <div className='about-founder'>
                            <h3>Ayushi Joshi</h3>
                            <h5>Chief Executive Officer</h5>
                            <div>
                            <p>As the Product Manager of BMP Infotech Group, I am focused on developing innovative technology solutions that meet our clients' needs and exceed their expectations.</p>
                            </div>
                            <div className='about-founder-icons'>
                                <ul>
                                    <li> <a href=""><img src={twitter} alt="" /></a></li>
                                    <li> <a href=""><img src={facebook} alt="" /></a></li>
                                    <li> <a href=""><img src={instagram} alt="" /></a></li>
                                    <li> <a href=""><img src={linkedin} alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      

    </div>
  )
}

export default Team;
