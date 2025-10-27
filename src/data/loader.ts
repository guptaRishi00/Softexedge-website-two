import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const globalQuery = qs.stringify({
  populate: {
    header: {
      populate: {
        logo: {
          fields: ["url", "name"],
        },
        links: true,
        cta: true,
      },
    },
  },
});

export async function getGlobalData() {
  const path = "/api/global";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);

  url.search = globalQuery;
  return await fetchAPI(url.href, { method: "GET" });
}

const homepageQuery = () =>
  qs.stringify({
    populate: {
      blocks: {
        on: {
          "shared-components.hero-section": {
            populate: {
              image: {
                fields: ["url", "name"],
              },
              titleImage: {
                fields: ["url", "name"],
              },
              letsTalk: {
                populate: {
                  images: {
                    fields: ["url", "name"],
                  },
                },
              },
              viewOurWork: true,
              bookCall: {
                populate: {
                  logo: {
                    fields: ["url", "name"],
                  },
                },
              },
            },
          },
          "shared-components.brands": {
            populate: {
              image: {
                fields: ["url", "name"],
              },
            },
          },
          "homepage.what-we-do": {
            populate: {
              cards: {
                populate: {
                  image: {
                    fields: ["url", "name"],
                  },
                  button: true,
                },
              },
            },
          },
          "homepage.our-project": {
            populate: {
              card: {
                populate: {
                  image: {
                    fields: ["url", "name"],
                  },
                  button: true,
                },
              },
            },
          },
          "homepage.our-case": {
            populate: {
              tabs: true,
              cards: {
                populate: {
                  button: true,
                  image: {
                    fields: ["url", "name"],
                  },
                  challenge: true,
                  solution: true,
                  result: {
                    populate: {
                      lists: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

export async function getHomepageData() {
  const path = "/api/homepage";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);

  url.search = homepageQuery();
  return await fetchAPI(url.href, { method: "GET" });
}
