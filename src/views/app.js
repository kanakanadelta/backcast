var AppView = Backbone.View.extend({

  //this DOM node that AppView will be referring to and replacing.
  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    //take the template, invokes it, and replaces the DOM node with that snippet
    this.render()
  },


  render: function() {
    this.$el.html(this.template());

    //make a new instance of VideoListView, searches DOM and replaces it with its VideoListView's el as a 2nd parameter
    new VideoListView({ 
      collection: this.videos, 
      el: this.$('.list')
    }).render();
    new SearchView({model: this, 
      el: '.search'
    });
    new VideoPlayerView({model: this, el: '.player'});
    return this;
  },

  template: templateURL('src/templates/app.html'),

});

