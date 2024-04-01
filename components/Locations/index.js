const LOCATIONS = [
  { name: "id est", year: "2009", link: "#" },
  { name: "basta", year: "2010", link: "#" },
  { name: "bruto", year: "2018", link: "#" },
  { name: "dry storage", year: "2019", link: "#" },
  { name: "hey kiddo/ok yeah", year: "2023", link: "#" },
];

const ROMAN = ["i.", "ii.", "iii.", "iv.", "v."];

const Locations = () => {
  return (
    <div>
      <img src="#" alt="id est fam" />
      <div>
        {LOCATIONS.map((location, i) => {
          return (
            <div key={location.name}>
              <div>{ROMAN[i]}</div>
              <div>{location.name}</div>
              <div>{location.year}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
