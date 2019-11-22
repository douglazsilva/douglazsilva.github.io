$(document).ready(function () {

	// MOBILE CHECK

	var mobile = false;
	var mobdelay = 0;
	var dif = 100;

	function isMobile() {
		try { document.createEvent("TouchEvent"); mobile = true; }
		catch (e) { mobile = false }
	};
	isMobile();

	if (mobile == true) {
		mobdelay = .5;
		dif = 50;
	}
	//alert(mobile)

	// INTRO

	var introsplitter = new SplitText("#intro", { type: "words", position: "relative" });


	function textIn(target, del) {

		TweenMax.staggerFromTo(target, .5, { alpha: 0, y: 20 }, { alpha: 1, y: 0, ease: Sine.easeOut, delay: del }, 0.05);


	}

	TweenMax.staggerFromTo(introsplitter.words, .5, { alpha: 0, y: 20 }, { alpha: 1, y: 0, ease: Sine.easeOut, delay: 0 }, 0.05);

	var introline = $("#div1");
	var intrologo = $("#logo");
	var introitem0 = $("#intro");
	var introitem1 = $("#item0");
	var introitem3 = $("#item1");

	TweenMax.set($("#wrapper"), { alpha: 1, delay: 0.2 });
	TweenMax.staggerFromTo([intrologo, introitem1, introline, introitem3], .5, { alpha: 0, y: '+=24' }, { alpha: 1, y: '-=24', ease: Sine.easeOut, delay: 0.2 }, 0.2);


	//TweenMax.fromTo(introline, .5, {scaleX:0, y:'+=24'}, {y:'-=24', scaleX:1, ease:Sine.easeOut, delay:.4});



	// LOGO
	var domElement = document.getElementById("spritesheet");
	TweenMax.spriteSheet(domElement, {
		width: 2016,
		offsetX: 0,
		offsetY: 0,
		stepX: 72,
		stepY: 72,
		count: 840
	}, 35, { delay: .75, repeat: -1 });

	// SCROLL

	var item2 = $("#item2");
	var item3 = $("#item3");
	var item4 = $("#item4");
	var item5 = $("#item5");
	// var item6 = $("#item6");
	var item7 = $("#item7");
	var item8 = $("#item8");
	var item9 = $("#item9");
	var item10 = $("#item10");

	$("#item2").data('moved', false);
	$("#item3").data('moved', false);
	$("#item4").data('moved', false);
	$("#item5").data('moved', false);
	// item6.data('moved', false);
	$("#item7").data('moved', false);
	$("#item8").data('moved', false);
	$("#item9").data('moved', false);
	$("#item10").data('moved', false);

	$("#p1").data('movedpar', false);
	$("#p2").data('movedpar', false);
	$("#p3").data('movedpar', false);
	$("#p4").data('movedpar', false);
	$("#p5").data('movedpar', false);
	$("#p7").data('movedpar', false);
	$("#p8").data('movedpar', false);
	$("#p9").data('movedpar', false);
	$("#p10").data('movedpar', false);


	// TweenMax.set( [vid1, vid2, vid3, vid4, im1, im2, par1, par2, par3, par4], {ease:Sine.easeOut, delay:0});

	function picIn(target, vid) {

		if ($(window).scrollTop() >= target.offset().top - $(window).height() * .5 && target.data('moved') == false) {

			try {

				if (vid == 'undefined') {

					TweenMax.fromTo(target, 1, { y: '+=' + dif }, { y: '-=' + dif, alpha: 1, ease: Sine.easeOut });

				} else {

					TweenMax.set(target, { alpha: 1 });
					TweenMax.fromTo(target, 1, { y: '+=' + dif }, { y: '-=' + dif, alpha: 1, ease: Sine.easeOut });

				}


				vid.get(0).play()
				//alert( target.data )






			}

			catch (err) {

			}

			target.data('moved', true);

		}

	}

	function parIn(target, myfunction, del) {


		if ($(window).scrollTop() >= target.offset().top - $(window).height() * 1 && target.data('movedpar') == false) {

			try {

				var psplitter = new SplitText(target, { type: "words", position: "relative" });
				TweenMax.staggerFromTo(psplitter.words, .5, { alpha: 0, y: 20 }, { alpha: 1, y: 0, ease: Sine.easeOut, delay: .1 + mobdelay }, 0.07);
				target.data('movedpar', true);

				var replaceDelay = (psplitter.words.length * 0.05) + .8 + mobdelay;
				TweenMax.delayedCall(replaceDelay, myfunction, [])



			}

			catch (err) {

			}

		}

	}


	function scrollHandler() {

		// picIn( item1, $("#vid1") , $("#p1") );
		picIn(item2, 'undefined');
		picIn(item3, 'undefined');
		picIn(item4, $("#vid2"));
		picIn(item5, $("#vid3"));
		// picIn( item6, $("#vid4") );
		picIn(item7, 'undefined');
		picIn(item8, $("#vid5"));
		picIn(item9, 'undefined');
		picIn(item10, 'undefined');

		parIn($("#p1"), undefined, 0);
		parIn($("#p2"), replaceGumroad, 1.5);
		parIn($("#p3"), replaceBehance1, 1.5);
		parIn($("#p4"), undefined, 0);
		parIn($("#p5"), undefined, 0);
		parIn($("#p7"), undefined, 0);
		parIn($("#p8"), replaceBehance2, 1.5);
		parIn($("#p9"), replaceCM, 1.5);
		parIn($("#p10"), replaceCM2, 1.5);


	}


	$(window).scroll(function () {

		scrollHandler();

	});

	// REPLACES
	function replaceLine() {
		var rule = CSSRulePlugin.getRule("a:before");
		alert(rule)
		TweenLite.to(rule, 3, { cssRule: { backgroundColor: "#FF0000" } });

	}

	function replaceText(target, word, codestring) {

		target.html(target.html().replace(word, codestring));
		//replaceLine();

	}

	function replaceCM() {

		replaceText($("#p9"), 'Creative&nbsp;Market', '<a href="https://creativemarket.com/nicolas.desl%C3%A9/525973-Pantra-Type-Family" target="_blank">Creative&nbsp;Market</a>')

	}

	function replaceCM2() {

		replaceText($("#p10"), 'Creative&nbsp;Market', '<a href="https://creativemarket.com/nicolas.desl%C3%A9/543038-Strima-Type-Family" target="_blank">Creative&nbsp;Market</a>')

	}

	function replaceBehance1() {

		replaceText($("#p3"), 'Behance', '<a href="https://www.behance.net/gallery/46748765/Kursiv" target="_blank">Behance</a>')

	}

	function replaceBehance2() {

		replaceText($("#p8"), 'Behance', '<a href="https://www.behance.net/gallery/47715815/Lumo" target="_blank">Behance</a>')

	}

	function replaceGumroad() {

		replaceText($("#p2"), 'Gumroad', '<a href="https://gumroad.com/l/brasley" target="_blank">Gumroad</a>')

	}




	scrollHandler();


});
