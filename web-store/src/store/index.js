import Vue from 'vue'
import Vuex from 'vuex'
import {methods} from '../api/crud.js'
import {urls} from '../api/urls.js'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        products: [],
        product: [],
        sizesCategory: [],
        dropdownMenu: [],

    },

    mutations: {
    },
    actions: {
        async getCatalog({state}, params = '') {
            let url = `${urls.catalogUrl}${params}`
            await methods.get(url)
                .then(items => {
                    state.products = items
                })
        },
        async getProductOne({state}, id = '') {
            let productUrl = `${urls.article}${id}`
            console.log(productUrl)
            await methods.get(productUrl)
                .then(item => {
                    state.product = item.results[0];
                })
        },
        async getDropdownCategory({state}, param = '') {
            let url = urls.dropdownCategoryUrl + param
            await methods.get(url)
                .then(catalog => {
                    state.dropdownMenu = catalog
                })
        },
        async getSizes({state}, params = '') {
            let url = `${urls.categorySizes}${params}`

            await methods.get(url)
                .then(category => {
                    state.sizesCategory = category
                })
        },
        async getPagination({state}, url = '') {
            await methods.get(url)
                .then(items => {
                    state.products = items;
                })
        },

    },
    modules: {},
    getters: {
        filterCatalog: state => {
            return state.products.results
        },
        sizesCatalog: state => {
            return state.sizesCategory.results ?
                Object.values(state.sizesCategory.results).map(size => Object.values(size)) : []

        },

    }
})
