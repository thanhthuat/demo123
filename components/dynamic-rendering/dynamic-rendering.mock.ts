import { IComponent } from "@components/dynamic-rendering.interfaces";
//MainTwoColumn
const mockResponse: IComponent = {
  type: "MainLayout",
  data: {
    id: "4400936b-6158-1354-9dc8-a04c57e1af46",
    fluid: true,
    //
    children: [
      {
        type: "BlockMainWithTab",
        data: {
          id: "26b3f355-2f65-4aae-b9fd-609779f24fdd212",
          title: "A custom title",
          headline: "A random Headline",
          copy: "A really long text....",
          className: "layoutgrid-3",
          image: {
            url: "https://i.stack.imgur.com/y9DpT.jpg",
          },
          listNew: [
            {
              adult: false,
              backdrop_path: "/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg",
              genre_ids: [27, 53],
              id: 980078,
              original_language: "en",
              original_title: "Winnie the Pooh: Blood and Honey",
              overview:
                "Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.",
              popularity: 401.63,
              poster_path: "/ewF3IlGscc7FjgGEPcQvZsAsgAW.jpg",
              release_date: "2023-01-27",
              title: "Winnie the Pooh: Blood and Honey",
              video: false,
              vote_average: 5.7,
              vote_count: 593,
            },
            {
              adult: false,
              backdrop_path: "/xmcPahH2mOkDAsIifOKoCacKhrw.jpg",
              genre_ids: [28],
              id: 842945,
              original_language: "en",
              original_title: "Supercell",
              overview:
                "Good-hearted teenager William always lived in hope of following in his late father’s footsteps and becoming a storm chaser. His father’s legacy has now been turned into a storm-chasing tourist business, managed by the greedy and reckless Zane Rogers, who is now using William as the main attraction to lead a group of unsuspecting adventurers deep into the eye of the most dangerous supercell ever seen.",
              popularity: 356.638,
              poster_path: "/gbGHezV6yrhua0KfAgwrknSOiIY.jpg",
              release_date: "2023-03-17",
              title: "Supercell",
              video: false,
              vote_average: 6.2,
              vote_count: 154,
            },
            {
              adult: false,
              backdrop_path: "/bPlmTl2rrnzgRKinLvs4GUd0DPb.jpg",
              genre_ids: [35],
              id: 1118721,
              original_language: "es",
              original_title: "Quiero Tu Vida",
              overview:
                "A former pro football player must retire after a life-altering injury, and as the years passes he wishes to know how his life would've turned out had he remained a star.",
              popularity: 275.951,
              poster_path: "/hk2kW6uwTEa8cxDeF1UPfIpEYkF.jpg",
              release_date: "2023-05-03",
              title: "Quiero Tu Vida",
              video: false,
              vote_average: 6.5,
              vote_count: 25,
            },
           
          ],
          children: [
            {
              type: "CardRowMain",
              data: {
                id: "26b3f355-2f65-4aae-b9fd-609779f24fdd212",
                title: "A custom title",
                headline: "A random Headline",
                copy: "A really long text....",
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
            },
            {
              type: "CardTextTitle",
              data: {
                id: "4400936b-6158-9087-9dc8-a04c57e1af46121x2121213",
                title: "CardTextTitle add",
                className: "btn-primary",
                action: {
                  type: "call",
                  url: "https://pokeapi.co/api/v2/",
                },
              },
            },
            {
              type: "TabContainer",
              data: {
                id: "4400936b-6158-4943-9dc8-a04c57e1af461",
                title: "Title",
                headline: "This can be anything",
                copy: "A really long text....",
                item: {},
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
                tabTitle: ["LastNews", "News"],
                datanew: {
                  LastNews: [
                    {
                      adult: false,
                      backdrop_path: "/i1eghEBiC0gN4KnwuUGC2fNiX1f.jpg",
                      genre_ids: [28, 53],
                      id: 552688,
                      original_language: "en",
                      original_title: "The Mother",
                      overview:
                        "A deadly female assassin comes out of hiding to protect the daughter that she gave up years before, while on the run from dangerous men.",
                      popularity: 2093.491,
                      poster_path: "/vnRthEZz16Q9VWcP5homkHxyHoy.jpg",
                      release_date: "2023-05-04",
                      title: "The Mother",
                      video: false,
                      vote_average: 6.7,
                      vote_count: 459,
                    },
                    {
                      adult: false,
                      backdrop_path: "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
                      genre_ids: [28, 53, 80],
                      id: 603692,
                      original_language: "en",
                      original_title: "John Wick: Chapter 4",
                      overview:
                        "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
                      popularity: 1729.773,
                      poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
                      release_date: "2023-03-22",
                      title: "John Wick: Chapter 4",
                      video: false,
                      vote_average: 7.9,
                      vote_count: 1453,
                    },
                    {
                      adult: false,
                      backdrop_path: "/e7FzphKs5gzoghDotAEp2FeP46u.jpg",
                      genre_ids: [27, 35, 14],
                      id: 649609,
                      original_language: "en",
                      original_title: "Renfield",
                      overview:
                        "Having grown sick and tired of his centuries as Dracula's lackey, Renfield finds a new lease on life — and maybe even redemption — when he falls for feisty, perennially angry traffic cop Rebecca Quincy.",
                      popularity: 1155.299,
                      poster_path: "/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg",
                      release_date: "2023-04-07",
                      title: "Renfield",
                      video: false,
                      vote_average: 7,
                      vote_count: 460,
                    },
                    {
                      adult: false,
                      backdrop_path: "/2rVkDZFLN6DI5PAoraoe9m4IRMN.jpg",
                      genre_ids: [12, 14, 35],
                      id: 493529,
                      original_language: "en",
                      original_title: "Dungeons & Dragons: Honor Among Thieves",
                      overview:
                        "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
                      popularity: 1121.915,
                      poster_path: "/v7UF7ypAqjsFZFdjksjQ7IUpXdn.jpg",
                      release_date: "2023-03-23",
                      title: "Dungeons & Dragons: Honor Among Thieves",
                      video: false,
                      vote_average: 7.5,
                      vote_count: 1336,
                    },
                    {
                      adult: false,
                      backdrop_path: "/aRJjCgp4uVUkXhDw8NClesQXbt3.jpg",
                      genre_ids: [53, 28],
                      id: 727340,
                      original_language: "ko",
                      original_title: "헌트",
                      overview:
                        "After a high-ranking North Korean official requests asylum, KCIA Foreign Unit chief Park Pyong-ho and Domestic Unit chief Kim Jung-do are tasked with uncovering a North Korean spy, known as Donglim, who is deeply embedded within their agency. When the spy begins leaking top secret intel that could jeopardize national security, the two units are each assigned to investigate each other.",
                      popularity: 1058.637,
                      poster_path: "/tDe5eLxAbeK7sYckUn5aH3ngWnn.jpg",
                      release_date: "2022-08-10",
                      title: "Hunt",
                      video: false,
                      vote_average: 6.9,
                      vote_count: 79,
                    },
                    {
                      adult: false,
                      backdrop_path: "/yx96Xz7ggs7TMmDqAa8G5oJ5ami.jpg",
                      genre_ids: [37, 28],
                      id: 1111140,
                      original_language: "en",
                      original_title: "Two Sinners and a Mule",
                      overview:
                        "Kicked out of a small Western town for sinful behavior, free-spirited Alice and Nora set out for Virginia City to pursue their dream of opening a restaurant. Out on the prairie, they come across an injured bounty hunter named Elden. Hoping to share in the reward, they nurse Elden back to health and help him stalk his prey, Grimes. But as Nora and Alice both develop feelings for Elden, no one notices that Grimes is now on their tail, and the hunters become the hunted…",
                      popularity: 992.213,
                      poster_path: "/icL1zn5z1L5ULIpxkuOLjeUgURY.jpg",
                      release_date: "2023-04-21",
                      title: "Two Sinners and a Mule",
                      video: false,
                      vote_average: 6,
                      vote_count: 17,
                    },
                    {
                      adult: false,
                      backdrop_path: "/cYyUinLXRbQwE4PAt2mQLTGBqti.jpg",
                      genre_ids: [28, 9648, 53],
                      id: 876969,
                      original_language: "en",
                      original_title: "Assassin Club",
                      overview:
                        "In this world of contract killers, Morgan Gaines is the best of the best. When Morgan is hired to kill six people around the world, he soon discovers all the targets are also assassins unknowingly hired to kill each other.",
                      popularity: 730.339,
                      poster_path: "/y2d2SBqK33mGOG2CqAYMo3YbWE4.jpg",
                      release_date: "2023-02-24",
                      title: "Assassin Club",
                      video: false,
                      vote_average: 6.7,
                      vote_count: 56,
                    },
                    {
                      adult: false,
                      backdrop_path: "/qUOJGvH8L31HL2b9Q6DGNPGCCI0.jpg",
                      genre_ids: [53, 35, 80],
                      id: 804150,
                      original_language: "en",
                      original_title: "Cocaine Bear",
                      overview:
                        "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
                      popularity: 536.158,
                      poster_path: "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
                      release_date: "2023-02-22",
                      title: "Cocaine Bear",
                      video: false,
                      vote_average: 6.3,
                      vote_count: 1063,
                    },
                    {
                      adult: false,
                      backdrop_path: "/aT3sRVqgpkyCo23fp9myVfKPWbA.jpg",
                      genre_ids: [18, 36],
                      id: 964980,
                      original_language: "en",
                      original_title: "Air",
                      overview:
                        "Discover the game-changing partnership between a then undiscovered Michael Jordan and Nike's fledgling basketball division which revolutionized the world of sports and culture with the Air Jordan brand.",
                      popularity: 466.167,
                      poster_path: "/76AKQPdH3M8cvsFR9K8JsOzVlY5.jpg",
                      release_date: "2023-04-05",
                      title: "Air",
                      video: false,
                      vote_average: 7.5,
                      vote_count: 702,
                    },
                    {
                      adult: false,
                      backdrop_path: "/eEF40Xk2twM3WjRNZftfo771gjv.jpg",
                      genre_ids: [878, 12, 53],
                      id: 700391,
                      original_language: "en",
                      original_title: "65",
                      overview:
                        "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
                      popularity: 624.704,
                      poster_path: "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg",
                      release_date: "2023-03-02",
                      title: "65",
                      video: false,
                      vote_average: 6.3,
                      vote_count: 1070,
                    },
                    {
                      adult: false,
                      backdrop_path: "/pbMbDlOAkVuvnxovBA2ENin59xH.jpg",
                      genre_ids: [12, 10751, 14, 10749],
                      id: 447277,
                      original_language: "en",
                      original_title: "The Little Mermaid",
                      overview:
                        "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
                      popularity: 611.252,
                      poster_path: "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
                      release_date: "2023-05-18",
                      title: "The Little Mermaid",
                      video: false,
                      vote_average: 5.9,
                      vote_count: 43,
                    },
                    {
                      adult: false,
                      backdrop_path: "/c3hl9E8E7b9opXDFVF5tSyk0ykr.jpg",
                      genre_ids: [16, 35, 10751, 12, 14],
                      id: 816904,
                      original_language: "es",
                      original_title: "Momias",
                      overview:
                        "Through a series of unfortunate events, three mummies end up in present-day London and embark on a wacky and hilarious journey in search of an old ring belonging to the Royal Family, stolen by ambitious archaeologist Lord Carnaby.",
                      popularity: 465.019,
                      poster_path: "/qVdrYN8qu7xUtsdEFeGiIVIaYd.jpg",
                      release_date: "2023-01-05",
                      title: "Mummies",
                      video: false,
                      vote_average: 7.1,
                      vote_count: 291,
                    },
                  ],
                  News: [
                    {
                      adult: false,
                      backdrop_path: "/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg",
                      genre_ids: [16, 10751, 12, 14, 35],
                      id: 502356,
                      original_language: "en",
                      original_title: "The Super Mario Bros. Movie",
                      overview:
                        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
                      popularity: 11392.576,
                      poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
                      release_date: "2023-04-05",
                      title: "The Super Mario Bros. Movie",
                      video: false,
                      vote_average: 7.7,
                      vote_count: 3049,
                    },
                    {
                      adult: false,
                      backdrop_path: "/fI5RsaM0NSU6TqztRhA2pal5ezv.jpg",
                      genre_ids: [28, 80, 53],
                      id: 385687,
                      original_language: "en",
                      original_title: "Fast X",
                      overview:
                        "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
                      popularity: 7318.346,
                      poster_path: "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
                      release_date: "2023-05-17",
                      title: "Fast X",
                      video: false,
                      vote_average: 7.1,
                      vote_count: 250,
                    },
                    {
                      adult: false,
                      backdrop_path: "/aAgGrfBwna1nO4M2USxwFgK5O0t.jpg",
                      genre_ids: [53, 27, 14],
                      id: 713704,
                      original_language: "en",
                      original_title: "Evil Dead Rise",
                      overview:
                        "Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
                      popularity: 5196.776,
                      poster_path: "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
                      release_date: "2023-04-12",
                      title: "Evil Dead Rise",
                      video: false,
                      vote_average: 7.1,
                      vote_count: 1197,
                    },
                    {
                      adult: false,
                      backdrop_path: "/qElNES0sHVQcbzvGrTx7ccpGzij.jpg",
                      genre_ids: [878, 28, 18],
                      id: 842675,
                      original_language: "zh",
                      original_title: "流浪地球2",
                      overview: "A prequel to The Wandering Earth.",
                      popularity: 2607.46,
                      poster_path: "/pR858ihc6Ls9xohpdRJVjV787ml.jpg",
                      release_date: "2023-01-22",
                      title: "The Wandering Earth II",
                      video: false,
                      vote_average: 7.2,
                      vote_count: 212,
                    },
                    {
                      adult: false,
                      backdrop_path: "/eTvN54pd83TrSEOz6wbsXEJktCV.jpg",
                      genre_ids: [10752, 28, 53],
                      id: 882569,
                      original_language: "en",
                      original_title: "Guy Ritchie's The Covenant",
                      overview:
                        "During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
                      popularity: 3167.399,
                      poster_path: "/aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg",
                      release_date: "2023-04-19",
                      title: "Guy Ritchie's The Covenant",
                      video: false,
                      vote_average: 7.8,
                      vote_count: 260,
                    },
                    {
                      adult: false,
                      backdrop_path: "/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg",
                      genre_ids: [27, 53, 14],
                      id: 758323,
                      original_language: "en",
                      original_title: "The Pope's Exorcist",
                      overview:
                        "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
                      popularity: 2842.266,
                      poster_path: "/4IjRR2OW2itjQWQnmlUzvwLz9DQ.jpg",
                      release_date: "2023-04-05",
                      title: "The Pope's Exorcist",
                      video: false,
                      vote_average: 7.3,
                      vote_count: 1093,
                    },
                    {
                      adult: false,
                      backdrop_path: "/94TIUEhuwv8PhdIADEvSuwPljS5.jpg",
                      genre_ids: [28, 10752],
                      id: 840326,
                      original_language: "fi",
                      original_title: "Sisu",
                      overview:
                        "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
                      popularity: 3687.897,
                      poster_path: "/tELs0h3PPicRbsuu5cQ8UFcBQno.jpg",
                      release_date: "2023-01-27",
                      title: "Sisu",
                      video: false,
                      vote_average: 7.4,
                      vote_count: 265,
                    },
                    {
                      adult: false,
                      backdrop_path: "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
                      genre_ids: [878, 12, 28],
                      id: 447365,
                      original_language: "en",
                      original_title: "Guardians of the Galaxy Vol. 3",
                      overview:
                        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
                      popularity: 1866.821,
                      poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
                      release_date: "2023-05-03",
                      title: "Guardians of the Galaxy Vol. 3",
                      video: false,
                      vote_average: 8.1,
                      vote_count: 1458,
                    },
                  ],
                },

                children: [
                  {
                    type: "CardRow",
                    data: {
                      id: "4400936b-6158-4943-9dc8-a04c57e1af46y72121",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      items: {
                        title: "string",
                        urlImg: "https://i.stack.imgur.com/y9DpT.jpg",
                        description: "string description",
                        author: "string Jonh",
                        createDay: new Date(),
                        publishDay: new Date(),
                        className: " container2", // enum list
                        id: "4400936b-6158-string", // call api detail
                        slug: "string-this-is article", // change params url ,
                        overview: " string-this-is article___ overview",
                      },
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                  },
                  {
                    type: "BoxCard",
                    data: {
                      id: "4400936b-6158-9087-9dc8-a04c57e1af46121x212",
                      title: "CardTextTitle example",
                      className: "btn-primary",
                      action: {
                        type: "call",
                        url: "https://pokeapi.co/api/v2/",
                      },
                    },
                  },
                  {
                    type: "CardTextTitle",
                    data: {
                      id: "4400936b-6158-4943-9dc8-a04c57e1af46y21217",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        type: "MainTwoColumn",
        data: {
          id: "26b3f355-2f65-4aae3e-b9fd-609779f24fdd212",
          children: [
            {
              type: "CardTitleTop",
              data: {
                id: "26b3f355-2f65-4aae-b9fd-609779f24fdd212",
                title: "A custom title",
                headline: "A random Headline",
                copy: "A really long text....",
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
            },
            {
              type: "BlockContent",
              data: {
                id: "4400936b-6158-9087-9dc8-a04c57e1af46121x2121213",
                children: [
                  {
                    type: "BoxCard",
                    data: {
                      id: "4400936b-6158-9087-9dc8-a04c57e1af46121x212",
                      title: "CardTextTitle example",
                      className: "btn-primary",
                      action: {
                        type: "call",
                        url: "https://pokeapi.co/api/v2/",
                      },
                    },
                  },
                  {
                    type: "BoxCard",
                    data: {
                      id: "4400936b-6158-9087-9dc8-a04c57e1af46121x212",
                      title: "CardTextTitle example",
                      className: "btn-primary",
                      action: {
                        type: "call",
                        url: "https://pokeapi.co/api/v2/",
                      },
                    },
                  },
                ],
              },
            },
            {
              type: "TabColumn",
              data: {
                id: "26b3f355-2f121265-4aae-b9fd-609779f24fdd12122",
                title: "A custom title item 1",
                headline: "A random Headline",
                copy: "A really long text....",
                action: {
                  type: "call",
                  url: "https://pokeapi.co/api/v2/",
                },
              },
            },
          ],
        },
      },
      {
        type: "BoxCategoryThreeColumn",
        data: {
          id: "26b3f355-2f65-4aae3e-b9fd-609779f24fdd212",
          listCategory: [
            { title: "Giải trí" },
            { title: "Giới sao" },
            { title: "Phim Nhạc" },
            { title: "Thời trang" },
          ],
          children: [
            {
              type: "CardColumn",
              data: {
                id: "26b3f355-2f65-4aae-b9fd-609779f24fdd212",
                title: "A custom title",
                headline: "A random Headline",
                copy: "A really long text....",
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
            },
            {
              type: "CardColumn",
              data: {
                id: "4400936b-6158-9087-9dc8-a04c57e1af46121x212",
                title: "CardTextTitle example",
                className: "btn-primary",
                action: {
                  type: "call",
                  url: "https://pokeapi.co/api/v2/",
                },
              },
            },
            {
              type: "CardColumn",
              data: {
                id: "4400936b-6158-9087-9dc8-a04c57e1af46121x212",
                title: "CardTextTitle example",
                className: "btn-primary",
                action: {
                  type: "call",
                  url: "https://pokeapi.co/api/v2/",
                },
              },
            },

            {
              type: "BoxCard",
              data: {
                id: "4400936b-6158-9087-9dc8-a04c57e1af46121x212",
                title: "CardTextTitle example",
                className: "btn-primary",
                action: {
                  type: "call",
                  url: "https://pokeapi.co/api/v2/",
                },
              },
            },
          ],
        },
      },
      {
        type: "BoxCaterogryColumn",
        data: {
          id: "26b3f355-2f65-4aae3e-b9fd-609779f24fdd212",
          listCategory: [
            { title: "Giải trí" },
            { title: "Giới sao" },
            { title: "Phim Nhạc" },
            { title: "Thời trang" },
          ],

          children: [
            {
              type: "CardColumn",
              data: {
                id: "26b3f355-2f65-4aae-b9fd-609779f24fdd212",
                title: "A custom title",
                headline: "A random Headline",
                copy: "A really long text....",
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
            },
            //   {
            //   type: "CardColumn",
            //   data: {
            //     id: "4400936b-6158-9087-9dc8-a04c57e1af46121x212",
            //     title: "CardTextTitle example",
            //     className: "btn-primary",
            //     action: {
            //       type: "call",
            //       url: "https://pokeapi.co/api/v2/",
            //     },
            //   },
            // },
            //  {
            //   type: "CardColumn",
            //   data: {
            //     id: "4400936b-6158-9087-9dc8-a04c57e1af46121x212",
            //     title: "CardTextTitle example",
            //     className: "btn-primary",
            //     action: {
            //       type: "call",
            //       url: "https://pokeapi.co/api/v2/",
            //     },
            //   },
            // },

            //    {
            //   type: "BoxCard",
            //   data: {
            //     id: "4400936b-6158-9087-9dc8-a04c57e1af46121x212",
            //     title: "CardTextTitle example",
            //     className: "btn-primary",
            //     action: {
            //       type: "call",
            //       url: "https://pokeapi.co/api/v2/",
            //     },
            //   },
            // },
          ],
        },
      },
      {
        type: "CarouselTwo",
        data: {
          id: "26b3f355-2f65-4aae3e-b9fd-609779f24fdd212",
          listCategory: [
            { title: "Giải trí" },
            { title: "Giới sao" },
            { title: "Phim Nhạc" },
            { title: "Thời trang" },
          ],

          children: [
            {
              type: "CardColumn",
              data: {
                id: "26b3f355-2f65-4aae-b9fd-609779f24fdd212",
                title: "A custom title",
                headline: "A random Headline",
                copy: "A really long text....",
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
            },
          ],
        },
      },
    ],
  },
};

export default mockResponse;
