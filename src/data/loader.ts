import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const globalQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "layout.header": {
          populate: {
            logo: { fields: ["url", "name"] },
            secondLogo: { fields: ["url", "name"] },
            links: true,
            cta: true,
            serviceDropdown: {
              populate: {
                icon: { fields: ["url", "name"] },
              },
            },
          },
        },
        "layout.footer": {
          populate: {
            services: true,
            cases: true,
            aboutUs: true,
            logo: {
              fields: ["url", "name"],
            },

            socials: {
              populate: {
                icon: {
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
          "homepage.hero-section": {
            populate: {
              image: { fields: ["url", "name"] },
              titleImage: { fields: ["url", "name"] },
              letsTalk: {
                populate: { image: { fields: ["url", "name"] } },
              },
              viewOurWork: true,
              bookCall: { populate: { image: { fields: ["url", "name"] } } },
            },
          },
          "homepage.brands": {
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
              cards: {
                populate: {
                  video: { fields: ["url", "name"] },
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

function buildPageQuery(slug: string) {
  let populateOptions = {};

  if (slug === "about") {
    populateOptions = {
      populate: {
        blocks: {
          on: {
            "aboutpage.hero-section": {
              populate: {
                image: {
                  fields: ["url", "name"],
                },
                letsTalk: {
                  populate: {
                    image: {
                      fields: ["url", "name"],
                    },
                  },
                },
                viewWork: true,
              },
            },
            "aboutpage.our-story": {
              populate: {
                button: true,
                image: {
                  fields: ["url", "name"],
                },
              },
            },
            "aboutpage.our-mission": {
              populate: {
                cards: {
                  populate: {
                    image: {
                      fields: ["url", "name"],
                    },
                  },
                },
              },
            },
            "aboutpage.what-we-do": {
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
            "aboutpage.why-choose": {
              populate: {
                image: {
                  fields: ["url", "name"],
                },
                lists: {
                  populate: {
                    icon: {
                      fields: ["url", "name"],
                    },
                  },
                },
                button: true,
              },
            },
            "aboutpage.our-team": {
              populate: {
                images: {
                  fields: ["url", "name"],
                },
                button: true,
              },
            },
            "aboutpage.review": {
              populate: {
                cards: {
                  populate: {
                    icon: {
                      fields: ["url", "name"],
                    },
                    profile: {
                      fields: ["url", "name"],
                    },
                  },
                },
                brands: {
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
    };
  } else if (slug === "digital-marketing") {
    populateOptions = {
      populate: {
        blocks: {
          on: {
            "digital-marketing.hero-section": {
              populate: {
                letsTalk: {
                  populate: {
                    image: {
                      fields: ["url", "name"],
                    },
                  },
                },
                viewWork: true,
                image: {
                  fields: ["url", "name"],
                },
              },
            },
            "digital-marketing.why-choose": {
              populate: {
                cards: {
                  populate: {
                    icon: {
                      fields: ["url", "name"],
                    },
                  },
                },
                image: {
                  fields: ["url", "name"],
                },
              },
            },
            "shared.our-services": {
              populate: {
                cards: {
                  populate: {
                    image: {
                      fields: ["url", "name"],
                    },
                    lists: {
                      populate: {
                        icon: {
                          fields: ["url", "name"],
                        },
                      },
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
            "digital-marketing.our-process": {
              populate: {
                tags: {
                  populate: {
                    icon: {
                      fields: ["url", "name"],
                    },
                  },
                },
                cards: {
                  populate: {
                    image: {
                      fields: ["url", "name"],
                    },
                  },
                },
              },
            },
            "aboutpage.review": {
              populate: {
                cards: {
                  populate: {
                    icon: {
                      fields: ["url", "name"],
                    },
                    profile: {
                      fields: ["url", "name"],
                    },
                  },
                },
                brands: {
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
    };
  } else if (slug === "brand-strategy") {
    populateOptions = {
      populate: {
        blocks: {
          on: {
            "digital-marketing.hero-section": {
              populate: {
                letsTalk: {
                  populate: {
                    image: {
                      fields: ["url", "name"],
                    },
                  },
                },
                viewWork: true,
                image: {
                  fields: ["url", "name"],
                },
              },
            },
            "brand-strategy.branding-matters": {
              populate: {
                image: {
                  fields: ["url", "name"],
                },
              },
            },
            "shared.our-services": {
              populate: {
                cards: {
                  populate: {
                    image: {
                      fields: ["url", "name"],
                    },
                    lists: {
                      populate: {
                        icon: {
                          fields: ["url", "name"],
                        },
                      },
                    },
                    button: true,
                  },
                },
              },
            },
            "digital-marketing.our-process": {
              populate: {
                cards: {
                  populate: {
                    image: {
                      fields: ["url", "name"],
                    },
                  },
                },
              },
            },
            "aboutpage.review": {
              populate: {
                cards: {
                  populate: {
                    icon: {
                      fields: ["url", "name"],
                    },
                    profile: {
                      fields: ["url", "name"],
                    },
                  },
                },
                brands: {
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
    };
  } else if (slug === "video-production") {
    populateOptions = {
      populate: {
        blocks: {
          on: {
            "digital-marketing.hero-section": {
              populate: {
                letsTalk: {
                  populate: {
                    image: { fields: ["url", "name"] },
                  },
                },
                viewWork: true,
                image: { fields: ["url", "name"] },
              },
            },
            "videography.video-matters": {
              populate: {
                image: { fields: ["url", "name"] },
                lists: true,
              },
            },
            "shared.our-services": {
              populate: {
                cards: {
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
              },
            },
            "videography.video-works": {
              populate: {
                cards: true,
              },
            }, // <--- Fixed: Removed extra closing brace here
            "videography.we-work": {
              populate: {
                cards: {
                  populate: {
                    image: { fields: ["url", "name"] },
                  },
                },
              },
            },
            "aboutpage.review": {
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
    };
  } else if (slug === "web-development") {
    populateOptions = {
      populate: {
        blocks: {
          on: {
            "digital-marketing.hero-section": {
              populate: {
                letsTalk: {
                  populate: {
                    image: { fields: ["url", "name"] },
                  },
                },
                viewWork: true,
                image: { fields: ["url", "name"] },
              },
            },
            "web.our-development": {
              populate: {
                image: { fields: ["url", "name"] },
                lists: true,
              },
            },
            "shared.our-services": {
              populate: {
                cards: {
                  populate: {
                    image: {
                      fields: ["url", "name"],
                    },
                    lists: {
                      populate: {
                        icon: {
                          fields: ["url", "name"],
                        },
                      },
                    },
                    button: true,
                  },
                },
              },
            },
            "videography.we-work": {
              populate: {
                cards: {
                  populate: {
                    image: { fields: ["url", "name"] },
                  },
                },
              },
            },
          },
        },
      },
    };
  } else if (slug === "contact") {
    populateOptions = {
      populate: {
        blocks: {
          on: {
            "digital-marketing.hero-section": {
              populate: {
                letsTalk: {
                  populate: {
                    image: { fields: ["url", "name"] },
                  },
                },
                viewWork: true,
                image: { fields: ["url", "name"] },
              },
            },
            "contactpage.contact": {
              populate: {
                image: {
                  fields: ["url", "name"],
                },
              },
            },
            "contactpage.contact-info": {
              populate: {
                cards: {
                  populate: {
                    icon: {
                      fields: ["url", "name"],
                    },
                  },
                },
              },
            },
          },
        },
      },
    };
  } else if (slug === "careers") {
    populateOptions = {
      populate: {
        blocks: {
          on: {
            "digital-marketing.hero-section": {
              populate: {
                letsTalk: {
                  populate: {
                    image: {
                      fields: ["url", "name"],
                    },
                  },
                },
                viewWork: true,
                image: {
                  fields: ["url", "name"],
                },
              },
            },
            "careerpage.why-work": {
              populate: {
                image: {
                  fields: ["url", "name"],
                },
                lists: {
                  populate: {
                    icon: {
                      fields: ["url", "name"],
                    },
                  },
                },
              },
            },
            "careerpage.our-values": {
              populate: {
                cards: {
                  populate: {
                    image: {
                      fields: ["url", "name"],
                    },
                  },
                },
              },
            },
            "careerpage.position": {
              populate: {
                jobs: {
                  populate: {
                    tags: true,
                    button: true,
                  },
                },
              },
            },
            "videography.we-work": {
              populate: {
                cards: {
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
    };
  } else if (slug === "portfolio") {
    populateOptions = {
      populate: {
        blocks: {
          on: {
            "digital-marketing.hero-section": {
              populate: {
                // ... your hero populate logic
                letsTalk: { populate: { image: { fields: ["url", "name"] } } },
                viewWork: true,
                image: { fields: ["url", "name"] },
              },
            },

            "portfoliopage.portfolio-work": {
              populate: {
                categories: true,
                cards: {
                  populate: {
                    lists: true,
                    button: true,

                    image: { fields: ["url", "name"] },
                  },
                },
              },
            },

            // Don't forget to fix this one too if it's in the same category!
            "portfoliopage.clients": {
              populate: {
                images: { fields: ["url", "name"] },
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
