import Ember from 'ember';

export default Ember.Component.extend({
  newArticle: false,
  actions: {
    addNewArticle(){
      this.set('newArticle', true);
    },
    saveArticle() {
      var params = {
        writer: this.get('writer'),
        title: this.get('title'),
        date: this.get('date'),
        imagetop: this.get('imagetop'),
        body: this.get('body'),
        imagebottom: this.get('imagebottom'),
        source: this.get('source')
      };
      this.set('newArticle', false);
      this.sendAction('saveArticle', params);
    },
    cancelArticle() {
      this.set('newArticle',false);
    }
  }
});
