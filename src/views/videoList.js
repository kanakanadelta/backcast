var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    console.log('this.$el.child pre detach', this.$el.children());
    this.$el.children().detach();
    console.log('this.$el.child: ', this.$el.children())

    //need to make a new instance of a videoListEntry as a DOM element and append it to our list view. 
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

var videoData
