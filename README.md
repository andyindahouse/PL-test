## Overview

PL test builded with [Web Starter Kit](https://developers.google.com/web/tools/starter-kit/) and [Angular 1.6](https://angularjs.org/)

## Quickstart

Run $ npm install --global gulp && npm install && bower install in that directory to get started.


## Watch For Changes & Automatically Refresh Across Devices

```sh
$ gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices
connected to your network.
`serve` does not use [service worker](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)
caching, so your site will stop being available when the web server stops running.

## Serve the Fully Built & Optimized Site

```sh
$ gulp serve:dist
```

This outputs an IP address you can use to locally test and another that can be used on devices
connected to your network.
`serve:dist` includes will serve a local copy of the built and optimized site generated as part
of the `default` task.
Because the optimized site includes a service worker which serves your site directly from the
cache, you will need to reload the page after regenerating the site to pick up the latest changes.
`serve:dist` uses a different HTTP port than `serve`, which means that the service workers are
kept isolated in different [scopes](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Registering_your_worker).

## Build & Optimize

```sh
$ gulp
```

Build and optimize the current project, ready for deployment.
This includes linting as well as image, script, stylesheet and HTML optimization and minification.
Also, a [service worker](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)
script will be automatically generated, which will take care of precaching your sites' resources.
On browsers that [support](https://jakearchibald.github.io/isserviceworkerready/) service
workers, the site will be loaded directly from the service worker cache, bypassing the server.
This means that this version of the site will work when the server isn't running or when there is
no network connectivity.

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

* Chrome (Recommendable)
* Edge (Don't support property content(url) and won't show icons)
* Firefox (Don't support property content(url) and won't show icons)

This is not to say that Web Starter Kit cannot be used in browsers older than those reflected, but merely that our focus will be on ensuring our layouts work great in the above.

## Docs and Recipes

* [File Appendix](https://github.com/andyindahouse/PL-test/blob/master/docs/file-appendix.md) - What do the different files here do?
* [File Appendix 2](https://github.com/andyindahouse/PL-test/blob/master/docs/file-appendix-2.md) And how does app work?

## License

Apache 2.0  
Copyright 2015 Google Inc
