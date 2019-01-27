exports.seed = function(knex, Promise) {
  
  
  // Deletes ALL existing entries
  return knex('watch').del().then(function() {
    
    
   
    let watches = [{
      user_id: 987654321,

      src: { images: [{src: '/api/static-assets/zelos-featured.jpg', order: 0}, {src: '/api/static-assets/tcm-featured.jpg', order: 1}, {src: '/api/static-assets/tcm-white-featured.jpg', order: 2}] },
      condition: 8,
      brand: "Bromega",
      name: "Chillario",
      watchStyle: "diver",
      movementType: "automatic",
      movement: "eta",
      sizeLugToLug: 22,
      sizeWidth: 44,
      sizeHeight: 13,

      band: "Leather Ostrich",
      isForSale: true,
      isForTrade: false,
      isFullKit: true,
      model: "ljk8764",
      ref: "hk-897",
      isStillInCollection: true,
      
      acquiredFor: 175,
      marketValue: 645,
      accuracy: "-4",
      crystal: "sapphire",
      forSalePrice: 475,
      forTradeValue: 600,
      dateAcquired: "10/11/2018"
      },
      {
      user_id: 987654321,

      src: { images: [{src: '/api/static-assets/ch-ward-featured.jpg', order: 0}, {src: '/api/static-assets/aragon-featured.jpg', order: 1}, {src: '/api/static-assets/fortuna-featured.jpg', order: 2}] },      
      condition: 8,
      brand: "Bromacho",
      name: "Trillario",
      watchStyle: "chronograph",
      movementType: "quartz",
      movement: "rhonda",
      sizeLugToLug: 24,
      sizeWidth: 41,
      sizeHeight: 11,

      band: "Leather Suede",
      isForSale: true,
      isForTrade: false,
      isFullKit: true,
      model: "lsfgejk8764",
      ref: "hsdflkjgk-897",
      isStillInCollection: true,
      
      acquiredFor: 205,
      marketValue: 475,
      accuracy: "+2",
      crystal: "domed-sapphire",
      forSalePrice: 175,
      forTradeValue: 400,
      dateAcquired: "02/18/2016"
      },
      {
        user_id: 987654321,
  
        src: { images: [{src: '/api/static-assets/zelos-featured.jpg', order: 0}, {src: '/api/static-assets/tcm-featured.jpg', order: 1}, {src: '/api/static-assets/tcm-white-featured.jpg', order: 2}] },
        condition: 8,
        brand: "Brillchancho",
        name: "Chillario",
        watchStyle: "dress",
        movementType: "automatic",
        movement: "eta",
        sizeLugToLug: 22,
        sizeWidth: 44,
        sizeHeight: 13,
  
        band: "Leather BirdFace",
        isForSale: true,
        isForTrade: false,
        isFullKit: true,
        model: "ljk8764",
        ref: "hk-897",
        isStillInCollection: true,
        
        acquiredFor: 175,
        marketValue: 645,
        accuracy: "-2",
        crystal: "sapphire",
        forSalePrice: 475,
        forTradeValue: 600,
        dateAcquired: "10/11/2018"
        },
          {
          user_id: 987654321,
    
          src: { images: [{src: '/api/static-assets/ch-ward-featured.jpg', order: 0}, {src: '/api/static-assets/aragon-featured.jpg', order: 1}, {src: '/api/static-assets/fortuna-featured.jpg', order: 2}] },      
          condition: 8,
          brand: "Broschmega",
          name: "Broschmega",
          watchStyle: "chronograph",
          movementType: "quartz",
          movement: "rhonda",
          sizeLugToLug: 24,
          sizeWidth: 41,
          sizeHeight: 11,
    
          band: "Leather Suede",
          isForSale: true,
          isForTrade: false,
          isFullKit: true,
          model: "lsfgejk8764",
          ref: "hsdflkjgk-897",
          isStillInCollection: true,
          
          acquiredFor: 225,
          marketValue: 475,
          accuracy: "+2",
          crystal: "domed-sapphire",
          forSalePrice: 175,
          forTradeValue: 400,
          dateAcquired: "02/18/2016"
          },
          {
            user_id: 987654321,
      
            src: { images: [{src: '/api/static-assets/zelos-featured.jpg', order: 0}, {src: '/api/static-assets/tcm-featured.jpg', order: 1}, {src: '/api/static-assets/tcm-white-featured.jpg', order: 2}] },
            condition: 8,
            brand: "Hotega",
            name: "BrillBario",
            watchStyle: "sport",
            movementType: "automatic",
            movement: "eta",
            sizeLugToLug: 22,
            sizeWidth: 44,
            sizeHeight: 13,
      
            band: "Leather Alligator",
            isForSale: true,
            isForTrade: false,
            isFullKit: true,
            model: "ljk8764",
            ref: "hk-897",
            isStillInCollection: true,
            
            acquiredFor: 175,
            marketValue: 645,
            accuracy: "-4",
            crystal: "sapphire",
            forSalePrice: 475,
            forTradeValue: 600,
            dateAcquired: "10/11/2018"
            },
            {
            user_id: 987654321,
      
            src: { images: [{src: '/api/static-assets/ch-ward-featured.jpg', order: 0}, {src: '/api/static-assets/aragon-featured.jpg', order: 1}, {src: '/api/static-assets/fortuna-featured.jpg', order: 2}] },      
            condition: 8,
            brand: "Hancho",
            name: "Schmoschmancho",
            watchStyle: "diver",
            movementType: "quartz",
            movement: "rhonda",
            sizeLugToLug: 24,
            sizeWidth: 41,
            sizeHeight: 11,
      
            band: "Leather Suede",
            isForSale: true,
            isForTrade: false,
            isFullKit: true,
            model: "lsfgejk8764",
            ref: "hsdflkjgk-897",
            isStillInCollection: true,
            
            acquiredFor: 225,
            marketValue: 475,
            accuracy: "+2",
            crystal: "domed-sapphire",
            forSalePrice: 175,
            forTradeValue: 400,
            dateAcquired: "02/18/2016"
        }]

        return knex('watch').insert(watches);        

    })
};
  