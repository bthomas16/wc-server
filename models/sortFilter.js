const knex = require('../config/db.js');


const getWatchCollectionByCondition = (id, conditionToFilterBy) => {
    switch(conditionToFilterBy) {
        case 8: 
            return knex('watch')
                .where('user_id', id)
                .andWhere('condition', '>', 7);
            break;
        case 5: 
            return knex('watch')
                .where('user_id', id)
                .andWhere(function() {
                    this.where('condition', '>', 4)
                    .andWhere('condition', '<', 8)
                })
            break;
        case 1: 
            return knex('watch')
                .where('user_id', id)
                .andWhere('condition', '<', 5);
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
                });
            break;
        case 'trade':
            return knex('watch')
                .where('user_id', id)
                .andWhere(function() {
                    this.where('isForSale', false)
                    .andWhere('isForTrade', true)
                });
            break;
        case 'fsot':
            return knex('watch')
                .where('user_id', id)
                .andWhere(function() {
                    this.where('isForSale', true)
                    .andWhere('isForTrade', true)
                });
            break;
        case 'keeper':
            return knex('watch')
                .where('user_id', id)
                .andWhere(function() {
                    this.where('isForSale', false)
                    .andWhere('isForTrade', false)
                });
            break;
        default:
            return;
    }
}

const getWatchCollectionByStyle = (id, styleToFilterBy) => {
    return knex('watch')
        .where('user_id', id)
        .andWhere('watchStyle', styleToFilterBy);
}

const getWatchCollectionBySearchTerm = (id, searchTerm) => {
    return knex('watch')
        .where('user_id', id).andWhere(function() {
            this.where('name', 'like', '%' + searchTerm + '%')
            .orWhere('brand', 'like', '%' + searchTerm + '%')
        })
}

const getWatchFavorites = (userId, typeOfFavorites) => {
    switch(typeOfFavorites) {
        case 'all': 
            return knex('user_watch_favorited')
                .where('user_watch_favorited.user_id', userId)
                .andWhere('user_watch_favorited.isCurrentFavorite', true)
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
                    .rightOuterJoin('watch', 'watch.user_id', '!=', userId);
                break;
        case 'pastFavorites':
                return knex('user_watch_favorited')
                    .where('user_watch_favorited.user_id', userId)
                    .andWhere('user_watch_favorited.isCurrentFavorite', false)
                    .rightOuterJoin('watch', 'user_watch_favorited.watch_id', 'watch.id');
                break;
        default:
            return true;
    }
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
    getWatchFavorites
}