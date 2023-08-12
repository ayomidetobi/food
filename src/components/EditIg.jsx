

function EditIg({ openModal,instagram_link, 
    setInstagramLink, closeModal, 
    handleSubmit,modalOpen,
    setInstagramProfile,instagram_profile }) {
  return (
    <div>
      {/* instagram */}
      <div className='insta' onClick={openModal}>
          <div className='d-flex'>
            <i className="bi bi-instagram i1"></i>

            <div className='ms-2'>
              <p>{instagram_profile}</p>
              <small>Instagram</small>
            </div>
          </div>

          <i className="bi bi-pencil"></i>
        </div>
        {/* end of instagram */}
        {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content ">
            <button type="button" className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <form action="">
      <div className="edit p-4">
        <i className="bi bi-x fs-3 float-end mb-3" onClick={closeModal}></i>
        <label className="form-label pt-3">Instagram profile</label>
        <input
          type="text"
          className="form-control"
          placeholder={`Edit instagram profile...`}
          value={instagram_profile}
          onChange={(e) => setInstagramProfile(e.target.value)}
        />
        <label className="form-label pt-3">Instagram link</label>
        <input
          type="text"
          className="form-control"
          placeholder={`Edit instagram link...`}
          value={instagram_link}
          onChange={(e) => setInstagramLink(e.target.value)}
        />
        <button  onClick={handleSubmit} >
          Update instagram
        </button>
      </div>
      </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditIg;
