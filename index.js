
var first1=document.getElementById("first1");
var second1=document.getElementById("second1");
var firstImage=document.getElementById("firstImage");
var firstImage1=document.getElementById("firstImage1");
var firstHead1=document.getElementById("firstHead1");
var two;


var i=0,j=0,m=0;
var originalDay=new Date();
sessionStorage.setItem("todayNew",originalDay);
function date(){
	if( sessionStorage.getItem("clicked")==1)
	{

		var oldDate= sessionStorage.getItem("today1");	
		var today = new Date(oldDate);
		today.setDate(today.getDate() - 1);
		sessionStorage.setItem("today1",today);
		var ExactDay=onlyDate(today);
		sessionStorage.setItem("today",ExactDay);
		sessionStorage.removeItem("clicked");
		return ExactDay;
	}
	else if(sessionStorage.getItem("back")==1 && ( sessionStorage.getItem("clicked")!=1))
	{
		var originalDay=new Date();
		var oldDate= sessionStorage.getItem("today1");
		var oldDate1= sessionStorage.getItem("today")
		var originalDay=onlyDate(originalDay);
		if(oldDate1!=originalDay&& oldDate!=null)
		{
			var today = new Date(oldDate);
			sessionStorage.removeItem("back");
			today.setDate(today.getDate() + 1);
			sessionStorage.setItem("today1",today);
			var ExactDay=onlyDate(today);
			sessionStorage.setItem("today",ExactDay);
			return ExactDay;
		}
		else
			alert(	"No Previous Available");
	}
	else
	{
		var today = new Date();
		sessionStorage.setItem("today1",today);
		var ExactDay=onlyDate(today);
		sessionStorage.setItem("today",ExactDay);
		return ExactDay;
	}
}
function onlyDate(today)
{
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10)
		dd='0'+dd;
	if(mm<10)
		mm='0'+mm;
	today = dd + '-' + mm + '-' + yyyy;
	return today;
}





