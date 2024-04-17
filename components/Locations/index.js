import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";

const LOCATIONS = [
  { name: "id est", year: "2009", link: "https://iehospitality.com/" },
  { name: "basta", year: "2010", link: "https://www.bastaboulder.com/" },
  { name: "bruto", year: "2018", link: "https://www.brutodenver.com/" },
  { name: "dry storage", year: "2019", link: "https://drystorageco.com/" },
  { name: "hey kiddo/ok yeah", year: "2023", link: "https://www.hk-oy.com/" },
  { name: "new new", year: "2024", link: "https://www.hk-oy.com/" },
];

const ROMAN = ["i.", "ii.", "iii.", "iv.", "v.", "vi."];

const Locations = () => {
  return (
    <Scrollytelling.Animation
      tween={{
        start: 30,
        end: 80,
        to: { opacity: 1, top: 20 },
      }}
    >
      <div className={s.locationWrap}>
        <img
          className={s.locationImg}
          src="/images/LastPage_Appendix.png"
          alt="id est fam"
        />
        <div className={s.contentWrap}>
          {LOCATIONS.map((location, i) => {
            return (
              <a
                href={location.link}
                target="_blank"
                key={location.name}
                className={`${s.locations} glitch-no-underline-white`}
              >
                <div>{ROMAN[i]}</div>
                <div>
                  <span>{location.name}</span>
                </div>
                <div>{location.year}</div>
              </a>
            );
          })}
        </div>
      </div>
    </Scrollytelling.Animation>
  );
};

export default Locations;
