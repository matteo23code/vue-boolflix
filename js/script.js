new Vue({
  el: '#app',
  data:{
    movie: '',
     movieList:[

    ]
  },
  methods:{
    search: function () {
      const self = this;

      axios.get('https://api.themoviedb.org/3/search/movie?api_key=883ce966ab68df0a28febc7e02e61163&query=' + this.movie)

        .then(function(resp) {
          const film = resp.data.results
          console.log(resp.data.results);
         self.movieList = film;
      });

    }
  },

});
Vue.config.devtools = true
