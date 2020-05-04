document.getElementById("phimmoi_default_tab").click();
document.getElementById("default_tab").click();
document.getElementsByClassName('tablinks')[0].click();

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function prehotbox(pos){
	var c = pos.replace("px", "");
	c = Number(c);				
	if(c >= -100){c = -1750;}
	var p = document.getElementById('listfilm1');
	var d = c + 350;
	p.style.left = d  + "px";
	document.getElementById('listfilm1').style.transition= "left 2s";	
}
function nexthotbox(pos){				
	var c = pos.replace("px","");
	c = Number(c);
	if(c <= -1350){c = 342;}
	var p = document.getElementById('listfilm1');
	var d = c - 350;
	p.style.left = d + "px";				
	document.getElementById('listfilm1').style.transition= "left 2s";				
}
function openTabs3(evt, tabName)
{
	var i, tabcontent, tablinks;
	tabcontent=document.getElementsByClassName("tabcontent3");
	for(i =0; i<tabcontent.length; i++)
	{
		tabcontent[i].style.display="none";
	}
	
	tablinks=document.getElementsByClassName("tablinks3");
	for(i =0; i<tablinks.length; i++)
	{
		tablinks[i].className=tablinks[i].className.replace(" active", "");
	}
	
	document.getElementById(tabName).style.display="block";
	evt.currentTarget.className+=" active";
}
function openTabs2(evt, tabName)
{
	var i, tabcontent, tablinks;
	tabcontent=document.getElementsByClassName("tabcontent2");
	for(i =0; i<tabcontent.length; i++)
	{
		tabcontent[i].style.display="none";
	}
	
	tablinks=document.getElementsByClassName("tablinks2");
	for(i =0; i<tablinks.length; i++)
	{
		tablinks[i].className=tablinks[i].className.replace(" active", "");
	}
	
	document.getElementById(tabName).style.display="block";
	evt.currentTarget.className+=" active";
}
function openTabs(evt, tabName){
	 // Declare all variables
	var i, tabcontent, tablinks;
	
	 // Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");		
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	
	// Show the current tab, and add an "active" class to the link that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
	
}