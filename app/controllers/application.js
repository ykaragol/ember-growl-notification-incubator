import Ember from 'ember';

export default Ember.Controller.extend({
  service : Ember.inject.service('ember-growl-service'),
  init(){
    let service = this.get('service');
    setTimeout(()=>{service.showNotification('hello0');},1);
    setTimeout(()=>{service.showNotification('hello1 hello1 hello1 hello1 hello1 hello1 hello1 hello1 hello1 hello1 hello1 hello1 hello1 hello1');},1000);
    setTimeout(()=>{service.showNotification('hello2');},2000);
    setTimeout(()=>{service.showNotification('hello3');},3000);
    setTimeout(()=>{service.showNotification('hello4');},4000);
    setTimeout(()=>{service.showNotification('hello5');},5000);
    setTimeout(()=>{service.showNotification('hello6');},6000);
    setTimeout(()=>{service.showNotification('hello7');},7000);
    setTimeout(()=>{service.showNotification('hello8');},8000);
    setTimeout(()=>{service.showNotification('hello9');},9000);
    setTimeout(()=>{service.showNotification('hello10');},10000);
  }
});
