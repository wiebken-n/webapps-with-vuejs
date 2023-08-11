Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    updateCoordinates(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    removeFruitFromList(fruitToBeDeleted) {
      const filteredFruitArray = this.fruitBasket.filter(
        (fruit) => fruit !== fruitToBeDeleted
      );
      this.fruitBasket = filteredFruitArray;
    },
  },
}).mount("#app");
