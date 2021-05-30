import Blog from './../components/blog';
import Create from './../components/blog/create';
import Details from './../components/blog/details';
import Home from './../components/home';

export default [
	{path:'/blog' , component:Blog},
	{path:'/create' , component:Create},
	{path:'/details' , component:Details},
	{path:'/' , component:Home},
];