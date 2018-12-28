const knex = require('../config/db.js');


const getWatchCollectionByCondition = (id, conditionToFilterBy) => {
    switch(conditionToFilterBy) {
        case 8: 
            return knex('watch')
                .where('user_id', id)
                .andWhere('condition', '>', 7)
                .andWhere('isStillInCollection', true);
            break;
        case 5: 
            return knex('watch')
                .where('user_id', id)
                .andWhere(function() {
                    this.where('condition', '>', 4)
                    .andWhere('condition', '<', 8)
                    .andWhere('isStillInCollection', true)
                })
            break;
        case 1: 
            return knex('watch')
                .where('user_id', id)
                .andWhere('condition', '<', 5)
                .andWhere('isStillInCollection', true);
            break;
        default:
                return;
    }
    
}

const getWatchCollectionByStatus = (id, statusToFilterBy) => {
    switch(statusToFilterBy) {
        case 'favorites': // KEEPERS
            return knex.select('*')
                .from('user_watch_favorited')
                .where('user_watch_favorited.isCurrentFavorite', true)
                .andWhere('user_watch_favorited.user_id', req.id)
                .fullOuterJoin('watch', 'user_watch_favorited.user_id', 'watch.user_id')
            break;
        case 'sale':
            return knex('watch')
                .where('user_id', id)
                .andWhere(function() {
                    this.where('isForSale', true)
                    .andWhere('isForTrade', false)
                    .andWhere('isStillInCollection', true)
                });
            break;
        case 'trade':
            return knex('watch')
                .where('user_id', id)
                .andWhere(function() {
                    this.where('isForSale', false)
                    .andWhere('isForTrade', true)
                    .andWhere('isStillInCollection', true)
                });
            break;
        case 'fsot':
            return knex('watch')
                .where('user_id', id)
                .andWhere(function() {
                    this.where('isForSale', true)
                    .andWhere('isForTrade', true)
                    .andWhere('isStillInCollection', true)
                });
            break;
        case 'keeper':
            return knex('watch')
                .where('user_id', id)
                .andWhere(function() {
                    this.where('isForSale', false)
                    .andWhere('isForTrade', false)
                    .andWhere('isStillInCollection', true)
                });
            break;
        default:
            return;
    }
}

const getWatchCollectionByStyle = (id, styleToFilterBy) => {
    return knex('watch')
        .where('user_id', id)
        .andWhere('watchStyle', styleToFilterBy)
        .andWhere('isStillInCollection', true);
}

const getWatchCollectionBySearchTerm = (id, searchTerm) => {
    return knex('watch')
        .where('user_id', id).andWhere(function() {
            this.where('name', 'like', '%' + searchTerm + '%')
            .orWhere('brand', 'like', '%' + searchTerm + '%')
            .andWhere('isStillInCollection', true)
        })
}

const getWatchFavorites = (userId, typeOfFavorites) => {
    switch(typeOfFavorites) {
        case 'all': 
            return knex('user_watch_favorited')
                .where('user_watch_favorited.user_id', userId)
                .andWhere('user_watch_favorited.isCurrentFavorite', true)
                .andWhere('watch.isStillInCollection', true)
                    .rightOuterJoin('watch', 'user_watch_favorited.watch_id', 'watch.id');
                break;
        // case 'inCollection':
        //     return knex('user_watch_favorited')
        //         .distinct()
        //         .where('user_watch_favorited.user_id', userId)
        //         .andWhere('user_watch_favorited.isCurrentFavorite', true)
        //             .rightOuterJoin('watch', 'watch.user_id', '=', userId);
        //         break;
        case 'notInCollection':
            return knex('user_watch_favorited')
                .where('user_watch_favorited.user_id', userId)
                .andWhere('user_watch_favorited.isCurrentFavorite', true)
                    .rightOuterJoin('watch', function() {
                        this.on('watch.user_id', '!=', userId)
                        .andOn('watch.isStillInCollection', true)
                    });
                break;
        case 'pastFavorites':
                return knex('user_watch_favorited')
                    .where('user_watch_favorited.user_id', userId)
                    .andWhere('user_watch_favorited.isCurrentFavorite', false)
                    .rightOuterJoin('watch', function() {
                        this.on('user_watch_favorited.watch_id', 'watch.id')
                        .andOn('watch.isStillInCollection', true)
                    });
                break;
        default:
            return true;
    }
}

const GetPreviousWatches = async function(userId, typeOfPrevious) {
    // always return 'all' previous watches
    return await knex.select('*')
    .from('watch')
    .where('watch.user_id', userId)
    .andWhere('watch.isStillInCollection', false)
    .fullOuterJoin('user_watch_removed', 'watch.id', 'user_watch_removed.watch_id')
        .then(collection => { 
            console.log('c is fucked', collection)
            return collection;
    }) 
}

// return knex('user_watch_favorited').
// .from('user_watch_favorited')
//     .where('user_watch_favorited.isCurrentFavorite', true)
//     .andWhere('user_watch_favorited.user_id', req.id)
//     .fullOuterJoin('watch', 'user_watch_favorited.watch_id', 'watch.id')

module.exports = {
    getWatchCollectionByCondition,
    getWatchCollectionByStatus,
    getWatchCollectionByStyle,
    getWatchCollectionBySearchTerm,
    getWatchFavorites,
    GetPreviousWatches
}