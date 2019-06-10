$(document).ready(function(){
	$('#fir').click(function(){
		var q1 = parseInt($("input[name = 'q1']:checked").val());
		var q2 = parseInt($("input[name = 'q2']:checked").val());
		var q3 = parseInt($("input[name = 'q3']:checked").val());
		var q4 = parseInt($("input[name = 'q4']:checked").val());
		var q5 = parseInt($("input[name = 'q5']:checked").val());
		var q6 = parseInt($("input[name = 'q6']:checked").val());
		var q7 = parseInt($("input[name = 'q7']:checked").val());
		var q8 = parseInt($("input[name = 'q8']:checked").val());
		var q9 = parseInt($("input[name = 'q9']:checked").val());
		var q10 = parseInt($("input[name = 'q10']:checked").val());

		// var tot = q1+q2+q3+q4+q5+q6+q7+q8+q9+q10;
		var tot = q1 +q2 +q3 +q4+q5 +q6 +q7+q8+q9 +q10;
		alert('Section 1 score is '+tot);
		// var the_value;
		// the_value = getCheckItems();
		// alert(the_value);
	});

	$('#sec').click(function(){
		var b1 = parseInt($("input[name = 'b1']:checked").val());
		var b2 = parseInt($("input[name = 'b2']:checked").val());
		var b3 = parseInt($("input[name = 'b3']:checked").val());
		var b4 = parseInt($("input[name = 'b4']:checked").val());
		var b5 = parseInt($("input[name = 'b5']:checked").val());
		var b6 = parseInt($("input[name = 'b6']:checked").val());
		var b7 = parseInt($("input[name = 'b7']:checked").val());
		var b8 = parseInt($("input[name = 'b8']:checked").val());
		var b9 = parseInt($("input[name = 'b9']:checked").val());

		var total = b1+b2+b3+b4+b5+b6+b7+b8+b9;
		alert('Section 2 score is '+total);
		
	});

	$('#thir').click(function(){
		var c1 = parseInt($("input[name = 'c1']:checked").val());
		var c2 = parseInt($("input[name = 'c2']:checked").val());
		var c3 = parseInt($("input[name = 'c3']:checked").val());
		var c4 = parseInt($("input[name = 'c4']:checked").val());
		var c5 = parseInt($("input[name = 'c5']:checked").val());
		var c6 = parseInt($("input[name = 'c6']:checked").val());
		var c7 = parseInt($("input[name = 'c7']:checked").val());
		var c8 = parseInt($("input[name = 'c8']:checked").val());
		var c9 = parseInt($("input[name = 'c9']:checked").val());
		var c10 = parseInt($("input[name = 'c10']:checked").val());
		var tot_3 = c1 +c2 +c3 +c4+c5 +c6 +c7+c8+c9 +c10;
		alert('Section 3 score is '+tot_3);
		// var the_value;
		// the_value = getCheckItems();
		// alert(the_value);
	});

	$('#fourth').click(function(){
		var d1 = parseInt($("input[name = 'd1']:checked").val());
		var d2 = parseInt($("input[name = 'd2']:checked").val());
		var d3 = parseInt($("input[name = 'd3']:checked").val());
		var d4 = parseInt($("input[name = 'd4']:checked").val());
		var d5 = parseInt($("input[name = 'd5']:checked").val());
		var d6 = parseInt($("input[name = 'd6']:checked").val());
		var d7 = parseInt($("input[name = 'd7']:checked").val());
		var d8 = parseInt($("input[name = 'd8']:checked").val());

		var tot_4 = d1+d2+d3+d4+d5+d6+d7+d8;
		alert('Section 4 score is '+tot_4);
		
	});

	$('#fifth').click(function(){
		var e1 = parseInt($("input[name = 'e1']:checked").val());
		var e2 = parseInt($("input[name = 'e2']:checked").val());
		var e3 = parseInt($("input[name = 'e3']:checked").val());
		var e4 = parseInt($("input[name = 'e4']:checked").val());
		var e5 = parseInt($("input[name = 'e5']:checked").val());
		var e6 = parseInt($("input[name = 'e6']:checked").val());
		var e7 = parseInt($("input[name = 'e7']:checked").val());
		var e8 = parseInt($("input[name = 'e8']:checked").val());

		var tot_5 = e1+e2+e3+e4+e5+e6+e7+e8;
		alert('Section 4 score is '+tot_5);
		
	});
});

function getCheckItems(){
		var result =
        $("tr > td > input:radio:checked").get();
        alert(result)
    var columns = $.map(result, function(element) {
        return $(element).attr('id');
    });

    return columns.join("|");
	}