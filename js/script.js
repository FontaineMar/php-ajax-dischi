const myApp = new Vue({
  el:'#root',
  data:{
    musicList:[],
    url:'https://flynn.boolean.careers/exercises/api/array/music',
    jazzMusic:[],
    metalMusic:[],
    rockMusic:[],
    popMusic:[]
  },
  mounted:function(){
    axios.get(this.url)
      .then((music)=> {
        let {response} = music.data
      this.musicList.push([...response])
    console.log(this.musicList)});
  },
  methods:{}



})
