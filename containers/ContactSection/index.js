"use client";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import s from "./style.module.scss";

import WorkSvg from "@/components/ContactSVGs/WorkSvg";
import GiftCardSvg from "@/components/ContactSVGs/GiftCardSvg";
import Locations from "@components/Locations";
import SheepHeadSvg from "@/components/ContactSVGs/SheepHeadSvg";
import FromSvg from "@/components/ContactSVGs/From/from";


export default function Contact({ data }) {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  const { outroImage, outroCollageImage } = data?.outroSection || {};
  return (
    <section>
      <Scrollytelling.Root
        scrub={true}
        start={"top bottom"}
        // debug={{ markers: true, vizualizer: true }}
      >
        <div
          className={s.contactWrapper}
          style={{ minHeight: "100vh", paddingTop: "50vh" }}
        >
          <div className={s.left}>
            {/* <div className={s.ethosImage}>
                <img src={ethosImage.url} alt={ethosImage.title} />
              </div> */}
            <Scrollytelling.Animation
              tween={{
                start: 60,
                end: 90,
                to: { opacity: 1, top: -120 },
              }}
            >
              <div className={s.outroImage}>
                <img src={outroImage.url} alt={outroImage.title} />
              </div>
            </Scrollytelling.Animation>
              
            <Locations />
            
            <Scrollytelling.Animation
              tween={{
                start: 80,
                end: 100,
                to: { opacity: 1, bottom: 0, right: 0 },
              }}
            >
              <div className={s.outroCollageImage}>
                <img
                  src={outroCollageImage.url}
                  alt={outroCollageImage.title}
                />
              </div>
            </Scrollytelling.Animation>
          </div>
          <div className={s.right}>
            <Scrollytelling.Stagger
              overlap={0.4}
              tween={{
                start: 65,
                end: 90,
                fromTo: [
                  { opacity: 0, y: 20 },
                  { opacity: 1, y: 0 },
                ],
                duration: 2,
              }}
            >
              <div>
                <MailchimpSubscribe
                  url={MAILCHIMP_URL}
                  render={(props) => {
                    const { subscribe, status, message } = props || {};
                    return (
                      <div>
                        <NewsletterSubscribe
                          status={status}
                          message={message}
                          onValidated={(formData) => subscribe(formData)}
                        />
                      </div>
                    );
                  }}
                />
              </div>
              <div>
                <p> If interested in collaborating, please reach out</p>
                <a href="#" target="blank" className="glitch-no-underline">
                  <span>
                    <i>Work with us </i>
                  </span>
                  <WorkSvg />
                </a>
              </div>
              <div className={s.giftLink}>
                <p>Give a gift</p>
                <a href="#" target="blank" className="glitch-no-underline">
                  <span>
                    <i>Gift Card </i>
                  </span>
                  <GiftCardSvg />
                </a>
              </div>
            </Scrollytelling.Stagger>
            <div className={s.signoff}>
              <Scrollytelling.Animation
                tween={{
                  start: 80,
                  end: 90,
                  to: { opacity: 1, top: "-120px", right: 0 },
                }}
              >
                <div className={s.sheepSvgContainer}>
                  <SheepHeadSvg />
                </div>
              </Scrollytelling.Animation>
              <FromSvg />
              <Scrollytelling.Animation
                tween={{
                  start: 70,
                  end: 100,
                  to: { top: "-120px", right: "9.5vw" },
                  scrub: true,
                }}
              >
                <div className={s.three}>
                  <img src="/images/III.png" alt="Roman numeral III" />
                </div>
              </Scrollytelling.Animation>
            </div>
          </div>
        </div>
      </Scrollytelling.Root>
    </section>
  );
}
