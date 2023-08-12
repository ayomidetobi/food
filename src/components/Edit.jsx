function Edit({ selectedPlatform, socialLink, setSocialLink, closeModal, handleSubmit ,instagramLink ,setInstagramLink }) {
    return (
      <form action="">
      <div className="edit p-4">
        <i className="bi bi-x fs-3 float-end mb-3" onClick={closeModal}></i>
        <label className="form-label pt-3">Profile</label>
        <input
          type="text"
          className="form-control"
          placeholder={`Edit ${selectedPlatform} profile...`}
          value={instagramLink }
          onChange={(e) => setInstagramLink (e.target.value)}
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
    );
  }
  
  export default Edit;
  