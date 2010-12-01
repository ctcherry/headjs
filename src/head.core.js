/**
	Head JS: The only script in your <HEAD>.
	
	copyright: "tipiirai" / Tero Piirainen
	license: MIT
*/
(function(doc) {
	
	var html = doc.documentElement,
	 	conf = {
			head: "head"
		};
		
	if (typeof window.head_conf == 'object') {
		for (var key in head_conf) {
			conf[key] = head_conf[key];
		}
	} 
	
	window.head_conf = conf;

	function each(arr, fn) {	
		for (var i = 0; i < arr.length; i++)
			fn.call(arr, arr[i], i);
	}
	
	// API	 
	var api = window[conf.head] = function() {
		api.ready.apply(null, arguments);
	};
	
	// browser type & version
	var ua = navigator.userAgent.toLowerCase();
	
	ua = /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		/(opera)(?:.*version)?[ \/]([\w.]+)/.exec( ua ) ||
		/(msie) ([\w.]+)/.exec( ua ) ||
		!/compatible/.test( ua ) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec( ua ) || [];
		
	if (ua[1] == 'msie') ua[1] == 'ie';
	
	head.browser = { version: parseFloat(ua[2]) };
	head.browser[ua[1]] = true;	
	
})(document);


