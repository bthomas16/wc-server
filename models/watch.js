const knex = require('../config/db.js');

const Watch = (function() {

    function validateWatchFormData(formData) {
        if (!formData.name || formData.name == '')  {
            return { isSuccess: false, message: 'Please provide a watch name' }
        } else if (!formData.src.images[0].src || !formData.src.images[0]) {
            return  { isSuccess: false, message: 'Please provide a watch photo'}
        } else {
            return {isSuccess: true, message: 'Form is valid'}
        }
    }

    async function saveWatchToCollectionDB(formData, user_id, res) {
        try 
        {
            await knex('watch').returning('*').insert(
                {
                    user_id: user_id,

                    src: { images: formData.src.images },
                    condition: formData.condition,
                    brand: formData.brand,
                    name: formData.name,
                    watchStyle: formData.watchStyle,
                    movementType: formData.movementType,
                    movement: formData.movement,
                    sizeLugToLug: formData.sizeLugToLug,
                    sizeWidth: formData.sizeWidth,
                    sizeHeight: formData.sizeHeight,

                    band: formData.band,
                    isForSale: formData.isForSale,
                    isForTrade: formData.isForTrade,
                    isFullKit: formData.isFullKit,
                    model: formData.model,
                    ref: formData.ref,
                    isStillInCollection: true,
                    
                    acquiredFor: formData.acquiredFor,
                    marketValue: formData.marketValue,
                    accuracy: formData.accuracy,
                    crystal: formData.crystal,
                    forSalePrice: formData.forSalePrice,
                    forTradeValue: formData.forTradeValue,
                    dateAcquired: formData.dateAcquired
                }).then((watch) => {
                    res.json({
                        isSuccess: true,
                        message: 'Watch saved to Collection',
                        watch: watch[0]
                    });
                })
                .catch((e) => {
                    console.log(e)
                })  
        }
        catch 
        {
            res.json({isSuccess: false, message: 'Could not save watch to Collection at this time'})
        }
        
    }

    async function updateWatchById(id, formData, res) {
        try 
        {
            knex('watch').where('id', id).returning('*').update(
                {
                    src: { images: formData.src.images },
                    condition: formData.condition,
                    brand: formData.brand,
                    name: formData.name,
                    watchStyle: formData.watchStyle,
                    movementType: formData.movementType,
                    movement: formData.movement,
                    sizeLugToLug: formData.sizeLugToLug,
                    sizeWidth: formData.sizeWidth,
                    sizeHeight: formData.sizeHeight,

                    band: formData.band,
                    isForSale: formData.isForSale,
                    isForTrade: formData.isForTrade,
                    isFullKit: formData.isFullKit,
                    model: formData.model,
                    ref: formData.ref,
                    
                    acquiredFor: formData.acquiredFor,
                    marketValue: formData.marketValue,
                    accuracy: formData.accuracy,
                    crystal: formData.crystal,
                    forSalePrice: formData.forSalePrice,
                    forTradeValue: formData.forTradeValue,
                    dateAcquired: formData.dateAcquired
                }).then((watch) => {
                    return res.json({
                        isSuccess: true,
                        message: 'Watch edited successfully',
                        watch: watch[0]
                    });
                }).catch((e) => {
                console.log(e)
            }) 
        }
        catch 
        {
            res.json({isSuccess: false, message: 'Could not save watch to Collection at this time'})
        }   
    }




    return { 
        validateWatchFormData,
        saveWatchToCollectionDB,
        updateWatchById
    }
})()



module.exports = Watch;  