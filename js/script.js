const myApp = new Vue({
  el:'#root',
  data:{
    musicList:[],
    url:'http://localhost:8888/esercizi-php/php-ajax-dischi/database.php',
    jazzMusic:[],
    metalMusic:[],
    rockMusic:[],
    popMusic:[]
  },
  mounted:function(){
    axios.get('http://localhost:8888/esercizi-php/php-ajax-dischi/database.php')
      .then((music)=> {
        let {response} = music.data
      this.musicList.push(...response)
    console.log(this.musicList)});
  },




})
