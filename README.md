# NewsBlur Counter
> **tl;dr** [Download](https://menakite.eu/~anaconda/safari/NewsBlur-Counter/NewsBlur-Counter.safariextz) the extension, go to your _Downloads_ directory & double click on it.

>![How it looks like on your toolbar](https://raw.github.com/anaconda/NewsBlur-Counter/master/images/screenshots/toolbar.png "How it looks like on your toolbar")

NewsBlur is _a visual feed reader with intelligence_.  See [samuelclay/NewsBlur](https://github.com/samuelclay/NewsBlur).

NewsBlur Counter is a Safari extension (tested on OS X 10.8.3, Safari 6.0.3) to show how many unread NewsBlur stories you have in the toolbar.

It's known to be broken on Yosemite Public Beta 2. It can be easily fixed, but you'll have to wait until I'm sure it's not a bug in Safari on Public Beta 2.

By clicking on the toolbar icon, you can easily access the NewsBlur website.

It also makes the "o" keyboard shortcut _actually_ open the original story in a background tab.

## Installation
You can install from source, by cloning this repository and opening the Extension Builder in Safari.

If you don't even know what a repository is, just download the extension from https://menakite.eu/~anaconda/safari/NewsBlur-Counter/NewsBlur-Counter.safariextz, then open your _Downloads_ directory and double click on _NewsBlur-Counter.safariextz_.  Safari will ask you to confirm.

## Configuration
No configuration is required to use this extension.

You can, however, change the following settings:

* the update interval: from 1 hour to 1 minute.  It's set to 5 minutes by default;
* what the counter should actually count: only stories you like, all stories, don't show stories you don't like.  Defaults to the latter;
* you can choose to access NewsBlur via newsblur.com or dev.newsblur.com when you click on the toolbar icon.  The former is the production version, while _dev_ is the development one: though it may have glitches, it generally works well, and has new features.  The former is used by default;
* use a secure HTTPS connection, enabled by default.

![Settings page](https://raw.github.com/anaconda/NewsBlur-Counter/master/images/screenshots/settings.png "Settings page")

## Notifications
![Notification: you're logged out!](https://raw.github.com/anaconda/NewsBlur-Counter/master/images/screenshots/notification.png "Notification: you're logged out")

This extension uses the Web Notifications API to send notifications to the Notification Center on Mountain Lion for the following events:

* when NewsBlur is unreachable for whatever reason, so that you know the counter is not up to date;
* if you're logged out.  This extension **doesn't ask you for passwords**, so you'll have to login on the NewsBlur website.

Though it's only tested on Mountain Lion, it should work well on previous versions, you just won't get any notification.
