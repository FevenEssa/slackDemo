sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'slackdemo/test/integration/FirstJourney',
		'slackdemo/test/integration/pages/BooksList',
		'slackdemo/test/integration/pages/BooksObjectPage',
		'slackdemo/test/integration/pages/Books_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage, Books_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('slackdemo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage,
					onTheBooks_textsObjectPage: Books_textsObjectPage
                }
            },
            opaJourney.run
        );
    }
);