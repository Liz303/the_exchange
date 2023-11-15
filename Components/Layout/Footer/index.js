import FooterLogo from "@/Components/SVGS/footerLogo";
import styles from "./style.module.scss";

const Footer = () => {
  const emailAddresses = [
    {
      type: "General Inquiries",
      emailAddress: "g.reynisson@city-leisuregroup.com",
    },
  ];

  const renderEmails = () => {
    return emailAddresses.map((email, i) => {
      const { type, emailAddress } = email;
      return (
        <div className={styles.emailGroup} key={`email-group-${i}`}>
          <div className={styles.type}>
            <h4>{type}</h4>
          </div>
          <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </div>
      );
    });
  };

  const renderAddress = () => {
    return (
      <div className={styles.addressGroup}>
        <div className={styles.type}>
          <h4>Our Office</h4>
        </div>
        <div className={`link ${styles.address}`}>
          <a
            href={
              "https://www.google.com/maps/place/Baarerstrasse+10,+6300+Zug,+Switzerland/@47.171407,8.5166489,17z/data=!3m1!4b1!4m6!3m5!1s0x479aaaf7e0c67621:0x9b420f15d221d20!8m2!3d47.171407!4d8.5166489!16s%2Fg%2F11c2gtzwnj?entry=ttu"
            }
            rel="noreferrer"
            target="blank"
            aria-label={"Baarerstrasse 10, Zug, Switzerland"}
            title="Google Maps address link"
          >
            <span className="button-text">
              <div className="address-row">
                <div className="address-line-one">Baarerstrasse 10</div>
                <div className="address-line-two">Zug, Switzerland</div>
              </div>
            </span>
          </a>
        </div>
      </div>
    );
  };

  // const renderSocials = () => {
  //   return socials.map((link, i) => {
  //     return (
  //       <div className={styles.overflowWrapper} key={`social-${i}`}>
  //         <div
  //           className={styles.social}
  //           key={`social-link-${i}`}
  //           ref={addToDetails}
  //         >
  //           <SecondaryButton button={link} />
  //         </div>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div className={styles.footer}>
      <div className={styles.emailGroupContainer}>{renderEmails()}</div>
      <div className={styles.addressContainer}>{renderAddress()}</div>
      {/* {socials && socials.length > 0 && (
          <div className={styles.socialContainer}>
            <div className={`label ${styles.label}`}>Social</div>
            <div className={styles.socialLinkContainer}>{renderSocials()}</div>
          </div>
        )} */}
      <div className={styles.logoContainer}>
        <FooterLogo />
      </div>
    </div>
  );
};

export default Footer;
