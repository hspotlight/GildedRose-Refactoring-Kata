const { ITEM_NAME } = require("./item_name");

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const itemName = this.items[i].name;
      if (
        itemName != ITEM_NAME.AGED_BRIE &&
        itemName != ITEM_NAME.BACKSTAGE_PASSES
      ) {
        if (this.items[i].quality > 0) {
          if (itemName != ITEM_NAME.SULFURAS) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (itemName == ITEM_NAME.BACKSTAGE_PASSES) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }

      if (itemName != ITEM_NAME.SULFURAS) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      if (this.items[i].sellIn < 0) {
        if (itemName != ITEM_NAME.AGED_BRIE) {
          if (itemName != ITEM_NAME.BACKSTAGE_PASSES) {
            if (this.items[i].quality > 0) {
              if (itemName != ITEM_NAME.SULFURAS) {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
