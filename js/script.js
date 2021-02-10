new Vue({
  el: '#app',
  data:{
    movie: '',
     movieList:[

    ],
    flagList:[

    ]
  },
  methods:{
    search: function () {
      const self = this;
      
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=883ce966ab68df0a28febc7e02e61163&language=it IT&query=' + this.movie)
      
      .then((resp) => {
          const film = resp.data.results;
          console.log(resp.data.results);
          self.movieList = film;
        });
    },
    vote:(vote) => {
      return parseInt(vote / 2)
    },
  }

});
Vue.config.devtools = true
