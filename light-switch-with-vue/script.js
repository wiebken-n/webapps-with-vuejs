Vue.createApp({
  data() {
    return {
      dark: false,
      title: "Good Morning",
    };
  },
  methods: {
    toggleLight() {
      this.dark = !this.dark;
      this.toggleTitle();
    },
    toggleTitle() {
      if (!this.dark) {
        this.title = "Good Morning";
      } else {
        this.title = "Good Night";
      }
    },
  },
  computed: {},
}).mount("#app");
