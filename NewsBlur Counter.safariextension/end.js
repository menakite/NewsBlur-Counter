/**
 * This code, slightly refactored, comes from https://raw.github.com/zakj/Google-Reader-Background-Tabs.safariextension/e3eb3caf5a8355150f36fdf420ae3f5e6cc35aa3/content.js
 *
 * Override 'O' keyboard shortcut so that it actually opens a new background tab.
 */
function keypressHandler(event) {
    if (window.location.href.indexOf('newsblur.com/') !== -1 && event.which === 'o'.charCodeAt(0) && !event.ctrlKey && !event.metaKey) {
        var tag = event.target.tagName;
        if (tag !== 'INPUT' && tag !== 'SELECT' && tag !== 'TEXTAREA') {
            var storyLink = document.querySelector('div.NB-selected > a.story_title');
            if (storyLink) {
                event.stopPropagation();
                safari.self.tab.dispatchMessage('openStoryInBackground', storyLink.getAttribute('href'));
            }
        }
    }
}

document.addEventListener('keypress', keypressHandler, true);
