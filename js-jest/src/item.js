class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
class NormalItem extends Item {
  updateQuality() {
    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0) {
      this.quality = this.quality - 2;
      if (this.quality < 0) {
        this.quality = 0;
      }
    } else {
      this.quality = this.quality - 1;
      if (this.quality < 0) {
        this.quality = 0;
      }
    }
  }
}
class SulfurasItem extends Item {
  updateQuality() {}
}
class AgedBrieItem extends Item {
  updateQuality() {
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0) {
      this.quality = this.quality + 2;
      if (this.quality > 50) {
        this.quality = 50;
      }
    } else {
      this.quality = this.quality + 1;
      if (this.quality > 50) {
        this.quality = 50;
      }
    }
  }
}
class BackStagePassesItem extends Item {
  updateQuality() {
    if (this.sellIn < 6) {
      this.quality = this.quality + 3;
    } else if (this.sellIn < 11) {
      this.quality = this.quality + 2;
    } else {
      this.quality = this.quality + 1;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }

    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0) {
      this.quality = 0;
    }
  }
}
exports.Item = Item;
exports.NormalItem = NormalItem;
exports.SulfurasItem = SulfurasItem;
exports.AgedBrieItem = AgedBrieItem;
exports.BackStagePassesItem = BackStagePassesItem;
