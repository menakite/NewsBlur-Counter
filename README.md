# NewsBlur Counter
NewsBlur is _a visual feed reader with intelligence_.  See samuelclay/NewsBlur.

NewsBlur Counter is a Safari extension (tested on OS X 10.8.3, Safari 6.0.3) to show how many unread NewsBlur stories you have in the toolbar.

By clicking on the toolbar icon, you can easily access the NewsBlur website.

It also makes the "O" keyboard shortcut _actually_ open the original story in a background tab.

## Configuration
No configuration is required to use this extension.

You can, however, change the following settings:

* the update interval: from 1 hour to 1 minute.  It's set to 5 minutes by default;
* what the counter should actually count: only stories you like, all stories, don't show stories you don't like.  Defaults to the latter;
* you can choose to access NewsBlur via newsblur.com or dev.newsblur.com when you click on the toolbar icon.  The former is the production version, while _dev_ is the development one: though it may have glitches, it generally works well, and has new features.  The former is used by default;
* use a secure HTTPS connection, enabled by default.

This extension uses HTML5 notifications through the Notification Center on Mountain Lion for the following events:

* when NewsBlur is unreachable for whatever reason, so that you know the counter is not up to date;
* if you're logged out.  This extension **doesn't ask you for passwords**, so you'll have to login on the NewsBlur website.
