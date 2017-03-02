import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    refreshPage: function(){
      window.location.reload(true);
    }
  }
});
