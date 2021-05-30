<template>
    <div>
        <div class="card text-dark bg-light mb-3 details" style="max-width: 18rem;" >
            <div class="card-header">{{item.id}}</div>
            <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">{{item.body}} </p>
            </div>
        </div>
    </div>
</template>
<script>
    import store from './../../store';
    import Vue from 'vue';

    export default
    {
        name:'Details',
        computed: {
            item() {
                return store.getters.getBlogById
            }
        },
        mounted(){
            // console.log(this.$route, "id")

            const id = this.$route.params.id;
              Vue.axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(res => {
                    store.dispatch("fetchById", res.data);
                    console.log(res.data);
                })
        }
    }
</script>
<style>
    .details{
        margin: 10% auto;
    }
</style>