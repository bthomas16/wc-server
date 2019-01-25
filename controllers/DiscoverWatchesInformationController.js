const express = require('express');
const router = express.Router();
const knex = require('../config/db.js');
const Promise = require('promise');

const watchInfos = [
    {
        id: 1,
        brand: "Ocean Crawler",
        description: [
            "Ocean Crawler is an American watchmaking company based in Rochester, New York, which specializes in self-winding and automatic mechanical watches. The designs have aesthetics that express nostalgic sophistication, but are built for contemporary adventurists with an active lifestyle.",
            "With an aim to produce high quality, high end watches - Ocean Crawler focuses on reliability, durability, accuracy, and style. Our watches are not simply display pieces but built to be enjoyed in any situation.",
            "Ocean Crawler watches are built to withstand extreme environments and have to pass ten different shock tests before being released. The most severe is the high impact hammer test. This shock testing equipment submits the watch to an impact equivalent to 6,000 G - Hundreds of times more than a car crash test. Yet the watch has to remain unharmed and fully functional afterwards, maintaining a high standard of accuracy.",
            "We encompass each limited edition design with a unique character that is totally individual to the brand. This vision will always be carried forward into every new model we create."
        ],
        siteLink: "https://www.oceancrawler.com/",
        logoSrc: '/api/static-assets/oc-logo.png'
    },
    {
        id: 2,
        brand: "Aragon",
        description: [
            "Since the birth of the company in 1991, Wing Liang, lead designer and CEO of ARAGON WATCHES USA, has been driven by a constant desire to meet the expectations of the watch loving community. Liang has a unique talent of crafting timepieces that are visually and aesthetically astounding.",
            "With a degree in International Business from Florida Atlantic University under his belt and an intangible love of a fine time pieces, Wing joined forces with his eldest sibling Angela, to create a company that would challenge traditional timepiece making.",
            "Their wish to create a contemporary line that was affordable to every watch connoisseur was set in motion with their motto: ‘Building into the future by respecting our past.’ A slogan the company has stayed true to from its founding.",
            "Wing, as the sole designer, drew inspiration from music, cars, movies and machines and often his earlier pieces entailed fun and funky twists. (Attracting the likes of sci-fi movie makers with his ‘Alien’ design and a cult underground following with timepieces such as the ‘HYDRO’)",
            "As the company has matured, so has Liang’s designs and use of materials, which are comparable to that of any leading luxury timepiece company. His motivation remains unchanged however, to incorporate his real love of fine watch designs, his creations today lean more towards building specific case designs to house select Swiss and Japanese movements.(However the twists are still evident keeping the brand fresh and exciting) And his use of high quality materials, such as ceramic and tungsten, have watch enthusiasts salivating for more.",
            "It is very rare to see such a young company mature so quickly. However from day one Wing and Angela have poured their heart and soul into making Aragon the timepiece powerhouse it is today and have always stayed true to their beliefs of creating modern, luxury designs that are accessible to everyone. Wings conventional, unisex designs are constantly featured in the media and continue to receive international acclaim."
        ],
        siteLink: "https://www.aragonwatch.com/",
        logoSrc: '/api/static-assets/aragon.jpg'
    },
    {
        id: 3,
        brand: "Christopher Ward",
        description: [
            "It all started with three friends discussing going into business together during a gentle trip down the Thames in May 2004.",
            "Mike and Peter, having sold their Early Learning Centre (ELC) educational toy brand a month earlier, were searching for their next challenge and, as chance would have it, Chris was also keen to move on from his clothing import business. All three had a love of watches and Mike and Peter had created a successful ELC website, so it wasn’t too many miles (or beers) before the idea of what eventually became Christopher Ward was hatched – the only problem was that although they had between them more than 75 years’ experience of retail brands, they knew next to nothing about the watch industry. Their first piece of luck was, fortunately, near at hand",
            "A mutual friend, who by now had become one of Adidas’s largest suppliers, had started his career in the Swiss watch industry, still had friendships at the very highest level in watchmaking and was happy to make the necessary introductions. A rare and vital insight and education into the art and science of Swiss watchmaking followed and the three friends made three important discoveries:",
            "Most of the Swiss brands were using the same or similar components, from the same manufacturers, to make their superb timepieces",
            "That the fledgling CW brand could access the very same components",
            "The mark–ups from manufacturing costs to RRP were high to staggering. In one instance, they discovered that one very famous Swiss brand was marking up by 34 times!",
            "A mixture of incredulity, indignation and, to be fair, good old–fashioned nous kicked in and with the clarity provided by this lightbulb moment, the idea of creating premium quality watches at a fraction of the usual prices was born. The co–founders were on a mission from this point onwards to deliver what they called at the time, “the cheapest most expensive watches in the world” and give as many people as possible the wonderfully visceral pleasure of owning and wearing a truly fine watch. After the early meetings in an office at Soho Square in London, they moved with this high ideal in mind into Christopher Ward’s first, inauspicious HQ – a converted chicken shack on a farm in Cookham Dean, Berkshire.",
            "On 2nd June, 2005, the first two watches, the C5 Malvern Automatic and the C3 Malvern Chronograph were launched onto an unsuspecting (and largely unaware) world via the website and a full–page in The Independent newspaper. For the first few months the sales were slow to non–existent and then, suddenly, business started to pick up with orders coming from all over the world, including rather bizarrely, the North Pole! Encouraged but mystified, the three co–founders only later discovered they had just enjoyed the second piece of extraordinary good fortune.",
            "Seeing the advertisement for the C5 Malvern Automatic in The Independent, Dave Malone, a lecturer and eminent horophile from Tasmania, was extremely surprised and more than a little suspicious to see the (obviously false) claim that a watch at the price shown could possibly be powered by a genuine ETA 2824–2 Swiss–made automatic movement. He bought one and was preparing to write a scathing review of the watch thereby exposing the three charlatans behind this new upstart brand, Christopher Ward.",
            "To Dave’s credit and to our eternal good fortune, when he received his CW, opened up the back and realised he was in possession of the genuine article. Instead of posting an obituary, he posted a eulogy on what was then the world’s largest watch forum Timezone.com, proclaiming, amongst many other nice things about the C5, that he had unearthed the 'best value mechanical watch in the world!'",
            "As a highly respected member, Dave’s post caused a huge stir to the point that before Christmas 2005, fewer than six months after launching, Christopher Ward was being discussed on the world’s largest watch forum more than Rolex.",
            "Encouraged by Dave’s post, others started to buy the C5 Malvern and many followed Dave’s lead and posted incredible reviews. Convinced that these posts were being paid for by CW (it’s called “schilling” in the internet world) Timezone started to ban many of these CW protaganists. A Dutchman, Hans Van Hoogstraten, was one such member banned from Timezone who was so impressed by his C5 he called us, told us the story (which was the first we knew of Dave’s post and the subsequent firestorm – indeed it was the first time we had even heard of Timezone!), and asked if could start a forum dedicated to all things CW. We had been going six months, we had two watches, so of course, agreed, with the proviso that it was completely independent of CW, and so the CW Forum started its active life. After nine years of fantastic work when the forum grew to a membership of more than 10,000 CW fans and hundreds of thousands of posts, Hans passed the forum over to us in 2015 (the man deserved a break, after all).",
            "The Christopher Ward Forum remains one of the key routes, along with the CW Enthusiasts page on Facebook, for people interested in Christopher Ward to do their research on our watches – as well as participating in the often lively debates! We will forever be grateful to Dave Malone and Hans for their early support of the CW brand, and to our past and present day mods.",
            "By 2008 with the business growing, a restless desire to keep pushing the boundaries of quality and watchmaking skills led the team to Synergies Horlogères (SH), a small, independent watchmaking atelier owned and led by Jörg Bader. There was an immediate chemistry between the CW founders and Jörg who instantly recognised the potential of the CW brand and its unique formula of high quality and accessible pricing. Within a year, SH became CW’s major supply partner and a year later the two companies were working together on the creation of their own movement, designed by SH’s watchmaking wunderkind, Johannes Jahnke. Calibre SH21, with its 5–day power reserve and chronometer status, was eventually launched in July 2014 on the same day that Christopher Ward and Synergies Horlogères merged to form Christopher Ward Holdings Limited. ",
            "It is hard to overstate the importance of a small, independent, British watch brand bringing its own commercially viable movement to market – after all, no–one had done it in more than 50 years – and in many ways July 2nd 2014, almost 10 years to the day since the boat trip on the Thames, was the day Christopher Ward came of age.",
            "We continue to grow (we have customers now in more than 100 countries) and whilst we have come a long way since those days in the converted chicken shack, everyone at CW, whether based in Maidenhead or Biel, remains totally committed to the art of crafting beautiful, premium quality watches that are accessible to the many, not the few."
        ],
        siteLink: "https://www.christopherward.com/",
        logoSrc: '/api/static-assets/ch-ward.png'
    },
    {
        id: 4,
        brand: "Zelos",
        description: [
            "Zelos was founded to offer timepieces with cutting-edge designs and materials such as bronze or carbon fiber. We design and produce watches from the ground up, ensuring that you get a watch that can be found no where else.",
            "Since the start of Zelos in 2014, we have launched 3 models on Kickstarter with increasing success. Our first model, the Helmsman garnered 273% of the targeted funding. The Chroma followed next with 350% and finally the Abyss with an overwhelming 650% of funding.",
            "Zelos is based in Singapore and was founded by Elshan Tang. Having been fascinated by mechanical timepieces for many years, building one was the next logical step. He believes that great timepiece designs should not be confined to luxury brands."
        ],
        siteLink: "https://zeloswatches.com/",
        logoSrc: '/api/static-assets/zelos.png'
    },
    {
        id: 5,
        brand: "Terra Cielo Mare",
        description: [
            "Terra Cielo Mare was born in 1999 and for more than 10 years it was managed by it’s founder, that passed away before 2010. It was a military brand, inspired by the Italian military history. When I took the brand in 2013 I was so much fashinated by the original concept, as in Italy we have lot of history to tell, but I realized that to believe and have success in my work, I would need to change something in the brand, to make it more modern and similar to my ideas. I love to explore the world, cities and far wilderness.",
            "- Luca Fontana, Terra Cielo Mare CEO",
            "Terra Cielo Mare is a family company that, one generation after another, creates uncommon and peculiar timepieces. We think the best way to carve out our living space in a world full of giants is being able to listen to our interior voice, following our passions and consequently having some fun. Behind everyone of our watches there’s a passion, a quest, sometimes an obsession – always something which we believed in."
        ],
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
