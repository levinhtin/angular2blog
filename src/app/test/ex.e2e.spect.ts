describe('Calculator Page', () => {

    beforeEach(() => {
        browser.get('/');
    });
    it('should correctly home page title', () => {
      // browser.sleep(5000);
      expect(browser.getTitle()).toEqual('Angular 2 QuickStart');
    });
});
