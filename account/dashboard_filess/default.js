(function(global){
	global.$_Tawk_AccountKey='5e7750a6eec7650c3321c956';
	global.$_Tawk_WidgetId='default';
	global.$_Tawk_Unstable=false;
	global.$_Tawk = global.$_Tawk || {};
	(function (w){
	function l() {
		if (window.$_Tawk.init !== undefined) {
			return;
		}

		window.$_Tawk.init = true;

		var files = [
			'https://embed.tawk.to/_s/v4/app/61483167bf6/js/twk-main.js',
			'https://embed.tawk.to/_s/v4/app/61483167bf6/js/twk-vendor.js',
			'https://embed.tawk.to/_s/v4/app/61483167bf6/js/twk-chunk-vendors.js',
			'https://embed.tawk.to/_s/v4/app/61483167bf6/js/twk-chunk-common.js',
			'https://embed.tawk.to/_s/v4/app/61483167bf6/js/twk-runtime.js',
			'https://embed.tawk.to/_s/v4/app/61483167bf6/js/twk-app.js'
		];

		if (typeof Promise === 'undefined') {
			files.unshift('https://embed.tawk.to/_s/v4/app/61483167bf6/js/twk-promise-polyfill.js');
		}

		if (typeof Symbol === 'undefined' || typeof Symbol.iterator === 'undefined') {
			files.unshift('https://embed.tawk.to/_s/v4/app/61483167bf6/js/twk-iterator-polyfill.js');
		}

		if (typeof Object.entries === 'undefined') {
			files.unshift('https://embed.tawk.to/_s/v4/app/61483167bf6/js/twk-entries-polyfill.js');
		}

		var s0=document.getElementsByTagName('script')[0];

		for (var i = 0; i < files.length; i++) {
			var s1 = document.createElement('script');
			s1.src= files[i];
			s1.charset='UTF-8';
			s1.setAttribute('crossorigin','*');
			s0.parentNode.insertBefore(s1,s0);
		}
	}
	if (document.readyState === 'complete') {
		l();
	} else if (w.attachEvent) {
		w.attachEvent('onload', l);
	} else {
		w.addEventListener('load', l, false);
	}
})(window);

})(window);