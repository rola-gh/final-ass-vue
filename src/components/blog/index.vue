<template>
    <div>
        <router-link to="/" class="navbar-brand px-5" href="#">Home</router-link>
        <h1>It is a Blog page</h1>
        <BlogList/>
    </div>
</template>

<script>
    import BlogList from './../../blogList'
	export default {
		name: 'Blog',
        components:{BlogList},
	}
</script>


