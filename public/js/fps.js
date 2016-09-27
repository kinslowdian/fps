// DEBUG
var trace = function(msg){ console.log(msg); };

var displayList;
var config;

function pageLoad_init()
{
	trace("pageLoad_init();");

	config = {};

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
		clearTimeout(config.interact_timer);
		displayList.spinnner.style.animationPlayState = "running";
	}

	else if(_type === "mouseout")
	{
		config.interact_timer = setTimeout(interact_timer_done, 1.5 * 1000);
		// displayList.spinnner.style.animationPlayState = "paused";
	}
}

function interact_timer_done()
{
	displayList.spinnner.style.animationPlayState = "paused";
}