const PrimaryButton = ({ button, link, buttonTitle, onClick, color }) => {
  const renderButtonInnards = (title) => {
    return (
      <button className={`btn-primary ${color === "black" && "black"}`}>
        <span className="button-text"> {title} </span>
        <div className={`arrow-container`}>
          <svg viewBox="0 0 25 15">
            <path
              d="M0.350586 7.86133H23.9906"
              stroke="#F2F2E9"
              strokeMiterlimit="10"
            />
            <path
              d="M17.1406 0.810547L24.2006 7.88055L17.7506 14.3305"
              stroke="#F2F2E9"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </button>
    );
  };
  if (link && buttonTitle) {
    return (
      <a
        href={link}
        className="button"
        rel="noreferrer"
        title={buttonTitle}
        aria-label={buttonTitle}
      >
        {renderButtonInnards(buttonTitle)}
      </a>
    );
  } else if (button) {
    const {
      fields: { linkTitle, url, newWindow, downloadMedia },
    } = button;
    if (downloadMedia && linkTitle) {
      const downloadUrl = `https://${downloadMedia.fields.file.url}`;
      return (
        <a
          href={downloadUrl}
          download
          className="button"
          target={newWindow || downloadMedia ? "_blank" : "_self"}
          rel="noreferrer"
          title={linkTitle}
          aria-label={linkTitle}
        >
          {renderButtonInnards(linkTitle)}
        </a>
      );
    } else {
      return (
        <a
          href={url}
          className="button"
          target={newWindow ? "_blank" : "_self"}
          rel="noreferrer"
          title={linkTitle}
          aria-label={linkTitle}
        >
          {renderButtonInnards(linkTitle)}
        </a>
      );
    }
  }
};

export default PrimaryButton;
