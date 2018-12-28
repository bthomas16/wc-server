const express = require('express');
const router = express.Router();
const knex = require('../config/db.js');
const Promise = require('promise');

const watchInfos = [
    {
        id: 1,
        brand: "Ocean Crawler",
        text: "Ocean Crawler is an American watchmaking company based in Rochester, New York, which specializes in self-winding and automatic mechanical watches. The designs have aesthetics that express nostalgic sophistication, but are built for contemporary adventurists with an active lifestyle. With an aim to produce high quality, high end watches - Ocean Crawler focuses on reliability, durability, accuracy, and style. Our watches are not simply display pieces but built to be enjoyed in any situation. Ocean Crawler watches are built to withstand extreme environments and have to pass ten different shock tests before being released. The most severe is the high impact hammer test. This shock testing equipment submits the watch to an impact equivalent to 6,000 G - Hundreds of times more than a car crash test. Yet the watch has to remain unharmed and fully functional afterwards, maintaining a high standard of accuracy. We encompass each limited edition design with a unique character that is totally individual to the brand. This vision will always be carried forward into every new model we create.",
        siteLink: "https://www.oceancrawler.com/",
        logoSrc: '/api/static-assets/oc-logo.png'
    },
    {
        id: 2,
        brand: "Aragon",
        text: "Since the birth of the company in 1991, Wing Liang, lead designer and CEO of ARAGON WATCHES USA, has been driven by a constant desire to meet the expectations of the watch loving community. Liang has a unique talent of crafting timepieces that are visually and aesthetically astounding.        With a degree in International Business from Florida Atlantic University under his belt and an intangible love of a fine time pieces, Wing joined forces with his eldest sibling Angela, to create a company that would challenge traditional timepiece making. Their wish to create a contemporary line that was affordable to every watch connoisseur was set in motion with their motto: `Building into the future by respecting our past.` A slogan the company has stayed true to from its founding. Wing, as the sole designer, drew inspiration from music, cars, movies and machines and often his earlier pieces entailed fun and funky twists. (Attracting the likes of sci-fi movie makers with his ‘Alien’ design and a cult underground following with timepieces such as the ‘HYDRO’) As the company has matured, so has Liang’s designs and use of materials, which are comparable to that of any leading luxury timepiece company. His motivation remains unchanged however, to incorporate his real love of fine watch designs, his creations today lean more towards building specific case designs to house select Swiss and Japanese movements.(However the twists are still evident keeping the brand fresh and exciting) And his use of high quality materials, such as ceramic and tungsten, have watch enthusiasts salivating for more. It is very rare to see such a young company mature so quickly. However from day one Wing and Angela have poured their heart and soul into making Aragon the timepiece powerhouse it is today and have always stayed true to their beliefs of creating modern, luxury designs that are accessible to everyone. Wings conventional, unisex designs are constantly featured in the media and continue to receive international acclaim.",
        siteLink: "https://www.aragonwatch.com/",
        logoSrc: '/api/static-assets/aragon.jpg'
    },
    {
        id: 3,
        brand: "Christopher Ward",
        text: "Inspired by the ’50s, the FORTUNA Chronometrie watches are shown in a classically-elegant retro design. Fortuna linked modern technology with timeless, exclusive design. Through years of experience in traditional German watchmaking and personal passion with attention to detail, the exclusive Fortuna emerged Chronometrie timepiece. The quality characteristics of FORTUNA include selected materials and advanced functionality. The time of technological upheaval is revived by the timeless retro design combined with quality craftsmanship and watchmaking. A finely banded minute scale, the fine nostalgic pointer and graceful chronograph eyes contribute to subtly colored dial. For perfect vision in every situation we installed in each of our lavishly produced stainless steel cases the anti-reflective sapphire crystal. FORTUNA Chronometrie attaches great importance to quality, precision and attention to detail. Because of that MADE IN GERMANY is not only our claim, but also our passion. The traditional german craftsmanship and the attention to detail will breathe life into every FORTUNA timepiece. In order to ensure our quality standards in production and service we employ only highly qualified watchmakers master and journeymen at our workshops in Germany. Each of our watches is equipped with a hand-made leather strap. MADE IN GERMANY means the highest quality standards for us. With a FORTUNA leather strap you acquire an exclusive handicraft product. The preparation of these leather straps devoted a lot of time. Our high quality handmade leather straps MADE IN GERMANY still be processed and made in elaborate, traditional art in more than 140 steps. A gentle manufacturing process guarantees natural, unique masterpieces. To give our quality even more expression every FORTUNA Chronometrie timepiece has a 2-year international warranty. Through our unique control and testing procedures that each FORTUNA passes we can ensure this warranty.",
        siteLink: "https://www.christopherward.com/",
        logoSrc: '/api/static-assets/ch-ward.png'
    },
    {
        id: 4,
        brand: "Zelos",
        text: "Zelos was founded to offer timepieces with cutting-edge designs and materials such as bronze or carbon fiber. We design and produce watches from the ground up, ensuring that you get a watch that can be found no where else. Since the start of Zelos in 2014, we have launched 3 models on Kickstarter with increasing success. Our first model, the Helmsman garnered 273% of the targeted funding. The Chroma followed next with 350% and finally the Abyss with an overwhelming 650% of funding. Zelos is based in Singapore and was founded by Elshan Tang. Having been fascinated by mechanical timepieces for many years, building one was the next logical step. He believes that great timepiece designs should not be confined to luxury brands.",
        siteLink: "https://zeloswatches.com/",
        logoSrc: '/api/static-assets/zelos.png'
    },
    {
        id: 5,
        brand: "Terra Cielo Mare",
        text: 'Exploring the World to know ourselves: Terra Cielo Mare was born in 1999 and for more than 10 years it was managed by it’s founder, that passed away before 2010. It was a military brand, inspired by the Italian military history. When I took the brand in 2013 I was so much fashinated by the original concept, as in Italy we have lot of history to tell, but I realized that to believe and have success in my work, I would need to change something in the brand, to make it more modern and similar to my ideas. I love to explore the world, cities and far wilderness. About Terra Cielo Mare: Terra Cielo Mare is a family company that, one generation after another, creates uncommon and peculiar timepieces. We think the best way to carve out our living space in a world full of giants is being able to listen to our interior voice, following our passions and consequently having some fun. Behind everyone of our watches there’s a passion, a quest, sometimes an obsession – always something which we believed in."',
        siteLink: "https://www.terracielomare.com",
        logoSrc: '/api/static-assets/tcm.png'
    }

];

router.get('/', (req, res) => {
    let watchInfoId = req.query.watchInfoId;
    let watchInfo = watchInfos.find(x => x.id == watchInfoId);
    res.json({watchInfo});
});

module.exports = router;
