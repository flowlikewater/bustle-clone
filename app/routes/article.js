import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      mainstory:this.store.findRecord('article', params.article_id),
      article:this.store.findAll('article')
    };
  },
  actions: {
  update(mainstory,params){
    Object.keys(params).forEach(function(key){
      if(params[key]!==undefined){
        mainstory.set(key,params[key]);
        }
      });
      mainstory.then(function(article){
        article.save();
      });
      window.location.reload(true);
    }
  }
});
// promise resolution
