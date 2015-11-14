module.exports = {
  'Add new Element' : function (browser) {
    
    browser
      .url('http://localhost/nightwatchjs')
      .waitForElementVisible('ul', 1000)
      .elements('css selector','#todoList li', function (result) {
          browser.assert.equal(result.value.length, 5);
      })
      .setValue('input[type=text]', 'nightwatch')      
      .click('button[name=newTodo]')
      .elements('css selector','#todoList li', function (result) {
          browser.assert.equal(result.value.length, 6);
      })
  },
  'Check if input was well cleaned' : function (browser) {
    
    browser
      .url('http://localhost/nightwatchjs')
      .waitForElementVisible('ul', 1000) 
      .getAttribute("#newTodoText", "value", function(result) {             
          this.assert.equal(result.value, "");
      })
      .setValue('input[type=text]', 'nightwatch') 
      .getAttribute("#newTodoText", "value", function(result) {          
          this.assert.equal(result.value, "nightwatch");
        })       
      .click('button[name=newTodo]')
        .getAttribute("#newTodoText", "value", function(result) {          
          this.assert.equal(result.value, "");
        }) 
      .end(); 
  }
};