function fire(){
var day=date();
var ref = firebase.database().ref("News/"+day);
ref.on('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
	   childSnapshot.forEach(function(grandChildSnapshot){
		   
		 if(grandChildSnapshot.key==('Data'))
		 {

			 
		  j++;i=0;
		  zero=grandChildSnapshot.ref.toString();
		  grandChildSnapshot.forEach(function(grandChildSnapshot1){
	      i++;
		  var childKey = grandChildSnapshot1.key;
		  var childData = grandChildSnapshot1.val();
			if(j==1)
			{
			  if(i==3)
			  {
				firstImage.src = childData;
				firstImage1.src=childData;
				firstImage11.src=childData;
				sessionStorage.setItem("image1",childData);
				
			

			  } 

			  if(i==2)
			  {
				  first1.innerText=childData;
				  firstHead1.innerText=childData;
				  firstHead11.innerText=childData;
				  sessionStorage.setItem("head1",childData);
			  }
			  if(i==1)
			  {
				  firstDescrption1.innerText=childData;
				  firstDescrption11.innerText=childData;
				  sessionStorage.setItem("description1",childData);
			  }
			 
			}
		    else if(j==2)
			{
				if(i==3){
				secondImage.src = childData;
				secondImage1.src=childData;
				secondImage11.src=childData;
				sessionStorage.setItem("image2",childData);
				}
				if(i==2)
				{
				  second1.innerText=childData;
				  secondHead1.innerText=childData;
				  secondHead11.innerText=childData;
				  sessionStorage.setItem("head2",childData);
				}
		    	if(i==1)
			    {
				  secondDescrption1.innerText=childData;
				  secondDescrption11.innerText=childData;
				  sessionStorage.setItem("description2",childData);
			    }
				
		   }
		      else if(j==3)
			{
				if(i==3)
				thirdImage.src = childData;
			    thirdImage1.src=childData;
			    thirdImage11.src=childData;
				sessionStorage.setItem("image3",childData);
				if(i==2)
				{
				  third1.innerText=childData;
				   thirdHead1.innerText=childData;
				   thirdHead11.innerText=childData;
				    sessionStorage.setItem("head3",childData);
				}
		    	if(i==1)
			    {
				  thirdDescrption1.innerText=childData;
				  thirdDescrption11.innerText=childData;
				  sessionStorage.setItem("description3",childData);
			    }				
		   }
		    else if(j==4)
			{
				if(i==3)
				{
				fourthImage.src = childData;
				fourthImage1.src=childData;
				fourthImage11.src=childData;
				sessionStorage.setItem("image4",childData);
				}
				
				if(i==2)
				{
				  fourth1.innerText=childData;
				  fourthHead1.innerText=childData;
				  fourthHead11.innerText=childData;
				   sessionStorage.setItem("head4",childData);
				}
		    	if(i==1)
			    {
				  fourthDescrption1.innerText=childData;
				  fourthDescrption11.innerText=childData;
				  sessionStorage.setItem("description4",childData);
			    }
				
		   }
		          else if(j==5)
			{
				if(i==3)
				{
				fifthImage.src = childData;
				fifthImage1.src=childData;
				fifthImage11.src=childData;
				sessionStorage.setItem("image5",childData);
				}
				if(i==2)
				{
				  fifth1.innerText=childData;
				   fifthHead1.innerText=childData;
				   fifthHead11.innerText=childData;
				    sessionStorage.setItem("head5",childData);
				}
		    	if(i==1)
			    {
				  fifthDescrption1.innerText=childData;
				  fifthDescrption11.innerText=childData;
				  sessionStorage.setItem("description5",childData);
			    }
		   }
		           else if(j==6)
			{
				if(i==3)
				{
				//fifthImage.src = childData;
				sixthImage1.src=childData;
				sixthImage11.src=childData;
				sessionStorage.setItem("image6",childData);
				}
				if(i==2)
				{
				  //fifth1.innerText=childData;
				   sixthHead1.innerText=childData;
				   sixthHead11.innerText=childData;
				    sessionStorage.setItem("head6",childData);
				}
		    	if(i==1)
			    {
				  sixthDescrption1.innerText=childData;
				  sixthDescrption11.innerText=childData;
				  sessionStorage.setItem("description6",childData);
			    }
		   }
		           else if(j==7)
			{
				if(i==3)
				{
				//fifthImage.src = childData;
				seventhImage1.src=childData;
				seventhImage11.src=childData;
				sessionStorage.setItem("image7",childData);
				}
				if(i==2)
				{
				 // fifth1.innerText=childData;
				   seventhHead1.innerText=childData;
				    sessionStorage.setItem("head7",childData);
				}
		    	if(i==1)
			    {
				  seventhDescrption1.innerText=childData;
				  seventhDescrption11.innerText=childData;
				  sessionStorage.setItem("description7",childData);
			    }
		   }
		           else if(j==8)
			{
				if(i==3)
				{
				//fifthImage.src = childData;
				eightthImage1.src=childData;
				eightthImage11.src=childData;
				sessionStorage.setItem("image8",childData);
				}
				if(i==2)
				{
				  //fifth1.innerText=childData;
				   eightthHead1.innerText=childData;
				   eightthHead11.innerText=childData;
				    sessionStorage.setItem("head8",childData);
				}
		    	if(i==1)
			    {
				  eighthDescrption1.innerText=childData;
				  eighthDescrption11.innerText=childData;
				  sessionStorage.setItem("description8",childData);
			    }
		   }
		           else if(j==9)
			{
				if(i==3)
				{
				//ninethImage.src = childData;
				ninethImage1.src=childData;
				ninethImage11.src=childData;
				sessionStorage.setItem("image9",childData);
				}
				if(i==2)
				{
				  //fifth1.innerText=childData;
				   ninethHead1.innerText=childData;
				   ninethHead11.innerText=childData;
				    sessionStorage.setItem("head9",childData);
				}
		    	if(i==1)
			    {
				  ninethDescrption1.innerText=childData;
				  ninethDescrption11.innerText=childData;
				  sessionStorage.setItem("description9",childData);
			    }
		   }
		           else if(j==10)
			{
				if(i==3)
				{
				//fifthImage.src = childData;
				tenthImage1.src=childData;
				tenthImage11.src=childData;
				sessionStorage.setItem("image10",childData);
				}
				if(i==2)
				{
				  //fifth1.innerText=childData;
				   tenthHead1.innerText=childData;
				   tenthHead11.innerText=childData;
				    sessionStorage.setItem("head10",childData);
				}
		    	if(i==1)
			    {
				  tenthDescrption1.innerText=childData;
				  tenthDescrption11.innerText=childData;
				  sessionStorage.setItem("description10",childData);
			    }
				
		   }
		
		   });
		 } 
	  });
	 
  });
  j=0;
});
}
	 
	 
var h=0;


