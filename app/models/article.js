import DS from 'ember-data';

export default DS.Model.extend({
  writer: DS.attr(),
  title: DS.attr(),
  date: DS.attr(),
  imagetop: DS.attr(),
  body: DS.attr(),
  imagebottom: DS.attr(),
  source: DS.attr(),
  review: DS.hasMany('review', {async: true})
});
