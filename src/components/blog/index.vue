<template>
    <div>
        <Nav/>
        <h1>Blog List</h1>
        <div class="blog-list">
            <BlogList/>
        </div>
    </div>
</template>

<script>
    import BlogList from './../../blogList'
    import Nav from "./nav";

    export default {
		name: 'Blog',
        components:{BlogList , Nav},
	}
</script>


<style>
    .blog-list{
        width:85%;
        display: block;
        background-color: #f9f9f9;
        margin: 2% auto;
        padding: 5px;
    }
</style>