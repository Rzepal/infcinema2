(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{368:function(e,t,n){"use strict";n.r(t);n(74),n(38),n(20),n(39);var r={data:function(){return{results:null,isLoadedInfo:!1}},mounted:function(){var e=this;fetch("".concat("https://api.themoviedb.org/3/").concat("person","/").concat(this.$route.params.id,"?api_key=").concat("58666352553834b5820ef436680fb2e5").concat("&append_to_response=external_ids,images,combined_credits","&language=").concat("en-EN")).then((function(e){return e.json()})).then((function(t){e.results=t,e.isLoadedInfo=!0}),(function(t){console.log(t),e.isLoadedInfo=!0}))},computed:{getUrl:function(){if(this.results.combined_credits.cast){var e=0;return this.results.combined_credits.cast.forEach((function(i){i.popularity>e&&i.backdrop_path&&(e=i)})),e.backdrop_path}return null},getAge:function(){var b=this.results.birthday,e=this.results.deathday;return b?e?Math.abs(new Date(new Date(e)).getUTCFullYear()-1970):Math.abs(new Date(new Date-new Date(b)).getUTCFullYear()-1970):null}}},o=n(5),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isLoadedInfo?n("div",[n("Top",{attrs:{"poster-path":e.results.profile_path,name:e.results.name,job:e.results.known_for_department,birthday:e.results.birthday,deathday:e.results.deathday,gender:e.results.gender,biography:e.results.biography,age:e.getAge,url:e.getUrl,mode:"person"}}),e._v(" "),n("CenterDetails",{attrs:{results:e.results,mode:"person",place:e.results.place_of_birth,also:e.results.also_known_as}})],1):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Top:n(236).default,CenterDetails:n(237).default})}}]);