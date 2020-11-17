<template>
    <nav class="container">
        <div class="topNav d-none d-sm-flex flex-column flex-lg-row justify-content-center align-items-center">
            <ul class="topMenu d-flex flex-column flex-lg-row justify-content-center align-items-center p-0 m-0 ">
                <router-link :to="{name: 'Index'}" tag="li" class="menu__top__link">Home</router-link>

                <li v-for="category in $store.state.dropdownMenu"
                    class="menu__top__link py-2"

                >
                    <h2 class="m-0 p-0" @click="updateCatalog({category: category.id, subcategory: ''})">{{category.title}}</h2>

                    <ul v-if="category.sub && category.sub.length > 0"
                        class="d-none submenu row d-md-flex flex-md-column py-2 px-4 mx-5"
                    >
                        <h3 class="mb-0 mt-2"> категории </h3>
                        <div class="dropdown-divider"></div>
                        <li v-for="sub of category.sub"
                            class="subMenuLink d-flex col-4 flex-column mx-2 px-2"
                            @click="updateCatalog({category: category.id, subcategory: sub.id})"
                        >
                            -{{sub.title}}
                        </li>
                    </ul>
                </li>
                <router-link :to="{name: 'Products'}" tag="li" class="menu__top__link">Women
                    <ul class="d-none submenu row d-md-flex">
                        <li class="col-4 d-flex flex-column mx-2 py-2">
                            <h3 class="mb-0 mt-2">Women</h3>
                            <div class="dropdown-divider"></div>
                            <a class="subMenuLink" href="#">Dresses</a>
                            <a class="subMenuLink" href="#">Tops</a>
                            <a class="subMenuLink" href="#">Sweaters/Knits</a>
                            <a class="subMenuLink" href="#">Jackets/Coats</a>
                            <a class="subMenuLink" href="#">Blazers</a>
                            <a class="subMenuLink" href="#">Denim</a>
                            <a class="subMenuLink" href="#">Leggings/Pants</a>
                            <a class="subMenuLink" href="#">Skirts/Shorts</a>
                            <a class="subMenuLink" href="#">Accessories </a>
                            <img src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/subMenu.jpg"
                                 alt="subMan" class="mt-3 submenu__img">
                        </li>
                    </ul>
                </router-link>
                <router-link :to="{name: 'Products'}" tag="li" class="menu__top__link">Kids</router-link>
                <router-link :to="{name: 'Products'}" tag="li" class="menu__top__link">Featured</router-link>
                <router-link :to="{name: 'Products'}" tag="li" class="menu__top__link">Hot Deals</router-link>
            </ul>
        </div>
        <div class="topNavMobile fixed-top d-block d-sm-none">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-light p-4 d-flex flex-column justify-content-center">
                    <router-link :to="{name: 'Index'}"><a href="#">Home</a></router-link>

                    <h4  v-for="category in $store.state.dropdownMenu"
                         @click="updateCatalog({category: category.id})">
                        {{category.title}}
                    </h4>
                    <router-link :to="{name: 'Products'}">
                        <a href="#">Accoseriese</a>
                    </router-link>
                    <router-link :to="{name: 'Products'}">
                        <a href="#">Featured</a>
                    </router-link>
                    <router-link :to="{name: 'Products'}">
                        <a href="#">Hot Deals</a>
                    </router-link>

                </div>
            </div>
            <nav class="navbar navbar-light bg-light row mx-1">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="rTop d-flex justify-content-center align-items-center justify-content-lg-start">
                    <router-link :to="{name: 'ShoppingCart'}">
                        <a href="#" class="fa fa-shopping-cart my__cart px-2" aria-hidden="true"></a>
                    </router-link>
                    <div class="btn-group">
                        <router-link tag="button" class="btn btn-danger p-1" :to="{name: 'CheckOut'}">
                            My Account
                        </router-link>
                    </div>
                </div>
            </nav>
        </div>
    </nav>
</template>

<script>
    import Header from "./Header";
    import {GetCatalogParams} from '../utils/GetCatalogParams.js'

    export default {
        name: "Navigation",
        extends: Header,
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {
            this.$store.dispatch('getDropdownCategory');
        }
    }
</script>

<style>

</style>
