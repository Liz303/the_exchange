async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["content"] },
    }
  ).then((response) => response.json());
}

export async function getAllContent(
  isDraftMode = process.env.NEXT_PUBLIC_NODE_ENV === "development"
) {
  const introData = await fetchGraphQL(
    `query {
        allContentCollection(limit: 1, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${INTRO_QUERY}
          }
        }
      }`,
    isDraftMode
  );

  const infoData = await fetchGraphQL(
    `query {
        allContentCollection(limit: 1, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${INFO_QUERY}
          }
        }
      }`,
    isDraftMode
  );

  const ethosData = await fetchGraphQL(
    `query {
        allContentCollection(limit: 1, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${ETHOS_QUERY}
          }
        }
      }`,
    isDraftMode
  );

  const contactData = await fetchGraphQL(
    `query {
          allContentCollection(limit: 1, preview: ${
            isDraftMode ? "true" : "false"
          }) {
            items {
              ${CONTACT_QUERY}
            }
          }
        }`,
    isDraftMode
  );

  return {
    introData: introData?.data?.allContentCollection?.items?.[0],
    infoData: infoData?.data?.allContentCollection?.items?.[0],
    ethosData: {
      ...ethosData?.data?.allContentCollection?.items?.[0],
      season: introData?.data?.allContentCollection?.items?.[0].season,
    },
    contactData: contactData?.data?.allContentCollection?.items?.[0],
  };
}

const INTRO_QUERY = `
 introSection {
      season
      aboutText {
        json
  
      }
      collage{
        title
        url
        width
        height
      }
      collageElement2Small{
        title
        url
        width
        height
      }
      illustrationOne {
        title
        url
        width
        height
      }
      illustrationTwo {
        title
        url
        width
        height
      }
    }`;

const INFO_QUERY = `
  infoSection {
    accoladesSection {
        sys {
          id
        }
        title
        copyBlock{
          json
    
        }
        accoladesImage{
          title
          url
          width
          height
        }
        accoladesCollection {
          items {
            accoladeTitle
          }
        }
    }
    hoursOfOperationCollection {
        items {        
          altText
          startDay
          endDay
          startTime
          endTime
        }
      }
      fableText
      infoCollageElement1{
        title
        url
        width
        height
      }
      infoCollageElement2{
        title
        url
        width
        height
      }
    }`;
const ETHOS_QUERY = `
    ethosSection{
      ethosCollageElement1{
        title
        url
        width
        height
      }
      ethosCollageElement2 {
        title
        url
        width
        height
      }
      ethosCollageElement3{
        title
        width
        height
        url
      }
      ethosImage{
        title
        width
        height
        url
      }
      illustration1{
        title
        width
        height
        url
        
      }
      illustration2{
        title
        height
        width
        url
      }
      largePullText
      copyBlock{
        json
  
      }
      annotationsCollection {
        items {
          annotationCopy {
            json
      
          }
          annotationImage {
            url
            title
            width
            height
          }
        }
      }
    }`;
const CONTACT_QUERY = `
outroSection{
      outroImage {
        url
        title
        width
        height
      }
      outroCollageImage{
        url
        title
        width
        height
      }
    }`;
