<template>
    <div>
        <template v-if="type === 'catalog'">
            <div class="prodCard card col-12 col-md-6 col-lg-4 mx-0 px-0 mb-5 rounded-sm border-light">
                <div class="psevProdCard mx-0 px-0">
                    <button class="d-flex justify-content-around"
                            >
                        <i class="fas fa-cart-plus"></i>Add to Cart
                    </button>
                </div>
                <img :src="item.img[0].path" class="card-img-top" :alt="item.title">
                <div class="psevProdCardBody card-body d-flex flex-column align-content-start pb-0 px-3">

                        <a href="#" class="card-text" @click="getOneProduct(item.id)">{{ item.title }}</a>

<!--                    <router-link :to="{path: `/single-page/${item.id}`}">-->
<!--                        <a href="#" class="card-text">{{ item.title }}</a>-->
<!--                    </router-link>-->
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="d-flex justify-content-between">${{ item.price }}</p>
                        <button class="d-flex d-md-none justify-content-around"
                                >
                            Add to Cart
                            <i class="fas fa-cart-plus pl-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </template>

        <template v-if="type === 'basket'">
            <div>
                <div class="d-flex px-3 justify-content-between align-items-center py-1">
                    <router-link :to="{name: 'SinglePage', params: item}">
                        <a href="#"><img :src="item.img" :alt="item.title"></a>
                    </router-link>
                    <div class="d-flex flex-column justify-content-center align-items-center product__text">
                        <h3 class="mb-0">{{item.title}}</h3>
                        <div class="stars py-0">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <p class="mt-1">{{+item.quantity}} x $
                            <span class="product__Price">{{+item.price}}</span>
                        </p>
                    </div>
                    <button name="remove" class="dell__Product fa fa-times-circle"
                            @click="removeCard(item, item.size, item.color)"
                            data-id="${item.id}"
                            aria-hidden="true">
                    </button>
                </div>
                <div class="dropdown-divider mx-3"></div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'catalog'
            },
            item: { type: Object }
        },
        methods: {
            getOneProduct(id) {
                this.$store.dispatch('getProductOne', id).then( () =>
                    this.$router.push({path: `/single-page/${id}`})
                )
            }
            // addToCard(item, count=1) {
            //     this.$store.commit('add', {item, count});
            // },
            // removeCard(item, size, color) {
            //     this.$store.commit('remove', {item, size, color});
            // }
        },
        mounted() {


        }
    }
</script>

<style>

</style>
