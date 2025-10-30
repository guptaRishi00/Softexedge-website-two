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
          "homepage.why-choose": {
            populate: {
              textBlock: true,
              image: {
                fields: ["url", "name"],
              },
            },
          },
          "homepage.contact": {
            populate: {
              cards: {
                populate: {
                  profile: {
                    fields: ["url", "name"],
                  },
                },
              },
              leftCard: {
                populate: {
                  image: {
                    fields: ["url", "name"],
                  },
                },
              },
            },
          },
          "homepage.about": {
            populate: {
              carousel: {
                populate: {
                  image: {
                    fields: ["url", "name"],
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

const pageQuery = (slug: string) =>
  qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      blocks: {
        on: {
          "page.about": {
            populate: {
              herosection: {
                populate: {
                  image: { fields: ["url", "name"] },
                  letsTalk: {
                    populate: {
                      images: { fields: ["url", "name"] },
                    },
                  },
                  viewOurWork: true,
                },
              },
              ourStory: {
                populate: {
                  button: true,
                },
              },
              ourMission: {
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
              whatWeDo: {
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
              whyChoose: {
                populate: {
                  image: { fields: ["url", "name"] },
                  lists: {
                    populate: {
                      icon: { fields: ["url", "name"] },
                    },
                  },
                  button: true,
                },
              },
              ourTeam: {
                populate: {
                  images: { fields: ["url", "name"] },
                  button: true,
                },
              },
              review: {
                populate: {
                  cards: {
                    populate: {
                      icon: { fields: ["url", "name"] },

                      profile: { fields: ["url", "name"] },
                    },
                  },
                  brands: {
                    populate: {
                      image: { fields: ["url", "name"] },
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

export async function getPageData(slug: string) {
  const path = `/api/pages`;
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);

  url.search = pageQuery(slug);
  return await fetchAPI(url.href, { method: "GET" });
}
