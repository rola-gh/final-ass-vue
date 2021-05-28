<template>
    <div>
        <h1>fetch Data</h1>
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
                console.log(res.data);
                })
        }

    }
</script>