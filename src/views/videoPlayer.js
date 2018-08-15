var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  videos: new Videos(exampleVideoData),

  render: function() {
    console.log(this.videos)
    // this.$el.html('<div><h3>Loading Video Data...</h3></div>')
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
