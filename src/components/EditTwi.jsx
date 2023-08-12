

function EditTwi({ openModal,twitter_link, 
    setTwitterLink, closeModal, 
    handleSubmit,modalOpen,
    settwitterProfile,twitter_profile }) {
  return (
    <div>
      {/* twitter */}
      <div className='twitter' onClick={openModal}>
          <div className='d-flex'>
            <i className="bi bi-twitter i1"></i>

            <div className='ms-2'>
              <p>{twitter_profile}</p>
              <small>twitter</small>
            </div>
          </div>

          <i className="bi bi-pencil"></i>
        </div>
        {/* end of twitter */}
        {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content ">
            <button type="button" className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <form action="">
      <div className="edit p-4">
        <i className="bi bi-x fs-3 float-end mb-3" onClick={closeModal}></i>
        <label className="form-label pt-3">twitter profile</label>
        <input
          type="text"
          className="form-control"
          placeholder={`Edit twitter profile...`}
          value={twitter_profile}
          onChange={(e) => settwitterProfile(e.target.value)}
        />
        <label className="form-label pt-3">twitter link</label>
        <input
          type="text"
          className="form-control"
          placeholder={`Edit twitter link...`}
          value={twitter_link}
          onChange={(e) => setTwitterLink(e.target.value)}
        />
        <button  onClick={handleSubmit} >
          Update twitter
        </button>
      </div>
      </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditTwi;
