const express = require('express');
const router = express.Router();
const knex = require('../config/db.js');

const articles = [
    {
        id: 1,
        title: "Snoopy",
        paragrahps: [
        "At the end of last week, a stainless-steel Rolex Daytona sold for a world-record-breaking $17.8 million as part of Phillips’ WINNING ICONS – Legendary Watches of the 20th Century auction in New York, making it the most expensive watch in the world. But what is it about this timepiece in particular that made someone willing to part with such a huge sum to own it? It’s not the fact that it’s a Rolex Daytona, even though the stainless-steel model is the most sought-after in the world (Watches of Switzerland in London recently closed its waiting list, such is the demand). Rather, it is because of its previous owner: the late Hollywood heart throb Paul Newman, who died in 2008.",
        "The Rolex “Paul Newman” Daytona, as this watch is better known, is the Holy Grail of collectable timepieces and one of the most talked about watches of all time. Bought from a Tiffany & Co. store in New York by his actress wife, Joanne Woodward, and given to Newman while they were filming the 1969 movie Winning, it has the words “Drive Carefully Me” inscribed on the reverse – a personal note from Woodward that referenced a previous motorbike accident and Newman’s love of auto racing, which he later made a career of. Prior to the auction, there was much speculation about the watch’s whereabouts. The story that unfolded after the news that this legendary watch would be heading to auction dates back to the summer of 1984 when Newman, his daughter Nell and her boyfriend at the time, James Cox, were at the actor’s home in Westport, Conneticut. Cox didn’t own a watch, so he casually asked Newman the time. He responded by handing over his Rolex Daytona, uttering the famously understated words, “Here, here’s a watch. If you wind it, it tells pretty good time.” Cox continued to wear the watch every day until the 1990s, and that was the last that was seen of it until earlier this year. Cox and his ex-girlfriend remained friends, and while Cox put it up for auction, a portion of the proceeds of its sale will benefit the Nell Newman Foundation, which continues the philanthropic work of her father, and Newman’s Own Foundation.",
        "Newman owned a handful of Daytonas, but this particular model, the “exotic dial” Daytona Reference 6239, with a steel bezel and pump pushers, is the one that everyone wants. Worn on a military Fatstrap – a thick leather strap for your watch that was the height of style in the 1970s – it was captured for eternity in the iconic image of Newman, above."



        ]
    },
    {
        id: 2,
        title: "loopy",
        text: "2nd All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        articleImg: "https://www.russian-watches.info/wp-content/uploads/2016/05/Aviator_TALALIHIN_Poljot_3105_1734390.jpg"
    },
    {
        id: 3,
        title: "droples",
        text: "3rd All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        articleImg: "http://www.secretentourage.com/wp-content/uploads/2009/08/2825260084_106b2078ab_b.jpg"
    },
    {
        id: 3,
        title: "droples",
        text: "3rd All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        articleImg: "http://www.secretentourage.com/wp-content/uploads/2009/08/2825260084_106b2078ab_b.jpg"
    },
];

router.get('/', (req, res) => {
    console.log('found me')
    res.json({articles});
});

router.get('/:id', (req, res) => {
    let articleId = req.params.id;
    let article = articles.find(x => x.id == articleId);
    res.json({article});
});

module.exports = router;
