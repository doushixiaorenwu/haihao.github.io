(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-afc07212"],{1558:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"artisr-list"}},[t.songs?e("div",[e("div",{staticClass:"header"},[e("span",{staticClass:"play el-icon-video-play",on:{click:t.allPlay}},[t._v(" 播放全部")]),e("span",{staticClass:"collection"},[t._v("收藏")])]),e("div",{staticClass:"artist-table"},[t._m(0),e("div",{staticClass:"box"},t._l(t.songs,(function(s,i){return e("ul",{key:s.id,staticClass:"list",class:t.currenSong.id==s.id&&t.playState?"active":""},[e("li",[e("div",{staticClass:"icon"},[e("span",{staticClass:"num"},[t._v(t._s(i+1))]),e("i",{staticClass:"pause-btn el-icon-video-pause",on:{click:t.pauseState}}),e("i",{staticClass:"play-btn el-icon-video-play",on:{click:function(s){return t.playSong(i)}}})]),e("div",{staticClass:"song ellipsis"},[e("img",{attrs:{src:s.songImg,alt:""}}),t._v(" "+t._s(s.songname)+" ")]),e("div",{staticClass:"singer ellipsis "},[t._v(" "+t._s(s.singer)+" ")]),e("div",{staticClass:"ablum ellipsis"},[t._v(t._s(s.blum))]),e("div",{staticClass:"time"},[t._v(" "+t._s(t._f("dateFormat")(s.time,"MM:SS"))+" ")])])])})),0)])]):e("div",[t._v("哈哈哈")])])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"title"},[e("li",{staticClass:"th-index"},[t._v("序号")]),e("li",{staticClass:"th-name"},[t._v("歌曲")]),e("li",{staticClass:"th-artist"},[t._v("歌手")]),e("li",{staticClass:"th-album"},[t._v("专辑")]),e("li",{staticClass:"th-duration"},[t._v("时长")])])}],l=e("5530"),n=e("2f62"),c={props:["songs"],computed:Object(l["a"])({},Object(n["c"])(["playState","currenSong"])),methods:Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(n["b"])(["playAll","selectPlay"])),Object(n["d"])({setPlayState:"SET_PLAYSTATE",setPauseState:"SET_PAUSE_STATE"})),{},{allPlay:function(){this.playAll(this.songs)},playSong:function(t){this.selectPlay({list:this.songs,index:t})},pauseState:function(){this.setPauseState(!1)}})},o=c,r=(e("51f3"),e("2877")),u=Object(r["a"])(o,i,a,!1,null,"588b42b6",null);s["a"]=u.exports},2954:function(t,s,e){"use strict";var i=e("32a6"),a=e.n(i);a.a},"2e86":function(t,s,e){},"324c":function(t,s,e){t.exports=e.p+"img/erji.f9e4f869.svg"},"32a6":function(t,s,e){},"3a3b":function(t,s,e){},"51f3":function(t,s,e){"use strict";var i=e("e353"),a=e.n(i);a.a},"7a42":function(t,s,e){"use strict";var i=e("3a3b"),a=e.n(i);a.a},"81f4":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.songSheet?i("div",{staticClass:"song"},t._l(t.songSheet,(function(s){return i("div",{key:s.id,staticClass:"list ",on:{click:function(e){return t.toDetail(s.id)}}},[i("img",{attrs:{src:s.picUrl||s.coverImgUrl,alt:""}}),i("div",{staticClass:"ellipsis-two "},[t._v(t._s(s.name))]),i("div",{staticClass:"icon"},[i("img",{attrs:{src:e("324c"),alt:""}}),t._v(t._s(s.playCount?s.playCount:s.type))])])})),0):t._e()},a=[],l={props:["songSheet"],methods:{toDetail:function(t){this.$router.push({path:"/playlistdetail",query:{id:t}})}}},n=l,c=(e("7a42"),e("2877")),o=Object(c["a"])(n,i,a,!1,null,"3098830e",null);s["a"]=o.exports},8262:function(t,s,e){"use strict";var i=e("2e86"),a=e.n(i);a.a},"893c":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"profile"}},[e("div",{staticClass:"bg"},[e("div",{staticClass:"info"},[e("img",{attrs:{src:t.userDetail.avatarUrl,alt:""}}),e("div",{staticClass:"name"},[t._v(t._s(t.userDetail.nickname))]),e("div",{staticClass:"resources"},[e("div",{staticClass:"follows"},[e("div",{staticClass:"num"},[t._v(t._s(t.userDetail.follows))]),e("p",[t._v("关注")])]),e("i",{staticClass:"line"}),e("div",{staticClass:"followeds"},[e("div",{staticClass:"num"},[t._v(t._s(t.userDetail.followeds))]),e("p",[t._v("粉丝")])])])])]),e("div",{staticClass:"header limit"},[e("ul",{staticClass:"nav"},t._l(t.nav,(function(s){return e("li",{key:s.id,class:{active:t.id===s.id},on:{click:function(e){return t.active(s.id)}}},[t._v(t._s(s.name))])})),0),1===t.id?e("div",{staticClass:"like"},[e("ul",{staticClass:"item"},t._l(t.like,(function(s){return e("li",{key:s.id,class:{active:t.itemActiveId===s.id},on:{click:function(e){return t.itemActive(s.id)}}},[t._v(t._s(s.name))])})),0),1===t.itemActiveId?e("songs-list",{attrs:{songs:t.recordSong}}):t._e(),2===t.itemActiveId?e("song-sheet",{attrs:{songSheet:t.collectSheet}}):t._e()],1):t._e(),2===t.id?e("div",{staticClass:"my-sheet"},[e("song-sheet",{attrs:{songSheet:t.mySongSheet}})],1):t._e(),3===t.id?e("div",{staticClass:"follows"},[e("follows",{attrs:{follows:t.follows}})],1):t._e(),4===t.id?e("div",{staticClass:"follows"},[e("follows",{attrs:{follows:t.followeds}})],1):t._e()])])},a=[],l=(e("4160"),e("159b"),e("5530")),n=e("0de1"),c=e("f350");function o(t,s){return Object(c["a"])({url:"/user/record",params:{uid:t,type:s}})}function r(t,s,e){return Object(c["a"])({url:"/user/playlist",params:{uid:t,limit:s,offset:e}})}function u(t,s,e){return Object(c["a"])({url:"/user/follows",params:{uid:t,limit:s,offset:e}})}function d(t,s,e){return Object(c["a"])({url:"/user/followeds",params:{uid:t,limit:s,offse:e}})}var f=e("6a93"),v=e("1558"),m=e("81f4"),_=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"follows"},t._l(t.follows,(function(s){return e("div",{key:s.userId,staticClass:"content"},[e("img",{attrs:{src:s.avatarUrl,alt:""}}),e("div",{staticClass:"name"},[t._v(t._s(s.nickname))]),e("div",{staticClass:"num"},[t._v(t._s(s.followeds)+"人关注")]),t._m(0,!0)])})),0)},h=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"box"},[e("i",{staticClass:"el-icon-check"}),t._v(" 已关注")])}],p={props:["follows"]},g=p,C=(e("8262"),e("2877")),S=Object(C["a"])(g,_,h,!1,null,"3fd40d82",null),w=S.exports,y=e("2f62"),b={components:{songsList:v["a"],songSheet:m["a"],follows:w},data:function(){return{userDetail:{},id:1,itemActiveId:1,recordSong:[],mySongSheet:{},collectSheet:{},follows:[],followeds:[],like:[{name:"播放记录",id:1},{name:"歌单",id:2},{name:"粉丝",id:3}],nav:[{name:"我喜欢",id:1},{name:"我创建的歌单",id:2},{name:"关注",id:3},{name:"粉丝",id:4}]}},created:function(){},mounted:function(){var t=sessionStorage.getItem("id");console.log(t),this.init(t)},computed:Object(l["a"])({},Object(y["c"])(["loginState","userInfo"])),methods:{init:function(t){this.getUserDetail(t),this.getRecord(t),this.getUserPlayList(t),this.getFollows(t),this.getFolloweds(t)},getUserDetail:function(t){var s=this;Object(n["c"])(t).then((function(t){var e=t.data.profile;e.level=t.data.level,e.createDays=t.data.createDays,e.createTime=t.data.createTime,e.listenSongs=t.data.listenSongs,s.userDetail=e,console.log(s.userDetail)}))},getRecord:function(t){var s=this;o(t).then((function(t){var e=[],i=[];t.data.allData.forEach((function(t){e.push(t)})),e.forEach((function(t){i.push(new f["a"](t.song))})),s.recordSong=i}))},getUserPlayList:function(t){var s=this;r(t).then((function(e){var i=[],a=[];e.data.playlist.forEach((function(s){s.userId==t?i.push(s):a.push(s)})),s.mySongSheet=i,s.collectSheet=a}))},getFollows:function(t){var s=this;u(t).then((function(t){s.follows=t.data.follow}))},getFolloweds:function(t){var s=this;d(t).then((function(t){s.followeds=t.data.followeds,console.log(t)}))},active:function(t){this.id=t},itemActive:function(t){this.itemActiveId=t}}},k=b,j=(e("2954"),Object(C["a"])(k,i,a,!1,null,"9e35dc48",null));s["default"]=j.exports},e353:function(t,s,e){}}]);
//# sourceMappingURL=chunk-afc07212.53d5b678.js.map