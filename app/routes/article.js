import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      mainstory:this.store.findRecord('article', params.article_id),
      article:this.store.findAll('article')
    }
  },
});
