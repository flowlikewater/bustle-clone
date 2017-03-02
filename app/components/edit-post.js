import Ember from 'ember';

export default Ember.Component.extend({
  updateButtonIsClicked: false,
  actions: {
    updateArticle() {
      this.set('updateButtonIsClicked', true);
    },
    update() {
      var params = {
        writer: this.get('writer'),
        title: this.get('title'),
        type: this.get('date'),
        imagetop: this.get('imagetop'),
        body: this.get('body'),
        imagebottom: this.get('imagebottom'),
        source: this.get('source')
      };
      this.set('updateButtonIsClicked', false);
      this.sendAction('update', this.get('article'),params);
    }
  }
});
