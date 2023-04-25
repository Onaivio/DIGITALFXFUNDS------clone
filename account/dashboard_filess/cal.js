function calculator() { 
	var plan = $("#percent").val();
	var deposit = $("#deposit").val();
	var percent = [[126], [225], [155], [246], [150], [350]];
	var minMoney = [10, 1000, 20, 1000, 50, 1000];
	var maxMoney = [999, 10000, 999, 25000, 999, 50000];
	var totalPercent;
	if (plan == "plan_1") {
		if (deposit < minMoney[0]) {
			$("#deposit").val(minMoney[0]);
			deposit = minMoney[0];
		}
		if (deposit > maxMoney[0]) {
			$("#deposit").val(maxMoney[0]);
			deposit = maxMoney[0];
		}
		totalPercent = percent[0][0];
		$("#roi").html((percent[0][0]).toFixed(2));
		$("#profit").html(((totalPercent / 100) * deposit).toFixed(2));
	};
	if (plan == "plan_2") {
		if (deposit < minMoney[1]) {
			$("#deposit").val(minMoney[1]);
			deposit = minMoney[1];
		}
		if (deposit > maxMoney[1]) {
			$("#deposit").val(maxMoney[1]);
			deposit = maxMoney[1];
		}
		totalPercent = percent[1][0];
		$("#roi").html((percent[1][0]).toFixed(2));
		$("#profit").html(((totalPercent / 100) * deposit).toFixed(2));
	};
	if (plan == "plan_3") {
		if (deposit < minMoney[2]) {
			$("#deposit").val(minMoney[2]);
			deposit = minMoney[2];
		}
		if (deposit > maxMoney[2]) {
			$("#deposit").val(maxMoney[2]);
			deposit = maxMoney[2];
		}
		totalPercent = percent[2][0];
		$("#roi").html((percent[2][0]).toFixed(2));
		$("#profit").html(((totalPercent / 100) * deposit).toFixed(2));
	};
	if (plan == "plan_4") {
		if (deposit < minMoney[3]) {
			$("#deposit").val(minMoney[3]);
			deposit = minMoney[3];
		}
		if (deposit > maxMoney[3]) {
			$("#deposit").val(maxMoney[3]);
			deposit = maxMoney[3];
		}
		totalPercent = percent[3][0];
		$("#roi").html((percent[3][0]).toFixed(2));
		$("#profit").html(((totalPercent / 100) * deposit).toFixed(2));
	};
         if (plan == "plan_5") {
		if (deposit < minMoney[4]) {
			$("#deposit").val(minMoney[4]);
			deposit = minMoney[4];
		}
		if (deposit > maxMoney[4]) {
			$("#deposit").val(maxMoney[4]);
			deposit = maxMoney[4];
		}
		totalPercent = percent[4][0];
		$("#roi").html((percent[4][0]).toFixed(2));
		$("#profit").html(((totalPercent / 100) * deposit).toFixed(2));
	};
        if (plan == "plan_6") {
		if (deposit < minMoney[5]) {
			$("#deposit").val(minMoney[5]);
			deposit = minMoney[5];
		}
		if (deposit > maxMoney[5]) {
			$("#deposit").val(maxMoney[5]);
			deposit = maxMoney[5];
		}
		totalPercent = percent[5][0];
		$("#roi").html((percent[5][0]).toFixed(2));
		$("#profit").html(((totalPercent / 100) * deposit).toFixed(2));
	};
}

(function($) {
	$(document).ready(function() {
		calculator();
		$("#percent").change(function(){
			var plan = $("#percent").val();
			var minMoney = [10, 1000, 20, 1000, 50, 1000];
			if (plan == "plan_1") { $("#deposit").val(minMoney[0]); };
			if (plan == "plan_2") { $("#deposit").val(minMoney[1]); };
			if (plan == "plan_3") { $("#deposit").val(minMoney[2]); };
			if (plan == "plan_4") { $("#deposit").val(minMoney[3]); };
                        if (plan == "plan_5") { $("#deposit").val(minMoney[4]); };
                        if (plan == "plan_6") { $("#deposit").val(minMoney[5]); };
			calculator();
		});
	});
} )( jQuery );