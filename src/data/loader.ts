import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import { listeners } from "process";
import qs from "qs";

const globalQuery = qs.stringify({
  populate: {
    header: {
      populate: {
        logo: { fields: ["url", "name"] },
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
              image: { fields: ["url", "name"] },
              titleImage: { fields: ["url", "name"] },
              letsTalk: {
                populate: { images: { fields: ["url", "name"] } },
              },
              viewOurWork: true,
              bookCall: { populate: { logo: { fields: ["url", "name"] } } },
            },
          },
          "shared-components.brands": {
            populate: { image: { fields: ["url", "name"] } },
          },
          "homepage.what-we-do": {
            populate: {
              cards: {
                populate: {
                  image: { fields: ["url", "name"] },
                  button: true,
                },
              },
            },
          },
          "homepage.our-project": {
            populate: {
              card: {
                populate: {
                  image: { fields: ["url", "name"] },
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
                  image: { fields: ["url", "name"] },
                  challenge: true,
                  solution: true,
                  result: { populate: { lists: true } },
                },
              },
            },
          },
          "homepage.why-choose": {
            populate: {
              textBlock: true,
              image: { fields: ["url", "name"] },
            },
          },
          "homepage.contact": {
            populate: {
              cards: {
                populate: { profile: { fields: ["url", "name"] } },
              },
              leftCard: {
                populate: { image: { fields: ["url", "name"] } },
              },
            },
          },
          "homepage.about": {
            populate: {
              carousel: {
                populate: { image: { fields: ["url", "name"] } },
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

// 🧠 Separate populate options per page type
function buildPageQuery(slug: string) {
  let populateOptions = {};

  if (slug === "about") {
    populateOptions = {
      populate: {
        blocks: {
          on: {
            "page.about": {
              populate: {
                herosection: {
                  populate: {
                    image: { fields: ["url", "name"] },
                    letsTalk: {
                      populate: { images: { fields: ["url", "name"] } },
                    },
                    viewOurWork: true,
                  },
                },
                ourStory: { populate: { button: true } },
                ourMission: {
                  populate: {
                    cards: {
                      populate: {
                        image: { fields: ["url", "name"] },
                        button: true,
                      },
                    },
                  },
                },
                whatWeDo: {
                  populate: {
                    cards: {
                      populate: {
                        image: { fields: ["url", "name"] },
                        button: true,
                      },
                    },
                  },
                },
                whyChoose: {
                  populate: {
                    image: { fields: ["url", "name"] },
                    lists: {
                      populate: { icon: { fields: ["url", "name"] } },
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
    };
  } else if (slug === "services") {
    populateOptions = {
      populate: {
        blocks: {
          on: {
            "page.service": {
              populate: {
                herosection: {
                  populate: {
                    image: { fields: ["url", "name"] },
                    letsTalk: {
                      populate: { images: { fields: ["url", "name"] } },
                    },
                    viewOurWork: true,
                  },
                },
                whyChoose: {
                  populate: {
                    image: { fields: ["url", "name"] },
                    cards: {
                      populate: {
                        image: { fields: ["url", "name"] },
                        tag: true,
                        description: true,
                        button: true,
                      },
                    },
                  },
                },
                ourServices: {
                  populate: {
                    cards: {
                      populate: {
                        image: { fields: ["url", "name"] },
                        button: true,
                        lists: {
                          populate: {
                            icon: { fields: ["url", "name"] },
                          },
                        },
                      },
                    },
                  },
                },

                ourCase: {
                  populate: {
                    tabs: { populate: { text: true } },
                    cards: {
                      populate: {
                        button: true,
                        image: { fields: ["url", "name"] },
                        challenge: true,
                        solution: true,
                        result: { lists: true },
                      },
                    },
                  },
                },
                ourProcess: {
                  populate: {
                    tags: {
                      populate: { icon: { fields: ["url", "name"] } },
                    },
                    cards: {
                      populate: {
                        image: { fields: ["url", "name"] },
                        lists: true,
                      },
                    },
                  },
                },
                clientReview: {
                  populate: {
                    reviews: {
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
                contactUs: {
                  populate: {
                    bg: { fields: ["url", "name"] },
                    letsTalk: {
                      populate: {
                        images: { fields: ["url", "name"] },
                        logo: true,
                      },
                      viewWork: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    };
  }

  return qs.stringify(
    {
      filters: { slug: { $eq: slug } },
      ...populateOptions,
    },
    { encodeValuesOnly: true }
  );
}

export async function getPageData(slug: string) {
  const BASE_URL = getStrapiURL();
  const query = buildPageQuery(slug);
  const url = `${BASE_URL}/api/pages?${query}`;
  const response = await fetchAPI(url, { method: "GET" });
  return response;
}
