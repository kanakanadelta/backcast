var AppView = Backbone.View.extend({

  //this DOM node that AppView will be referring to and replacing.
  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    //take the template, invokes it, and replaces the DOM node with that snippet
    this.render(); 
  },


  render: function() {
    this.$el.html(this.template());

    //make a new instance of VideoListView, searches DOM and replaces it with its VideoListView's el as a 2nd parameter
    new VideoListView({ 
      //the 'this' keyword is referring to the AppView since we are in the AppView-- the new instance of it.
      //this.$('.list') --> a jquery search of the DOM scoped to only the DOM node under the App component
      //without the 'this.$()', it will search the entire DOM.
      el: this.$('.list'),
      collection: this.videos, 
    }).render();

    new SearchView({model: this, 
      el: '.search'
    });

    new VideoPlayerView({
      el: this.$('.player')
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html'),

});

