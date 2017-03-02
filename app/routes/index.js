import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      // articles: this.store.findAll('article'),
      topthrees: this.store.findAll('topthree'),
      articles: this.store.findAll('article'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    saveArticle(params) {
      var publishArticle = this.store.createRecord('article', params);
      publishArticle.save();
      this.transitionTo('index');
      }
  }
});
