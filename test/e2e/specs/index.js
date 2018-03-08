module.exports = {
    'Demo test' : function (browser) {
        browser
        .url('http://localhost:8081')
        .waitForElementVisible('body', 1000)
        .assert.containsText('.one', 'Hello Front!')
        .end()
    }
};
