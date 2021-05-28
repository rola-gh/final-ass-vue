<template>
    <div>
        <nav class="navbar navbar-light bg-light ">
            <div class="container-fluid">
                <router-link to="/blog" class="navbar-brand px-5" href="#">Blog</router-link>
                <router-link to="/create" type="button" class="btn btn-success">Create</router-link>
            </div>
        </nav>
    </div>
</template>
<script>
	export default {
		name:"Nav",
	}
</script>