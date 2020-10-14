# How a request gets served?
There are a handful of general steps that occur between the time we request a web page and the time it displays in our browser.

- DNS Lookup
- Browser sends an HTTP request
- Server responds and sends back the requested HTML file
- Browser begins to render HTML
- Browser sends additional requests for objects embedded in the    html file (CSS files, images, javascript, etc.)

**DNS Lookup**
>First the cache stored in our browser is checked, then the cache stored by our operating system, and so on. If none of these cached files have the information needed, a recursive search of root DNS servers takes place.A DNS lookup of one of the root servers doesn’t exactly take a long time, but it is quicker to check a local cache, so one thing we can do to improve performance is to suggest the mapping stays in local caches longer.

**Browser Sends Request**
>After a browser has performed the DNS lookup, it sends an HTTP request to the appropriate server. It doesn’t have to literally be HTTP. It can be HTTPS or more recently an HTTP/2 request. The general idea though it that our browser sends a request for a specific file, often an HTML file.

**Server Responds**
>Once the server receives a request, it will respond, though how will depend on a number of things. For example, the page requested may no longer exist on the server and the server will send back a 404 (file not found) error. It’s also possible the file has been moved to a new location and requests are being redirected temporarily (302) or permanently (301). If this is the case our browser needs to make another request for the file at the new location.Lots of other things can happen and the server sends different status codes based on those things. Ideally it sends a 200 OK, which means success, but again it might send a 404 or 301 or 500 (internal server error).

**Browser Renders Page**
>Once our browser receives an HTML file, it needs to render the page and it has to go through a few steps before we see it displayed. These steps are called the critical rendering path in which our browser needs to:

- Process HTML markup and build the DOM tree.
- Process CSS markup and build the CSSOM tree.
- Combine the DOM and CSSOM into a render tree.
- Run the layout on the render tree to compute the geometry of each node.
- Paint the individual nodes to the screen.

