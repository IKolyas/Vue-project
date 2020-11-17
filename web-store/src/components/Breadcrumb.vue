<template>
    <nav aria-label="breadcrumb" class="container">
        <div class="news row flex-column flex-sm-row container justify-content-between align-items-center pt-5 pb-5 mx-0">
            <div class="newsAr">
                <h2>news arrivals</h2>
            </div>
            <ol class="newsNav d-flex">
                <router-link tag="li" class="breadcrumb-item" aria-current="page" :to="{name: 'Index'}">
                    Home
                </router-link>
                <template v-if="type === 'single'">
                  <li class="breadcrumb-item d-flex justify-content-center align-items-center"
                          @click="$router.go(-1)">
                      <i class="fa fa-arrow-left" aria-hidden="true"></i>
                  </li>
                </template>
                <template v-else>
                    <li class="breadcrumb-item"
                        aria-current="page"
                        v-if="category"
                        v-bind:class="{ newsNavLinkActive: !sub}"
                        @click="updateCatalog({category: category.id, subcategory: ''})"
                    >{{category.title}}
                    </li>

                    <li class="breadcrumb-item"
                        v-if="subcategory"
                        aria-current="page"
                        v-bind:class="{ newsNavLinkActive: sub}"
                        @click="updateCatalog({category: category.id, subcategory: subcategory.id})"

                    >{{subcategory.title}}
                    </li>
                </template>
            </ol>
        </div>
    </nav>
</template>

<script>
    import Header from "./Header";

    export default {
        name: 'Breadcrubm',
        extends: Header,
        props: {
            type: {
                type: String,
            },
            item: { type: Object }
        },
        data: () => {
            return {
                categoryObj: '',
                subcategoryObj: '',
                sub: false,
            }
        },
        computed: {
            category() {
                let categoryID = this.$route.params.category
                this.categoryObj = this.$store.state.dropdownMenu.find(category => category.id == categoryID)
                if (this.categoryObj) {
                    this.sub = false;
                    return this.categoryObj;
                } else {
                    return '';
                }
            },
            subcategory() {
                let subcategoryID = this.$route.params.subcategory
                let sub = this.categoryObj ? this.categoryObj.sub.find(category => category.id == subcategoryID) : false;
                if (sub) {
                    this.sub = true;
                    return sub;
                } else {
                    return ''
                }
            }
        }
    }
</script>

<style>

</style>
