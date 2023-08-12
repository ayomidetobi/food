import { useAuth } from "./contexts/AuthContext";
import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";

import man from './assets/image/man.png'
import flag from './assets/image/nigeria.svg'
import Edit from './components/Edit';
import Footer from './components/Footer';

function profile() {
  const { state,updateUserProfile,getUserProfile } = useAuth();
  const { userId } = useParams(); // Get the userId from the URL
  

const [email, setEmail] = useState('');
const [username, setUsername] = useState('');
const [businessName, setBusinessName] = useState('');
const [about, setAbout] = useState('');
const [country, setCountry] = useState('');
const [profilePicture, setProfilePicture] = useState(null);
const [occupation, setOccupation] = useState('');
const [phone_number, setPhoneNumber] = useState(null);
const [instagram_profile, setInstagramProfile] = useState('');
const [instagram_link, setInstagramLink] = useState('');
const [twitter_profile, setTwitterProfile] = useState('');
const [twitter_link, setTwitterLink] = useState('');
const [linkedin_profile, setLinkedinProfile] = useState('');
const [linkedin_link, setLinkedinLink] = useState('');
const [tiktok_profile, setTiktokProfile] = useState('');
const [tiktok_link, setTiktokLink] = useState('');
const [whatsapp_profile, setWhatsappProfile] = useState('');
const [whatsapp_link, setWhatsappLink] = useState('');
const [youtube_profile, setYoutubeProfile] = useState('');
const [youtube_link, setYoutubeLink] = useState('');
const [behance_profile, setBehanceProfile] = useState('');
const [behance_link, setBehanceLink] = useState('');
const [facebook_profile, setFacebookProfile] = useState('');
const [facebook_link, setFacebookLink] = useState('');
const [github_profile, setGithubProfile] = useState('');
const [github_link, setGithubLink] = useState('');
const [snapchat_profile, setSnapchatProfile] = useState('');
const [snapchat_link, setSnapchatLink] = useState('');
const [dribbble_profile, setDribbbleProfile] = useState('');
const [dribbble_link, setDribbbleLink] = useState('');
const [website, setWebsite] = useState('');
const [selectedPlatform, setSelectedPlatform] = useState(''); // Add this line
  const [socialLink, setSocialLink] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [modalOpen,setModalOpen]=useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    // Fetch user profile data and set initial values for form fields
    const fetchUserProfile = async () => {
      try {
        const profile = await getUserProfile(userId);
        setEmail(profile.email);
      setUsername(profile.username);
      setBusinessName(profile.business_name);
      setAbout(profile.about);
      setCountry(profile.country);
      setProfilePicture(profile.profile_picture);
      setOccupation(profile.occupation);
      setPhoneNumber(profile.phone_number);
      setInstagramProfile(profile.instagram_profile);
      setInstagramLink(profile.instagram_link);
      setTwitterProfile(profile.twitter_profile);
      setTwitterLink(profile.twitter_link);
      setLinkedinProfile(profile.linkedin_profile);
      setLinkedinLink(profile.linkedin_link);
      setTiktokProfile(profile.tiktok_profile);
      setTiktokLink(profile.tiktok_link);
      setWhatsappProfile(profile.whatsapp_profile);
      setWhatsappLink(profile.whatsapp_link);
      setYoutubeProfile(profile.youtube_profile);
      setYoutubeLink(profile.youtube_link);
      setBehanceProfile(profile.behance_profile);
      setBehanceLink(profile.behance_link);
      setFacebookProfile(profile.facebook_profile);
      setFacebookLink(profile.facebook_link);
      setGithubProfile(profile.github_profile);
      setGithubLink(profile.github_link);
      setSnapchatProfile(profile.snapchat_profile);
      setSnapchatLink(profile.snapchat_link);
      setDribbbleProfile(profile.dribbble_profile);
      setDribbbleLink(profile.dribbble_link);
      setWebsite(profile.website);
        setAccessToken(state.token); // Assuming you have access to the user's access token
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    fetchUserProfile();
  }, [getUserProfile, userId, state.token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    
    const updatedProfile = {
      username,
      email,
      businessName,
      about,
      country,
      profilePicture,
      occupation,
      phone_number,
      instagram_profile,
      instagram_link,
      twitter_profile,
      twitter_link,
      linkedin_profile,
      linkedin_link,
      tiktok_profile,
      tiktok_link,
      whatsapp_profile,
      whatsapp_link,
      youtube_profile,
      youtube_link,
      behance_profile,
      behance_link,
      facebook_profile,
      facebook_link,
      github_profile,
      github_link,
      snapchat_profile,
      snapchat_link,
      dribbble_profile,
      dribbble_link,
      website,
    };
    

    try {
      // Call the API to update user profile
      await updateUserProfile(userId, updatedProfile, accessToken);
      alert('User profile updated successfully');
    } catch (error) {
      console.error('Error updating user profile:', error);
      alert('An error occurred while updating user profile');
    }

    setIsSubmitting(false);
  };
  const getSocialLinkFromProfile = (platform) => {
    switch (platform) {
      case 'instagram':
        return instagram_link;
      case 'twitter':
        return twitter_link;
      case 'linkedin':
        return linkedin_link;
      case 'tiktok':
        return tiktok_link;
      case 'whatsapp':
        return whatsapp_link;
      case 'youtube':
        return youtube_link;
      case 'behance':
        return behance_link;
      case 'facebook':
        return facebook_link;
      case 'github':
        return github_link;
      case 'snapchat':
        return snapchat_link;
      case 'dribbble':
        return dribbble_link;
      default:
        return '';
    }
  };
  
  const openModal = (platform) => {
    setSelectedPlatform(platform);
    const linkFromProfile = getSocialLinkFromProfile(platform);
    setSocialLink(linkFromProfile);
    console.log(getSocialLinkFromProfile(platform))
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedPlatform('');
    setSocialLink('');
  };
  return (
    <>
    <div className="profile">
      <Link to={'/'}><i className="bi bi-chevron-left back"></i></Link>

      {/* Card */}
      <div className="card">
        <img src={man} alt="" />

        <p className="mt-3"><img src={flag} className='flag' /> Nigeria</p>

        <h5>Moshood Ajibose</h5>

        <div className='d-flex mt-2'>
          <p className='pe-3'><i className="bi bi-person"></i> Digital Artist</p>
          <p><i className="bi bi-telephone"></i> +2347035897731</p>
        </div>

        <button className="mt-2">Edit Profile</button>
      </div>
      {/* End of Card */}



      {/* About */}
      <div className="about">
        <div className="d-flex justify-content-between">
          <h6>About</h6>
          <i className="bi bi-pencil"></i>
        </div>

        <p>Creating beautiful digital art designs to solve problems for brands willing to increase publicity</p>
      </div>
      {/* End of About */}


      {/* Contact */}
      <div className="contact m-b-200">
        <h6>Contact Handles</h6>

        <button><i className="bi bi-plus me-2"></i> Add social media</button>

        {/* phone */}
        <div className='phone'>
          <div className='d-flex'>
            <i className="bi bi-telephone-fill i1"></i>

            <div className='ms-2'>
              <p>+234 70 3589 7731</p>
              <small>Phone number</small>
            </div>
          </div>

          <i className="bi bi-pencil"></i>
        </div>
        {/* end of phone */}

        
        {/* mail */}
        <div className='mail'>
          <div className='d-flex'>
            <i className="bi bi-envelope i1"></i>

            <div className='ms-2'>
              <p>catherinegracy007@gmail.com</p>
              <small>Email address</small>
            </div>
          </div>

          <i className="bi bi-pencil"></i>
        </div>
        {/* end of mail */}


        {/* twitter */}
        <div className='twitter'>
          <div className='d-flex'>
            <i className="bi bi-twitter i1"></i>

            <div className='ms-2'>
              <p>Catherine Neddleston</p>
              <small>Twitter</small>
            </div>
          </div>

          <i className="bi bi-pencil"></i>
        </div>
        {/* end of twitter */}

         {/* instagram */}
         <div className='instagram'>
          <div className='d-flex'>
            <i className="bi bi-instagram i1"></i>

            <div className='ms-2'>
              <p>Cathy_Gracy</p>
              <small>Instagram</small>
            </div>
          </div>

          <i className="bi bi-pencil"></i>
        </div>
        {/* end of instagram */}


        {/* linkedin */}
        <div className='linkedin'>
          <div className='d-flex'>
            <i className="bi bi-linkedin i1"></i>

            <div className='ms-2'>
              <p>Catherine Gracelyn Neddleston</p>
              <small>Linkedin</small>
            </div>
          </div>

          <i className="bi bi-pencil"></i>
        </div>
        {/* end of linkedin */}
        {/* <button className="mt-2" >Edit Profile</button> */}
        <button type="button" onClick={() => openModal('instagram')}className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>
      </div>
      {/* End of Contact */}
      {/* <!-- Button trigger modal --> */}


{/* Modal */}
{modalOpen && (
  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <form action="">
      <div className="edit p-4">
        <i className="bi bi-x fs-3 float-end mb-3" onClick={closeModal}></i>
        <label className="form-label pt-3">Profile</label>
        <input
          type="text"
          className="form-control"
          placeholder={`Edit ${selectedPlatform} profile...`}
          value={instagram_profile }
          onChange={(e) => setInstagramProfile(e.target.value)}
        />
        <label className="form-label pt-3">Link</label>
        <input
          type="text"
          className="form-control"
          placeholder={`Edit ${selectedPlatform} link...`}
          value={socialLink}
          onChange={(e) => setSocialLink(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit} data-bs-dismiss="modal">
          Update social
        </button>
      </div>
      </form>
        </div>
      </div>
    </div>
  </div>
)}

      <Footer />

    </div>
    </>
  )
}

export default profile;



