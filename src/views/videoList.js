var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    //detaches the event listeners and empties it out so they don't build up
    this.$el.children().detach();
    //need to make a new instance of a videoListEntry as a DOM element and append it to our list view. 
    this.$el.html(this.template());

    //collection is an object in Backbone that has all the underscore methods in it
    this.collection.each(this.renderVideo, this);

    //returning a view, which is why we need the .el 
    return this;
  },

  renderVideo: function(video) {
    this.$('.video-list').append(
      // new instances made of VideoListEntrieViews to populate the video list
      new VideoListEntryView({
        model: video,
      }).render().el
    );
  },

  template: templateURL('src/templates/videoList.html')

});

