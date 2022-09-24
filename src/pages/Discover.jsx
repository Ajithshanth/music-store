import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const genreTitle = "Pop";
//  const { data, isFetching, error } = useGetTopChartsQuery();
  const dataTest = [
    {
      layout: "5",
      type: "MUSIC",
      key: "590865488",
      title: "Yours",
      subtitle: "JIN",
      share: {
        subject: "Yours - JIN",
        text: "I used Shazam to discover Yours by JIN.",
        href: "https://www.shazam.com/track/590865488/yours",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/45/ce/0d/45ce0d71-a400-c4d4-253b-299eaf34eb5e/8809829712307.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Yours by JIN.",
        html: "https://www.shazam.com/snippets/email-share/590865488?lang=en&country=GB",
        avatar:
          "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/bc/00/ab/bc00ab36-828e-0276-7313-5b9e9c8a84b7/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/590865488",
      },
      images: {
        background:
          "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/bc/00/ab/bc00ab36-828e-0276-7313-5b9e9c8a84b7/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/45/ce/0d/45ce0d71-a400-c4d4-253b-299eaf34eb5e/8809829712307.jpg/400x400cc.jpg",
        coverarthq:
          "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/45/ce/0d/45ce0d71-a400-c4d4-253b-299eaf34eb5e/8809829712307.jpg/400x400cc.jpg",
        joecolor: "b:221e1fp:d4d6cfs:d3d8aet:b0b1acq:b0b391",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1593615825",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/b4/f3/05/b4f3054c-de88-9025-48dd-0adfa3aec23a/mzaf_5542347054597380537.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/gb/album/yours/1593615288?i=1593615825&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/gb/album/yours/1593615288?i=1593615825&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "jin",
          id: "42",
          adamid: "1191850724",
        },
      ],
      url: "https://www.shazam.com/track/590865488/yours",
      highlightsurls: {},
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "498502624",
      title: "Under The Influence",
      subtitle: "Chris Brown",
      share: {
        subject: "Under The Influence - Chris Brown",
        text: "I used Shazam to discover Under The Influence by Chris Brown.",
        href: "https://www.shazam.com/track/498502624/-",
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Under The Influence by Chris Brown.",
        html: "https://www.shazam.com/snippets/email-share/498502624?lang=en&country=GB",
        avatar:
          "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/498502624",
      },
      images: {
        background:
          "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
        coverarthq:
          "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
        joecolor: "b:000000p:ffffffs:f63710t:cbcbcbq:c42c0d",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1643756110",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/08/05/ba/0805ba7c-18ca-e15e-ffde-43aeb6319896/mzaf_3853369865271726137.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/gb/album/under-the-influence/1643755888?i=1643756110&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/gb/album/under-the-influence/1643755888?i=1643756110&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "chris-brown",
          id: "42",
          adamid: "95705522",
        },
      ],
      url: "https://www.shazam.com/track/498502624/-",
      highlightsurls: {},
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "628935200",
      title: "I'm Good (Blue)",
      subtitle: "David Guetta & Bebe Rexha",
      share: {
        subject: "I'm Good (Blue) - David Guetta & Bebe Rexha",
        text: "I used Shazam to discover I'm Good (Blue) by David Guetta & Bebe Rexha.",
        href: "https://www.shazam.com/track/628935200/im-good-blue",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/10/07/f9/1007f9e3-9815-38a2-66ae-c1952b1688e9/5054197324338.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover I'm Good (Blue) by David Guetta & Bebe Rexha.",
        html: "https://www.shazam.com/snippets/email-share/628935200?lang=en&country=GB",
        avatar:
          "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/d4/0c/2d/d40c2d6c-9ebc-b1b3-6cd8-36a9fb9d4eef/mzl.jynpmslg.jpg/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/628935200",
      },
      images: {
        background:
          "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/d4/0c/2d/d40c2d6c-9ebc-b1b3-6cd8-36a9fb9d4eef/mzl.jynpmslg.jpg/800x800cc.jpg",
        coverart:
          "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/10/07/f9/1007f9e3-9815-38a2-66ae-c1952b1688e9/5054197324338.jpg/400x400cc.jpg",
        coverarthq:
          "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/10/07/f9/1007f9e3-9815-38a2-66ae-c1952b1688e9/5054197324338.jpg/400x400cc.jpg",
        joecolor: "b:6ec7fdp:141c39s:14202at:263e60q:264154",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1640751223",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/31/5b/be/315bbebd-02df-b244-10a8-eb23386f9675/mzaf_12083215036164425590.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/gb/album/im-good-blue/1640751219?i=1640751223&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/gb/album/im-good-blue/1640751219?i=1640751223&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "david-guetta",
          id: "42",
          adamid: "5557599",
        },
        {
          alias: "bebe-rexha",
          id: "42",
          adamid: "466059563",
        },
      ],
      url: "https://www.shazam.com/track/628935200/im-good-blue",
      highlightsurls: {},
      properties: {},
    },
  ];

//   if (isFetching) return <Loader title="Loading Songs..." />;
//   if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select onChange={() => {}} value="" className="bg-black text-gray-300">
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {dataTest?.map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
