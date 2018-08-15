var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(query) {
    //start of fetch AJAX function
    $.ajax({
      data: {

      },
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3',
      key: 'AIzaSyD9C9SGrMwPAWXdgKz2dAePBTj1V4m8hp4',
    })
    //end of AJAX function
  },

  parse: function(response) {

  },

});

console.log('example vid arr.',exampleVideoData);
