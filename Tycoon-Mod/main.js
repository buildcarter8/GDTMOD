       Tycoon-Mod.addPlatform = function () {
                var icon = './mods/Tycoon-Mod/img/GameOp.png';
                GDT.addPlatform(
                        {
                                id: 'GameOp',
                                name: 'Game Operation',
                                company: 'Glist games',
                                startAmount: 9.250,
                                unitsSold: 9.578,
                                licencePrize: 2000,
                                published: '1/5/10',
                                platformRetireDate: '6/6/10',
                                developmentCosts: 21000,
                                genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.8],
                                audienceWeightings: [0.9, 1.0, 0.8],
                                techLevel: 1,
                                iconUri: icon,
                                events: [
                                        {
                                                id: '21638DA2-69G2-5G34-9965-Z1Z2621933ZZ',
                                                date: '1/1/1',
                                                getNotification: function (company) {
                                                        return new Notification({
                                                                header: "Industry News".localize(),
                                                                text: "A company called Glist Games has announced that they will publish a new gaming console called the GameOperation {0}.".localize().format(General.getETADescription('1/1/1', '1/2/1')),
                                                                image: icon
                                                        });
                                                }
                                        }
