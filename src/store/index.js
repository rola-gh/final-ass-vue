import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
state: {
blogList: null,
blogDetails:null,
},
getters: {
blogList(state) {
return state.blogList
},
getBlogById (state) {
return state.blogDetails
}

},
mutations: {
SET_BLOG_LIST(state, data) {
state.blogList = data;
},
PUSH_BLOG(state, data){
state.blogList = data;
},
GET_ID(state, data){
state.blogDetails = data;
}
},
actions: {
fetchBlogList({commit}, data) {
//actions have context param which has the same props that store does
//context.commit(' ', data)
commit("SET_BLOG_LIST", data);
},
pushData({commit}, data){
	commit("PUSH_BLOG" , data)
},
fetchById({commit} , data){
	commit("GET_ID" , data)
},
},
modules: {}
})