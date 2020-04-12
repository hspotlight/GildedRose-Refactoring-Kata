const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  describe("normal item", () => {
    it("item name should be foo", () => {
      const gildedRose = new Shop([new Item("foo", 1, 1)]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).toBe("foo");
    });

    it("sellIn date should decrease by 1 after EOD", () => {
      const gildedRose = new Shop([new Item("foo", 1, 1)]);

      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(0);
    });

    it("sellIn date should be -1 after sell by date", () => {
      const gildedRose = new Shop([new Item("foo", 0, 1)]);

      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(-1);
    });

    it("quality should be decreased by 1 after EOD", () => {
      const gildedRose = new Shop([new Item("foo", 0, 1)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    });

    it("quality should be decreased by 1 after sell by date", () => {
      const gildedRose = new Shop([new Item("foo", -1, 1)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    });

    it("quality should stay zero after quality drop to zero", () => {
      const gildedRose = new Shop([new Item("foo", -1, 0)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    });

    it("quality should not greater than 50", () => {
      const gildedRose = new Shop([new Item("normal item", 10, 50)]);

      const items = gildedRose.items;

      expect(items[0].quality).toBe(50);
    });
  });
  describe("Sulfuras", () => {
    it("quality should not degrade and stay in 80", () => {
      // TODO: change 'Sulfuras, Hand of Ragnaros' to Sulfuras
      const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", 10, 80),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(80);
    });
    it("sellIn should not descrease and stay same as given date", () => {
      const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", 10, 80),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(10);
    });
  });
  describe("Aged Brie", () => {
    it("sellIn date should descrease by 1", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 10, 40)]);

      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(9);
    });

    it("quality should increase by 1", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 10, 40)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(41);
    });

    it("quality should not greater than 50", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(50);
    });
  });
  describe("Backstage passes", () => {
    it("quality should increase by 1 if sellIn date more than 10", () => {
      // TODO: change 'Backstage passes to a TAFKAL80ETC concert' to Backstage passes
      const gildedRose = new Shop([
        new Item("Backstage passes to a TAFKAL80ETC concert", 11, 40),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(41);
    });

    [6, 7, 8, 9, 10].forEach((sellIn) => {
      it("quality should increase by 2 if sellIn date is " + sellIn, () => {
        const gildedRose = new Shop([
          new Item("Backstage passes to a TAFKAL80ETC concert", sellIn, 40),
        ]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(42);
      });
    });
    [1, 2, 3, 4, 5].forEach((sellIn) => {
      it("quality should increase by 3 if sellIn date is " + sellIn, () => {
        const gildedRose = new Shop([
          new Item("Backstage passes to a TAFKAL80ETC concert", sellIn, 40),
        ]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(43);
      });
    });
    it("quality should drop to 0 if passes sell by date", () => {
      const gildedRose = new Shop([
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    });
  });
});
