<template>
    <div>
        <div class="card text-dark bg-light mb-3" style="max-width: 18rem;"  v-for="item in list" v-bind:key="item.id">
            <div class="card-header">{{item.userid}}</div>
            <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">{{item.body}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    // import list from './../../blogList';
    export default
    {
        name:'Details',

    }
</script>