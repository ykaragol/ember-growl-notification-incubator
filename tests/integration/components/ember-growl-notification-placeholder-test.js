import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-growl-notifaction-placeholder', 'Integration | Component | ember growl notifaction placeholder', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-growl-notifaction-placeholder}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-growl-notifaction-placeholder}}
      template block text
    {{/ember-growl-notifaction-placeholder}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
