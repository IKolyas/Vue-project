
<template >
    <div class="d-flex col-12 p-0">
        <div class="d-flex col-12 m-0 p-0" v-if="this.$store.state.items">
            <!-- ITEMSCATALOG -->
            <div v-if="type === 'index'" class="row d-flex justify-content-around justify-content-lg-between p-0">
                <Item 
                    v-for="item of this.$store.state.items.slice(0, 8)"
                    type="catalog"
                    :item="item"
                    :key="item.id"
                />
            </div>
            <div v-if="type === 'singlePage'" class="row d-flex col-12 justify-content-around justify-content-lg-between p-0">
                <Item 
                    v-for="item of this.$store.state.items.slice(0, 4)"
                    type="catalog"
                    :item="item"
                    :key="item.id"
                />
            </div>
            <div v-if="type === 'products'" class="row d-flex justify-content-around justify-content-lg-between p-0 mx-0 my-2" >
                <div class="sortProd col-12 d-flex align-items-center px-3 my-3">
                        <button class="btn btn-outline-secondary py-0" type="button">Sort By</button>
                        <select class="custom-select col-2 px-1 mx-2  py-0">
                            <option selected>Name</option>
                            <option value="1">Name</option>
                        </select>
                        <button class="btn btn-outline-secondary py-0" 
                                type="button"
                                @click="viewAll(qView)"
                        >Show
                        </button>
                        <select class="custom-select col-2 px-1 mx-2 py-0"
                                v-model.number="qView"
                                @change="viewAll(qView)"
                        >
                            <option value="3">3</option>
                            <option selected>6</option>
                            <option value="9">9</option>
                            <option value="12">12</option>
                        </select>
                
                </div>
                <div class="row d-flex col-12 p-0 mx-0 my-2 justify-content-around justify-content-lg-between">
                    <transition-group name="list" class="row col-12 d-flex justify-content-center justify-content-lg-between m-0 p-0">
                <Item 
                    class="list-item"
                    v-for="item in collections"
                    type="catalog"
                    :item="item"
                    :key="item.id"
                />
                 </transition-group>
                </div>
                <div class="paginationProduct col-12 d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between">
                        <nav aria-label="Page navigation example" class="p-0">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link page-list" href="#" 
                                    @click.prevent="setPage(--pagination.currentPage)"
                                    >
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>

                                <li class="page-item"
                                v-for="(page, index) of pagination.pages" 
                                @click.prevent="setPage(page)" :key="index"> <a class="page-link page-num" href="#">{{page}}</a>
                                </li>

                                <li class="page-item">
                                    <a class="page-link page-list" href="#" 
                                    @click.prevent="setPage(++pagination.currentPage)" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <button type="button"
                        @click.prevent="viewAll()">
                            View All
                        </button>
                    </div>
            </div>
        </div>
        <div v-else>
            <h3>Not Products</h3>
        </div>
    </div>
</template>

<script>

    import lodash from 'lodash'
    const Item = () => import('./Item.vue');

    export default {
        components: {
            Item,
            lodash
        },
        props: {
            type: {
                type: String,
                default: 'index'
            },
        },
        data() {
            return {
                pagination: {},
                qView: 6
            }
        },
        computed: {
            collections() {
                this.$store.commit('filterItem', this.$store.state.priceFilter);
                return this.paginate(this.$store.state.itemsFiltered);
            },
        },

        methods: {
            setPage(page) {
                this.pagination = this.paginator(this.$store.state.items.length, page);
                
            },
            paginate(data) {
                return lodash.slice(data, this.pagination.startIndex, this.pagination.endIndex + 1)
                
            },
            paginator(totalItems, currentPage) {
                let startIndex = (currentPage - 1) * this.$store.state.qItemPages,
                endIndex = Math.min(startIndex + this.$store.state.qItemPages - 1, totalItems -1);
                return {
                    currentPage: currentPage,
                    startIndex: startIndex,
                    endIndex: endIndex,
                    pages: lodash.range(1, Math.ceil(totalItems / this.$store.state.qItemPages) + 1)
                };
            },
            viewAll(quantity=this.$store.state.itemsFiltered.length) {
                this.$store.state.qItemPages = quantity;
                this.setPage(1);
            },

        },
        created() {
            this.setPage(1);
        },
        mounted() {
            this.$store.commit('getCatalog');
            
        }
    }
</script>

<style>

</style>