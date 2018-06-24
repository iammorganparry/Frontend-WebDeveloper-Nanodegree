/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        function hasUrl(element) {
            it('has URL',function(){
                expect(element.url).toBeDefined();
                expect(element.url).not.toBe(' ');
            })
        }
        for (let url in allFeeds) {
            hasUrl(allFeeds[url]);
         }

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        function hasName(element) {
            it('has Name',function(){
                expect(element.name).toBeDefined();
                expect(element.name).not.toBe(' ');
            })
        }
        for (let name in allFeeds) {
            hasName(allFeeds[name]);
         }

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu',function(){
        var body;
        var btn;
        var spyEvent;
        beforeEach(function(){
            body = document.querySelector('body');
            btn  = document.querySelector('.menu-icon-link');
           
        });

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('should be hidden as default',function(){
            expect(body.getAttribute('class')).toEqual('menu-hidden');
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('should show on click',function(){
             btn.click();
            expect(body.getAttribute('class')).not.toEqual('menu-hidden');
         });

         it('should hide on next click',function(){
            btn.click();
            expect(body.getAttribute('class')).toEqual('menu-hidden');
         });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries',function() {
        var entries;
        beforeEach(function(done){
            entries = document.querySelectorAll('.entry');
            loadFeed(0,done);
            // done();
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('should contain atleast a single entry when loadFeed finishes', function(done){
            expect(entries.length).not.toBeLessThan(0);
            done();
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection',function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var entries;
        var content;

        beforeEach(function(done){
            entries = document.querySelector('.entry').innerText;
            loadFeed(0);
            content = entries;
            done();
        });
        
            it('should change entries when loadFeed is called',function(done) {
                // entries.detectChanges();
                entries = document.querySelector('.entry').innerText;
                expect(content).not.toEqual(entries.innerText);
                done();
            });
    
    });
}());