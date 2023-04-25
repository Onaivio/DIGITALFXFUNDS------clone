

/*------------------------------------------------------------------------------------
    
JS INDEX
=============

01 - Main Slider JS
02 - Youtube Popup JS
03 - Testimonial JS
04 - Counter JS
05 - Investor Slider JS
06 - Responsive Menu JS
07 - Preloader JS
08 - Btn To Top JS
09 - Widget Data
10 - Calculator Select Input
11 - Replace Old Select
12 - Bitcoin Calculator



-------------------------------------------------------------------------------------*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		/* 
		=================================================================
		01 - Main Slider JS
		=================================================================	
		*/

		$(".cryptobase-slide").owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items: 1,
			nav: true,
			dots: false,
			autoplay: true,
			loop: true,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
			mouseDrag: true,
			touchDrag: true
		});

		$(".cryptobase-slide").on("translate.owl.carousel", function () {
			$(".cryptobase-main-slide h2, .cryptobase-main-slide p").removeClass("animated fadeInUp").css("opacity", "0");
			$(".cryptobase-main-slide .cryptobase-btn").removeClass("animated fadeInDown").css("opacity", "0");
		});
		$(".cryptobase-slide").on("translated.owl.carousel", function () {
			$(".cryptobase-main-slide h2, .cryptobase-main-slide p").addClass("animated fadeInUp").css("opacity", "1");
			$(".cryptobase-main-slide .cryptobase-btn").addClass("animated fadeInDown").css("opacity", "1");
		});


		/* 
		=================================================================
		02 - Youtube Popup JS
		=================================================================	
		*/

		$('.popup-youtube').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});


		/* 
		=================================================================
		03 - Testimonial JS
		=================================================================	
		*/

		$(".testimonial-slide").owlCarousel({
			autoplay: true,
			loop: true,
			margin: 30,
			touchDrag: true,
			mouseDrag: true,
			items: 1,
			nav: false,
			dots: true,
			autoplayTimeout: 6000,
			autoplaySpeed: 1200,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				},
				1200: {
					items: 3
				}
			}
		});


		/* 
		=================================================================
		04 - Counter JS
		=================================================================	
		*/


		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});


		/* 
		=================================================================
		05 - Investor Slider JS
		=================================================================	
		*/
		$(".investor-slide").owlCarousel({
			autoplay: true,
			loop: true,
			margin: 20,
			touchDrag: true,
			mouseDrag: true,
			nav: true,
			dots: false,
			autoplayTimeout: 6000,
			autoplaySpeed: 1200,
			autoplayHoverPause: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});


		/* 
		=================================================================
		06 - Responsive Menu JS
		=================================================================	
		*/
		$("ul.main_menu").slicknav({
			prependTo: ".cryptobase-responsive-menu"
		});


		/* 
		=================================================================
		07 - Preloader JS
		=================================================================	
		*/

		$('body').jpreLoader({
			preMainSection: '#main-preloader',
			prePerText: '.preloader-percentage-text',
			preBar: '.preloader-bar',
			debugMode: true
		});

		/* 
		=================================================================
		08 - Btn To Top JS
		=================================================================	
		*/

		if ($("body").length) {
			var btnUp = $('<div/>', {
				'class': 'btntoTop'
			});
			btnUp.appendTo('body');
			$(document).on('click', '.btntoTop', function () {
				$('html, body').animate({
					scrollTop: 0
				}, 700);
			});
			$(window).on('scroll', function () {
				if ($(this).scrollTop() > 200) $('.btntoTop').addClass('active');
				else $('.btntoTop').removeClass('active');
			});
		}

		/* 
		=================================================================
		09 - Widget Data
		=================================================================	
		*/

		(function (b, i, t, C, O, I, N) {
			window.addEventListener("load", function () {
				if (b.getElementById(C)) return;
				I = b.createElement(i), N = b.getElementsByTagName(i)[0];
				I.src = t;
				I.id = C;
				N.parentNode.insertBefore(I, N);
			}, false)
		})(document, "script", "https://widgets.bitcoin.com/widget.js", "btcwdgt");

		/* 
		=================================================================
		10 - Calculator Select Input
		=================================================================	
		*/

		var userAgent = navigator.userAgent.toLowerCase(),
			plugins = {
				selectFilter: $("#currency-select"),
				btcCalculator: $("#bitcoin-calculator"),
			};

		/* 
		=================================================================
		11 - Replace Old Select
		=================================================================	
		*/

		if (plugins.selectFilter.length) {
			for (var i = 0; i < plugins.selectFilter.length; i++) {
				var select = $(plugins.selectFilter[i]);
				select.select2({
					placeholder: select.attr("data-placeholder") ? select.attr("data-placeholder") : false,
					minimumResultsForSearch: select.attr("data-minimum-results-search") ? select.attr("data-minimum-results-search") : 10,
					maximumSelectionSize: 3,
					dropdownCssClass: select.attr("data-dropdown-class") ? select.attr("data-dropdown-class") : ""
				});
			}
		}

		/* 
		=================================================================
		12 - Bitcoin Calculator
		=================================================================	
		*/

		if (plugins.btcCalculator.length) {

			$.getJSON("https://blockchain.info/ticker", function (btcJsonData) {
					var currencyList = [];
					var index = 0;

					for (var currency in btcJsonData) {
						currencyList.push({
							"id": index,
							"text": currency
						});
						index++;
					}

					for (var i = 0; i < plugins.btcCalculator.length; i++) {
						var btcForm = $(plugins.btcCalculator[i]),
							btcFormInput = $(btcForm.find('[name="btc-calculator-value"]')),
							btcFormOutput = $(btcForm.find('[name="btc-calculator-result"]')),
							btcFormCurrencySelect = $(btcForm.find('[name="btc-calculator-currency"]'));

						btcFormCurrencySelect.select2({
							placeholder: btcFormCurrencySelect.attr("data-placeholder") ? btcFormCurrencySelect.attr("data-placeholder") : false,
							minimumResultsForSearch: btcFormCurrencySelect.attr("data-minimum-results-search") ? btcFormCurrencySelect.attr("data-minimum-results-search") : 50,
							maximumSelectionSize: 3,
							dropdownCssClass: btcFormCurrencySelect.attr("data-dropdown-class") ? btcFormCurrencySelect.attr("data-dropdown-class") : '',
							data: currencyList
						});

						if (btcFormInput.length && btcFormOutput.length) {
							// BTC => Currency
							(function (btcFormInput, btcFormOutput, btcFormCurrencySelect) {
								var lastChanged = 'btc';

								btcFormInput.on('input', function () {
									// store current positions in variables
									var selectionStart = this.selectionStart,
										selectionEnd = this.selectionEnd;

									this.value = toCryptoCurrencyFormat(this.value);

									// restore cursor position
									this.setSelectionRange(selectionStart, selectionEnd);

									btcFormOutput.val(toCurrencyFormat('' + btcJsonData[btcFormCurrencySelect.select2('data')[0].text]["buy"] * this.value));
									lastChanged = 'btc';
								});

								// Currency => BTC
								btcFormOutput.on('input', function () {
									// store current positions in variables
									var selectionStart = this.selectionStart,
										selectionEnd = this.selectionEnd;

									this.value = toCurrencyFormat(this.value);

									// restore cursor position
									this.setSelectionRange(selectionStart, selectionEnd);

									btcFormInput.val(toCryptoCurrencyFormat('' + this.value / btcJsonData[btcFormCurrencySelect.select2('data')[0].text]["sell"]));
									lastChanged = 'currency';
								});

								btcFormInput.trigger('input');
								btcFormOutput.blur();

								btcFormCurrencySelect.on('change', function () {
									if (lastChanged === 'btc') {
										btcFormOutput.val(toCurrencyFormat('' + btcJsonData[btcFormCurrencySelect.select2('data')[0].text]["buy"] * btcFormInput.val()));
									} else {
										btcFormInput.val(toCryptoCurrencyFormat('' + btcFormOutput.val() / btcJsonData[btcFormCurrencySelect.select2('data')[0].text]["sell"]));
									}
								});
							})(btcFormInput, btcFormOutput, btcFormCurrencySelect);
						}
					}
				})
				.fail(function () {
					console.log('Error while fetching data from https://blockchain.info/ticker');
				});
		}

		function toCurrencyFormat(stringValue) {
			var value = parseFloat(stringValue.replace(/[^\d.]/g, '')).toFixed(2);
			return $.isNumeric(value) ? value : 0;
		}

		function toCryptoCurrencyFormat(stringValue) {
			var value = stringValue.replace(/[^\d.]/g, '');
			return $.isNumeric(value) ? value : 0;
		}


	});
}(jQuery));

