/*
 * Create by : Mohamed Masoud
 */
define([
    'esri/symbols/SimpleMarkerSymbol',
    'esri/symbols/SimpleLineSymbol',
    'esri/renderers/ClassBreaksRenderer',
    'dojo/_base/Color'
], function(SimpleMarkerSymbol,
    SimpleLineSymbol,ClassBreaksRenderer,Color){
    return {
        firstRank: function () {
            // Rank1 
            var line1 = new SimpleLineSymbol();
            line1.setColor(new Color([255, 0, 0, 0.6]));
            line1.setWidth(1);
            var RankOneSymbol = new SimpleMarkerSymbol();
            RankOneSymbol.setColor(new Color([255, 0, 0, 1]));
            RankOneSymbol.setOutline(line1);
            RankOneSymbol.setSize(17);

            return RankOneSymbol;
        },

        secondRank: function () {
            // Rank from 2 to 4
            var line2 = new SimpleLineSymbol();
            line2.setColor(new Color([230, 152, 0, 1]));
            line2.setWidth(1);
            var OneToFourSymbole = new SimpleMarkerSymbol();
            OneToFourSymbole.setColor(new Color([230, 152, 0, 1]));
            OneToFourSymbole.setOutline(line2);
            OneToFourSymbole.setSize(14);
            return OneToFourSymbole;
        },
        // from 5 and more
        thirdRank: function () {
            var line3 = new SimpleLineSymbol();
            line3.setColor(new Color([230, 230, 0, 1]));
            line3.setWidth(1);
            var fiveAndMoreSymbol = new SimpleMarkerSymbol();
            fiveAndMoreSymbol.setColor(new Color([255, 255, 0, 1]));
            fiveAndMoreSymbol.setOutline(line3);
            fiveAndMoreSymbol.setSize(12);
            return fiveAndMoreSymbol;
        }
    }
});