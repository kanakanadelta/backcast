var VideoListEntryView = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  render: function() {
    console.log('VidListEntry this ', this.$el.html(this.template(this.model.attributes)));
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

