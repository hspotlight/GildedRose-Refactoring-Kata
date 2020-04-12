const { ITEM_NAME } = require("./item_name");
const { Item } = require("./item");
class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const itemName = this.items[i].name;
      if (itemName == ITEM_NAME.SULFURAS) {
        continue;
      }

      if (
        itemName == ITEM_NAME.AGED_BRIE ||
        itemName == ITEM_NAME.BACKSTAGE_PASSES
      ) {
        if (this.isQualityLessThan50(this.items[i].quality)) {
          this.items[i].quality = this.items[i].quality + 1;
          if (itemName == ITEM_NAME.BACKSTAGE_PASSES) {
            if (this.isQualityLessThan50(this.items[i].quality)) {
              if (this.items[i].sellIn < 11) {
                this.items[i].quality = this.items[i].quality + 1;
              }
              if (this.items[i].sellIn < 6) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      } else {
        if (this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality - 1;
        }
      }

      this.items[i].sellIn = this.items[i].sellIn - 1;

      if (this.items[i].sellIn < 0) {
        if (itemName == ITEM_NAME.AGED_BRIE) {
          if (this.isQualityLessThan50(this.items[i].quality)) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        } else if (itemName == ITEM_NAME.BACKSTAGE_PASSES) {
          this.items[i].quality = 0;
        } else {
          if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      }
    }

    return this.items;
  }

  isQualityLessThan50(quality) {
    return quality < 50;
  }
}

module.exports = {
  Item,
  Shop,
};
