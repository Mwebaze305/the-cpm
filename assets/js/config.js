/* Site settings. Edit these values; nothing else needs to change. */
window.CPM_CONFIG = {
  /* Your Substack address, e.g. "https://thecpm.substack.com".
     Leave empty until the Substack is ready: the subscribe boxes will then
     tell readers that subscriptions open soon. */
  substackUrl: "https://thecredenceletters.substack.com",

  /* Image shown faintly behind the front-page hero. */
  heroImage: "assets/img/covers/credence-1.jpg",

  /* Where Exchange of Notes registrations are sent.
     Use a free Formspree form URL, e.g. "https://formspree.io/f/abcdwxyz".
     Leave empty until it is set up: the form will say registration is not connected yet. */
  exchangeFormEndpoint: "",

  /* Co-founder and correspondent in Tanzania (public health).
     The card in the Founders section stays hidden until a name is set.
     photo: optional, e.g. "assets/img/cofounder.jpg" (portrait, about 4:5);
     without one, his initials are shown. */
  cofounder: {
    name: "",
    photo: ""
  },

  /* Expert desk (expert.html), review queue (review.html) and Briefings.
     From your Supabase project's API settings, paste the Project URL and the
     publishable key (it starts sb_publishable_, or use the legacy "anon" key).
     Both are meant to be public: the rules in supabase/schema.sql protect the
     data. Never paste the secret or service_role key here.
     Leave both empty until Supabase is set up: the desk then offers a preview
     (expert.html?preview) and Briefings says the first pieces are on the way. */
  supabaseUrl: "",
  supabaseKey: "",

  /* Languages offered by the switcher, in display order.
     Each one needs a matching file in assets/js/i18n/. */
  languages: ["en", "fr", "th", "sw"],
  defaultLanguage: "en"
};
