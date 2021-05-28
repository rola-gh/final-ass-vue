<template>
    <div class="creation">
        <div class="home-btn">
            <router-link to="/" type="button" class="btn btn-success mx-5">Home</router-link>
        </div>
        <h1>Create new blog</h1>
        <form class="form-panel">
            <div class="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Please enter title blog">
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Content</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    1st classification
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    2nd classification
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    3rd classification
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    4th classification
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    5th classification
                </label>
            </div>
        </form>
    </div>
</template>

<script>
	export default {
		name: 'Create'
	}
</script>

<style>
    .home-btn{
        margin-top: 10px;
    }
    h1{
        text-align: center;
    }
    .form-panel{
        width: 350px;
        background-color: #2c3e50;
        color: #d0d0d0;
        display: block;
        padding: 10px;
        border-radius: 10px;
        margin: 50px auto;
    }
</style>


