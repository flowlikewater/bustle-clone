import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      mainstory:this.store.findRecord('article', params.article_id),
      article:this.store.findAll('article'),
      reviews: this.store.findAll('review')
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
  },
  saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var article = params.article;
      debugger;
      article.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return article.save();
      });
      window.location.reload(true);
    }
  },
});
// promise resolution
