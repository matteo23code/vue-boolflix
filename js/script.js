new Vue({
  el: '#app',
  data:{
    movie: '',
     resultLauncher:[
       
     ],
     movieList: [],
     showTvList:[]
  },
  methods:{
    search () {
      this.resultLauncher = [];
     this.searchMovie();
     this.searchShowTv();
    },

    searchMovie() {  
      
      axios
      .get('https://api.themoviedb.org/3/search/movie',{ 
        params:{
          api_key:'883ce966ab68df0a28febc7e02e61163',
          query: this.movie,
          language: 'it_IT',
        }
      }) 
      .then((resp) => {
        this.movieList = resp.data.results;
        console.log(resp.data.results);
        this.resultLauncher = [...this.movieList, ...this.resultLauncher]
        }) 
    },
    searchShowTv() {
      
      axios
      .get('https://api.themoviedb.org/3/search/tv', {  
        params: {   
          api_key: '883ce966ab68df0a28febc7e02e61163',
          query: this.movie,
          language: 'it_IT',
        }
      })

      .then((resp) => {
          this.showTvList = resp.data.results;
          console.log(resp.data.results);
          this.resultLauncher = [...this.showTvList, ...this.resultLauncher]
      })
    },
    vote:(vote) => {
      return parseInt(vote / 2)
    },
  }

});
Vue.config.devtools = true
