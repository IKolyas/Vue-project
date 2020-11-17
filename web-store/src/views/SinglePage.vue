<template>
    <div>
        <div class="newsProd">
            <Breadcrubm type="single" :item="item"/>
        </div>
        <div class="col-12 corusBlock">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 corImg py-4" :src="item.img[0].path"
                             :alt="item.title">
                    </div>
                    <div class="carousel-item" v-for="img of item.img">
                        <img class="d-block w-100 corImg" :src="img.path" :alt="item.title">
                    </div>
                </div>
                <a class="carousel-control-prev " href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon carusRow px-1 py-1" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next " href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon carusRow " aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <main class="container productListContainer d-flex justify-content-center">
            <div class="productList row col-12  d-flex justify-content-center align-items-stretch py-4">
                <span class="col-12 d-flex align-items-center justify-content-center">Category</span>
                <div class="plrows col-12 d-flex align-items-stretch justify-content-center ">
                    <div class="plrow"></div>
                    <div class="plrow plrowActive"></div>
                    <div class="plrow"></div>
                </div>
                <h2 class="col-12 text-center">{{item.title}}</h2>
                <p class="col-12 d-flex align-items-center justify-content-center">
                    {{item.description}}
                </p>
                <div class="item-info col-12 d-flex align-items-stretch justify-content-center">
                    <p class="mx-4">MATERIAL: <span> </span></p>
                    <p class="mx-4">DESIGNER: <span>BINBURHAN</span></p>
                </div>
                <div class="money col-12 d-flex align-items-stretch justify-content-center">${{item.price}}
                </div>
                <div class="lineList col-12 d-flex align-items-center justify-content-center"></div>
                <div class="select__params row col-12 d-flex align-items-center justify-content-center">
                    <label v-if="item.color" class="d-flex flex-column mx-4">CHOOSE COLOR
                        <select  class="px-2 mt-2" >
                            <option
                                    v-for="color of item.color" v-bind:key="color">{{color}}
                            </option>
                        </select>
                    </label>
                    <label v-if="item.size" class="d-flex flex-column mx-4">CHOOSE SIZE
                        <select class="px-2 mt-2">
                            <option>{{item.size}}
                            </option>
                        </select>
                    </label>
                    <label class="d-flex flex-column mx-4 ">QUANTITY
                        <input
                                type="number"
                                min="1"
                                max="50"
                                step="1"
                                class="px-4 mt-2"
                                pattern="^[0-9]+$"
                                value="1"
                        >

                    </label>
                </div>
                <div class="ButList col-12 d-flex justify-content-center align-items-center pb-5">
                    <button
                            type="button">
<!--                            @click="addItem($route.params, count, size, color)"-->

                        <svg class="bi bi-cart2" width="1.6em" height="1.6em" viewBox="0 0 16 16" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>
        </main>
        <div class="container">
            <div class="row labelText d-flex justify-content-center col-12 my-2 pb-4">you may like also</div>
        </div>
        <div class="container ">

            <!--CATALOG -->
            <Catalog type="singlePage"/>
        </div>
    </div>
</template>

<script>
    const Catalog = () => import('../components/Catalog.vue');
    const Breadcrubm = () => import('../components/Breadcrumb.vue');


    export default {
        components: {
            Catalog,
            Breadcrubm,
        },

        data() {
            return {

            };
        },
        computed: {
            item() {
                return this.$store.state.product
            }
        },
        methods: {

        },
        mounted() {

        },
        created() {
            this.$store.dispatch('getCatalog')
            this.$store.dispatch('getProductOne', this.$route.params.id)
        }
    }
</script>

<style>

</style>
