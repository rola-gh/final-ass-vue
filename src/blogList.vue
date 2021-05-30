<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in list" v-bind:key="item.id">
                <th scope="row">{{item.id}}</th>
                <td>{{item.title}}</td>
                <td>
                    <router-link :to="{ name: 'details', params: { id: item.id }}">Show</router-link>
                    <!--                    <router-link to="/details/${item.id}" id="button" class="navbar-brand" >show</router-link>-->
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import Vue from 'vue';
    import VueAxios from 'vue-axios';
    import axios from 'axios'
    import store from './store';

    Vue.use(VueAxios , axios)
    export default {
        name:'BlogList',
        computed: {
            list() {
                return store.getters.blogList;

            }
        },
        mounted(){
            Vue.axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    store.dispatch("fetchBlogList", res.data);
                    console.log(res.data);

                })
        },

    }
</script>