/*
 * kangular-url
 * https://github.com/tsaikd/kangular-url
 * 
 * Version: 0.0.1 - 2014-01-09
 * License: LGPLv3
 */
angular.module("kangular-url", [])

// see https://gist.github.com/johan/3915545
.factory("resolveURL", function() {
	return function(url, base_url) {
		var doc = document,
			old_base = doc.getElementsByTagName("base")[0],
			old_href = old_base && old_base.href,
			doc_head = doc.head || doc.getElementsByTagName("head")[0],
			our_base = old_base || doc_head.appendChild(doc.createElement("base")),
			resolver = doc.createElement("a"),
			resolved_url;
		our_base.href = base_url;
		resolver.href = url;
		resolved_url  = resolver.href; // browser magic at work here

		if (old_base) {
			old_base.href = old_href;
		} else {
			doc_head.removeChild(our_base);
		}

		return resolved_url;
	};
});
