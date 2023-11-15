const SecondaryButton = ({ button, link, buttonTitle, onClick }) => {
  const renderButtonInnards = (title) => {
    return (
      <button className="btn-secondary">
        <span className="button-text"> {title} </span>
        <div className={`arrow-container`}>
          <div className={`arrow`}></div>
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
          target={newWindow ? "_blank" : "_self"}
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

export default SecondaryButton;
