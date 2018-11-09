const knex = require('../config/db');

const Watch = (function() {

    function validateWatchFormData(formData, res) {
        if(!formData)  res.json({isSuccess: false, message: 'Please send a valid form'});
        else if (!formData.name)  res.json({isSuccess: false, message: 'Please provide a watch name'});
        else {
            return true
        }
    }

    async function saveWatchToCollectionDB(formData, user_id, res) {
        try 
        {
            console.log('ooooof', formData.src)
            await knex('watch').returning('*').insert(
                {
                    user_id: user_id,

                    src: formData.src,
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
                    console.log('saved!', watch)
                    res.json({
                        isSuccess: true,
                        message: 'Watch saved to Collection',
                        watch: watch[0]
                    });
                }
            ) 
        }
        catch 
        {
            res.json({isSuccess: false, message: 'Could not save watch to Collection at this time'})
        }
        
    }

    async function updateWatchById(id, formData, res) {
        try 
        {
            console.log('hopefully updating watch to db', formData);
            knex('watch').where('id', id).returning('*').update(
                {
                    // src: formData.src,
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
                    console.log('did it!!!',watch)
                    res.json({
                        isSuccess: true,
                        message: 'Watch updated in Collection',
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