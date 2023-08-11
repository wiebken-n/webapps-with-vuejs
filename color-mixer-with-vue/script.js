Vue.createApp({
  data() {
    return {
      hexvalue: "#a8f060",
      valueRed: 168,
      valueGreen: 240,
      valueBlue: 96,
    };
  },
  methods: {
    getRandomColor() {
      fetch("https://dummy-apis.netlify.app/api/color")
        .then((response) => response.json())
        .then((data) => {
          this.hexvalue = data.color.toLowerCase();
          this.valueRed = data.rgb.r;
          this.valueGreen = data.rgb.g;
          this.valueBlue = data.rgb.b;
        });
    },
  },
  computed: {
    customColors() {
      return {
        "--value-red": this.valueRed,
        "--value-green": this.valueGreen,
        "--value-blue": this.valueBlue,
      };
    },
  },
}).mount("#app");