function second(a){
	switch(a)
	{
		case 1:
		var a = sessionStorage.setItem("val",1);	
		break;
		case 2:
		var a = sessionStorage.setItem("val",2);	
		break;
		case 3:
		var a = sessionStorage.setItem("val",3);	
		break;
		case 4:
		var a = sessionStorage.setItem("val",4);	
		break;
		case 5:
		var a = sessionStorage.setItem("val",5);	
		break;
		case 6:
		var a = sessionStorage.setItem("val",6);	
		break;
		case 7:
		var a = sessionStorage.setItem("val",7);	
		break;
		case 8:
		var a = sessionStorage.setItem("val",8);	
		break;
		case 9:
		var a = sessionStorage.setItem("val",9);	
		break;
		case 10:
		var a = sessionStorage.setItem("val",10);	
		break;
	}

}
	
function third()
{
	var c=sessionStorage.getItem("val");
	switch(c)
	{
		case "1":{
		head1.innerText=sessionStorage.getItem("head1");
		image1.src= sessionStorage.getItem("image1");
		result.innerText=sessionStorage.getItem("description1");
		sessionStorage.clear();
		
		}
		break;
		case "2":{
		head1.innerText=sessionStorage.getItem("head2");
		image1.src= sessionStorage.getItem("image2");
		result.innerText=sessionStorage.getItem("description2");
		sessionStorage.clear();
	
		}
		break;
		case "3":{
		head1.innerText=sessionStorage.getItem("head3");
		image1.src= sessionStorage.getItem("image3");
		result.innerText=sessionStorage.getItem("description3");
		sessionStorage.clear();
	
		}
		break;
		case "4":{
		head1.innerText=sessionStorage.getItem("head4");
		image1.src= sessionStorage.getItem("image4");
		result.innerText=sessionStorage.getItem("description4");
		sessionStorage.clear();
	
		}
		break;
		case "5":{
		head1.innerText=sessionStorage.getItem("head5");
		image1.src= sessionStorage.getItem("image5");
		result.innerText=sessionStorage.getItem("description5");
		sessionStorage.clear();
	
		}
		break;
		case "6":{
		head1.innerText=sessionStorage.getItem("head6");
		image1.src= sessionStorage.getItem("image6");
		result.innerText=sessionStorage.getItem("description6");
		sessionStorage.clear();
	
		}
		break;
		case "7":{
		head1.innerText=sessionStorage.getItem("head7");
		image1.src= sessionStorage.getItem("image7");
		result.innerText=sessionStorage.getItem("description7");
		sessionStorage.clear();
	
		}
		break;
		case "8":{
		head1.innerText=sessionStorage.getItem("head8");
		image1.src= sessionStorage.getItem("image8");
		result.innerText=sessionStorage.getItem("description8");
		sessionStorage.clear();
	
		}
		break;
		case "9":{
		head1.innerText=sessionStorage.getItem("head9");
		image1.src= sessionStorage.getItem("image9");
		result.innerText=sessionStorage.getItem("description9");
		sessionStorage.clear();
	
		}
		break;
		case "10":{
		head1.innerText=sessionStorage.getItem("head10");
		image1.src= sessionStorage.getItem("image10");
		result.innerText=sessionStorage.getItem("description10");
		sessionStorage.clear();
	
		}
		break;
}}
function more()
{
sessionStorage.setItem("clicked",1);
fire();

}
function back()
{
	sessionStorage.setItem("back",1);
	fire();
}


$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});



