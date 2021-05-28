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
                    <router-link to="/details" class="navbar-brand" href="#">show</router-link>
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

    Vue.use(VueAxios , axios)
    export default {
        name:'BlogList',
        data(){
            return{
                list:undefined
            }
        },
        mounted(){
        Vue.axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                this.list=res.data;
                console.log(res);
                })
        }

    }
</script>