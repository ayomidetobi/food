import { useState,useEffect } from 'react';
import { useAuth } from './contexts/AuthContext';
import { useParams } from 'react-router-dom';
import './App.css'
import { Link } from "react-router-dom";


import profile_pic from './assets/image/def23.jpg'


import Footer from './components/Footer';

function Userprofile() {
const { getUserProfile } = useAuth();
  const { userId } = useParams(); // Get the userId from the URL
  const [profile, setProfile] = useState('');
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileData = await getUserProfile(userId);
        console.log(profileData)
        setProfile(profileData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    fetchUserProfile();
  }, [userId]); 
  const handleDownload = () => {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${profile.username} 
EMAIL:${profile.email}
TEL:${profile.email}
X-SOCIALPROFILE;type=linkedin:${profile.email} 
X-SOCIALPROFILE;type=facebook:${profile.email}  
END:VCARD
`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      {/* Header */}
      <div className='head mt-4'>
        <p className='text-secondary fw-normal'>{profile.username} profile</p>

        <button className='card-btn 'style={{fontSize:'12px'}}>
          <Link to={"/login"}><i className="bi bi-credit-card"></i> Get Your Card</Link>
        </button>
      </div>
      {/* End of Header */}


      {/* Name */}
      <div className='home-card py-5'>
        
        <div className="row w-100">
          <div className="col-4">
          {profile.profile_picture ? (
            <img src={profile.profile_picture.url} alt="" className="lady " />
              ) : (
            <img src={profile_pic} alt="" className='lady' />
            )}
            
          </div>
          <div className="col-8">
          <div className='details align-middle'>
            
          {profile.business_name ? (
                <h4 className="text-break">{profile.business_name}</h4>
              ) : (
                <h4>Business Name</h4>
              )}

            <div className='d-flex  fs-5'>
              <p className='pe-3 text-secondary'><i className="bi bi-person"></i> {profile.username}</p>
              <p className='text-secondary'><i className="bi bi-person-gear"></i> {profile.occupation}</p>
            </div>
            </div>
          </div>
          
        </div>
        
      </div>
      {/* End of Name */}


      
      <div className='about'>
        <h5>About</h5>
        {profile.about ? <p className='text-secondary-emphasis fw-normal'>{profile.about}</p> : <p className='text-secondary-emphasis fw-normal'>write something about your brand</p>}
      </div>

      <button className='add-btn' onClick={handleDownload}><i className="bi bi-plus-lg me-3"></i> Add Abisola to Contact</button>



      {/* Contact */}
      <div className='contact m-b-200'>
        <h6>Contact handles</h6>

        {/* phone */}
        {profile.phone_number && (
        <div className='phone'>
          <div className='d-flex'>
            <i className="bi bi-telephone-fill i1"></i>
            <a href={`tel:${profile.phone_number}`}>
              <div className='ms-2'>
                <p>{profile.phone_number}</p>
                <small>Phone number</small>
              </div>
            </a>
          </div>

          <i className="bi bi-box-arrow-up-right"></i>
        </div>
      )}
        {/* end of phone */}


        {/* mail */}
        {profile.email && (
        <div className='mail'>
          <div className='d-flex'>
            <i className="bi bi-envelope i1"></i>
            <a href={`mailto:${profile.email}`}>
              <div className='ms-2'>
                <p>{profile.email}</p>
                <small>Email address</small>
              </div>
            </a>
          </div>

          <i className="bi bi-box-arrow-up-right"></i>
        </div>
      )}
        {/* end of mail */}


        {profile.twitter_handle && (
        <div className='twitter'>
          <div className='d-flex'>
            <i className="bi bi-twitter i1"></i>
            <a href={profile.twitter_link}>
              <div className='ms-2'>
                <p>{profile.twitter_handle}</p>
                <small>Twitter</small>
              </div>
            </a>
          </div>

          <i className="bi bi-box-arrow-up-right"></i>
        </div>
      )}
      {/* WhatsApp */}
      {profile.whatsapp_profile && (
        <div className='whatsapp'>
          <div className='d-flex'>
            <i className="bi bi-whatsapp i1"></i>
            <a href={profile.whatsapp_link}>
              <div className='ms-2'>
                <p>{profile.whatsapp_profile}</p>
                <small>WhatsApp</small>
              </div>
            </a>
          </div>

          <i className="bi bi-box-arrow-up-right"></i>
        </div>
      )}
      {profile.instagram_profile && (
        <div className='instagram'>
          <div className='d-flex'>
            <i className="bi bi-instagram i1"></i>
            <a href={profile.instagram_link}>
              <div className='ms-2'>
                <p>{profile.instagram_profile}</p>
                <small>Instagram</small>
              </div>
            </a>
          </div>

          <i className="bi bi-box-arrow-up-right"></i>
        </div>
      )}


        {/* LinkedIn */}
{profile.linkedin_profile && (
  <div className='linkedin'>
    <div className='d-flex'>
      <i className="bi bi-linkedin i1"></i>
      <a href={profile.linkedin_link}>
        <div className='ms-2'>
          <p>{profile.linkedin_profile}</p>
          <small>Linkedin</small>
        </div>
      </a>
    </div>

    <i className="bi bi-box-arrow-up-right"></i>
  </div>
)}

{/* TikTok */}
{profile.tiktok_profile && (
  <div className='tiktok'>
    <div className='d-flex'>
      <i className="bi bi-tiktok i1"></i>
      <a href={profile.tiktok_link}>
        <div className='ms-2'>
          <p>{profile.tiktok_profile}</p>
          <small>Tiktok</small>
        </div>
      </a>
    </div>

    <i className="bi bi-box-arrow-up-right"></i>
  </div>
)}



{/* YouTube */}
{profile.youtube_profile && (
  <div className='youtube'>
    <div className='d-flex'>
      <i className="bi bi-youtube i1"></i>
      <a href={profile.youtube_link}>
        <div className='ms-2'>
          <p>{profile.youtube_profile}</p>
          <small>YouTube</small>
        </div>
      </a>
    </div>

    <i className="bi bi-box-arrow-up-right"></i>
  </div>
)}
{/* Behance */}
{profile.behance_profile && (
  <div className='behance'>
    <div className='d-flex'>
      <i className="bi bi-behance i1"></i>
      <a href={profile.behance_link}>
        <div className='ms-2'>
          <p>{profile.behance_profile}</p>
          <small>Behance</small>
        </div>
      </a>
    </div>

    <i className="bi bi-box-arrow-up-right"></i>
  </div>
)}

{/* Facebook */}
{profile.facebook_profile && (
  <div className='facebook'>
    <div className='d-flex'>
      <i className="bi bi-facebook i1"></i>
      <a href={profile.facebook_link}>
        <div className='ms-2'>
          <p>{profile.facebook_profile}</p>
          <small>Facebook</small>
        </div>
      </a>
    </div>

    <i className="bi bi-box-arrow-up-right"></i>
  </div>
)}

{/* GitHub */}
{profile.github_profile && (
  <div className='github'>
    <div className='d-flex'>
      <i className="bi bi-github i1"></i>
      <a href={profile.github_link}>
        <div className='ms-2'>
          <p>{profile.github_profile}</p>
          <small>Github</small>
        </div>
      </a>
    </div>

    <i className="bi bi-box-arrow-up-right"></i>
  </div>
)}

{/* Snapchat */}
{profile.snapchat_profile && (
  <div className='snapchat'>
    <div className='d-flex'>
      <i className="bi bi-snapchat i1"></i>
      <a href={profile.snapchat_link}>
        <div className='ms-2'>
          <p>{profile.snapchat_profile}</p>
          <small>Snapchat</small>
        </div>
      </a>
    </div>

    <i className="bi bi-box-arrow-up-right"></i>
  </div>
)}

{/* Dribbble */}
{profile.dribbble_profile && (
  <div className='dribbble'>
    <div className='d-flex'>
      <i className="bi bi-dribbble i1"></i>
      <a href={profile.dribbble_link}>
        <div className='ms-2'>
          <p>{profile.dribbble_profile}</p>
          <small>Dribbble</small>
        </div>
      </a>
    </div>

    <i className="bi bi-box-arrow-up-right"></i>
  </div>
)}
{profile.website && (
        <div className='globe2'>
          <div className='d-flex'>
            <i className="bi bi-globe2 i1"></i>
            <div className='ms-2'>
              <p>{profile.website}</p>
              <small>Website</small>
            </div>
            <i className="bi bi-box-arrow-up-right"></i>
          </div>
        </div>
      )}


      </div>
      {/* End of Contact */}


      <Footer />
    </>
  )
}

export default Userprofile;
