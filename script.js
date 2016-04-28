// $("select[name='ageGroups'] option:selected")
// 		console.log('hello');
// var element = document.getElementById("ageGroups");
// element.value = "1";




$(document).ready(function() {
    $('input.myButton').click(function() {
    	console.log('hello');

    	var mySelectedOption = $("select#ageGroups option:selected").val();
    	var mySelectedGender = $("select#gender option:selected").val();
    	var pictures = [
    		[//agegroup0
    			{//genderf
    				avatar: "img/a0f.jpg",
    				pieChart: "img/p0f.jpg"
    			},
    			{//genderm
    				avatar: "img/a0m.jpg",
    				pieChart: "img/p0m.jpg"
    			}
    		],
    		[//agegroup1
    			{//genderf
    				avatar: "img/a1f.jpg",
    				pieChart: "img/p1f.jpg"
    			},
    			{//genderm
    			    avatar: "img/a1m.jpg",
    				pieChart: "img/p1m.jpg"	
    			}
    		],
    		[//agegroup2
    			{//genderf
    				avatar: "img/a2f.jpg",
    				pieChart: "img/p2f.jpg"
    			},
    			{//genderm
    				avatar: "img/a2m.jpg",
    				pieChart: "img/p2m.jpg"
    			}
    		],
    		[//agegroup3
    			{//genderf
    				avatar: "img/a3f.jpg",
    				pieChart: "img/p3f.jpg"
    			},
    			{//genderm
    				avatar: "img/a3m.jpg",
    				pieChart: "img/p3m.jpg"    				
    			}
    		],
    		[//agegroup4
    			{//genderf
    				avatar: "img/a4f.jpg",
    				pieChart: "img/p4f.jpg"
    			},
    			{//genderm
    				avatar: "img/a4m.jpg",
    				pieChart: "img/p4m.jpg"    				
    			}
    		]
    	];

    	console.log(pictures[mySelectedOption][mySelectedGender].avatar); //YOU NEED TO ADD THE PIE CHART NOW
		$('#image').empty();	
    	$('#image').prepend('<img id="theImg" src="' + pictures[mySelectedOption][mySelectedGender].avatar + '" />');
    	$('#image').prepend('<img id="theImg" src="' + pictures[mySelectedOption][mySelectedGender].pieChart + '" />');
		


        //$(this).css('display', 'none');

        // (option value="1") ('#image').prepend('<img id="theImg" src="https://cdn.photographylife.com/wp-content/uploads/2014/06/Nikon-D810-Image-Sample-6.jpg" />');
        // (option value="2") ('#image').prepend('<img id="theImg" src="http://www.dogoilpress.com/data/wallpapers/3/FDS_355863.jpg" />');
        // (option value="3") ('#image').prepend('<img id="theImg" src="http://www.dogoilpress.com/data/wallpapers/3/FDS_355863.jpg" />');
        // (option value="4") ('#image').prepend('<img id="theImg" src="http://www.dogoilpress.com/data/wallpapers/3/FDS_355863.jpg" />');
        //$('<img>').attr('src', 'http://www.mayla.ro/App_Themes/Glass/Editors/Loading.gif').insertAfter($(this));
    });
});
