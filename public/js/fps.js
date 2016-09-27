// DEBUG
var trace = function(msg){ console.log(msg); };

var displayList;

function pageLoad_init()
{
	trace("pageLoad_init();");

	list_create();
}

function list_create()
{
	displayList = {};

	displayList.spinnner = document.querySelector("#wrapper .spinner-sprite");

	interact_init(true);
}

function interact_init(allow)
{
	displayList.spinnner.classList.add("tween-spinner");
	displayList.spinnner.style.animationPlayState = "paused";

	if(allow)
	{
		displayList.spinnner.addEventListener("mouseover", interact_event, false);
		displayList.spinnner.addEventListener("mouseout", interact_event, false);
	}

	else
	{
		displayList.spinnner.removeEventListener("mouseover", interact_event, false);
		displayList.spinnner.removeEventListener("mouseout", interact_event, false);

	}
}

function interact_event(event)
{
	var _type = event.type;

	if(_type === "mouseover")
	{
		displayList.spinnner.style.animationPlayState = "running";
		// displayList.spinnner.classList.add("tween-spinner");
	}

	else if(_type === "mouseout")
	{
		displayList.spinnner.style.animationPlayState = "paused";
		// displayList.spinnner.classList.remove("tween-spinner");
	}
}