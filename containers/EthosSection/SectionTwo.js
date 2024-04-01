import * as Scrollytelling from "@bsmnt/scrollytelling";
const SectionTwo = ({ data }) => {
  const { annotationsCollection, illustration1, illustration2, largePullText } =
    data;

  return (
    <Scrollytelling.Animation
      tween={{
        start: 50,
        end: 100,
        to: { xPercent: -100, ease: "none" },
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>section 2</h2>
      </div>
    </Scrollytelling.Animation>
  );
};

export default SectionTwo;
