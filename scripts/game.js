// JavaScript Document
searchdesk = false;
/*************************************************************
Set up, user starts by leaving the starting point then is faced with a choice of either going west or north.
*******************
Going east
*******************
If the user goes east then they will be faced with a choice of going east or west to go either:
Go east and your faced with going into the kitchen and finding idems there 
*******************************
Going West in Going West choice
*******************************
If the user goes west then goes west again then:
the user will go outside and can search the bushes outside.
********************
Going North
********************
Then they have a choice of going upstairs or going into the office
If the user goes into the office they will search the room
--------------------------------------------------------------
if the user goes upstairs then they will be faced with either going west to the guestroom or east to go to the master bedroom, if they discover the attic then collectables will be in there.
*************************************************************/
//How-to win the game. || This Idem.
frontdoorKey = false;
//current room
currentroom = 'closet';
//rooms
/****************
	Hallway 1
****************/
beentoOutside = false;
beentoKitchen = false;
/**********************
Go back to hallway var(s)
**********************/
beentoWesthall = false;
beentoWesthall = false;
/*******************
hallway 2 to Office or Upstairs
*******************/
beentoOffice = false;
beentoUpstairs = false;
/*******************
	Upstairs
*******************/
beentoGuestroom = false;
beentoMasterbedroom = false;
beentoAttic = false;
//other
debugUser = 'Nicky';
errorSet = false;
/*******************
		idems
*******************/
//Start of the game, the idems you find.
phone = false;
note = false;
//Kitchen idems you find
cookiepan = false;
knife = false;
note_two = false;
//Outside Idem

//office idems you find
bullets = false;
outdoor_key = false;
note_three = false;
skill_one = false;
/******************
Upstairs idems
******************/
//Guestroom 
masterbedroom_key = false;
skill_two = false;
//master bedroom
gun = false;
skill_three = false;
cash = false;
//attic
skill_four = false;
/******************
Who has been killed
*******************/
haskilledHobo = false;
haskilledWolf = false;
//End
$(document).ready(function() {
	$("#compass").fadeIn(2000);
	$("#message_begin").fadeIn(3000);
	$("#area_main").fadeIn(3000);
	$("#command_line").fadeIn(2000);
	$("form").submit(function() {
		var input = $("#command_line").val();
		//help
		//
		if (input.indexOf("help") > -1) {
			if (input == "help") {
				$("#message_help").clone().insertBefore("#placeholder").fadeIn(1000);
			}
		}
		//end help
		//
		//take
		//
		
		else if (input.indexOf("take") > -1) {
			
			if (input == "take") {
				$('<p>Take what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//closet Idems			
			//Phone
			else if (input == "take phone" || input == "take cell phone") {
				if (currentroom == "closet" && phone == false) {
					Phone = true;
					$('<p>You picked up some a phone, the brand is smeared off.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//note
			else if (input == "take note") {
				if (currentroom == "closet" && note == false) {
					note = true;
			$('<p>You picked up a note. It reads:Welcome to my glorious mansion, It seems you have emerged from the slumber. Don\'t worry. Things will get more interesting as you go along, watch out, this house has been abanded for years.Who knows who lives here now. Good luck getting out.<br /><br />Sincerely,<br/>~ Anonymous<br /><br />P.S.Watch your back, or you\'ll loose your head.</p>').insertBefore("#placeholder").fadeIn(1000);				
			}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			//Kitchen Idems
			else if (input == "take cookiepan" || input == "take cookie pan") {
				if (currentroom == "kitchen" && cookiepan == false) {
					//forgot to set these currenroom vars
					currentroom = 'kitchen';
					cookiepan = true;
					$('<p>You picked up a cookie pan, maybe bake some cupcakes?</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//knife
			else if (input == "take knife") {
				if (currentroom == "kitchen" && knife == false) {
					currentroom = 'kitchen';
					knife = true;
					$('<p>You have picked up a knife, it seems used and has some stains on it.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//note 2
			else if (input == "take note two"|| input == "take note_two"|| input == "take note 2") {
				if (currentroom == "kitchen" && note_two == false) {
				currentroom = 'kitchen';
					note_two = true;
					$('<p>You picked up another note it reads:Well, you have found yet another note I have left around the house, well I\'ll keep this one short and sweet. I would watch your back, I think there is a man living up in the attic, but that\'s all the info I have at the moment.<br />From,<br /> Anon</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		//outdoor_key
		else if(input =='take outdoor_key' || input =='take outdoor key' || input == 'take out door key' || input == 'take Outdoor key' || input == 'take outdoor Key' || input == 'take outDoor key'){
			if(currentroom == 'office' && outdoor_key == false){
			currentroom = 'office';
			outdoor_key = true;
				$('<p>You have picked up an outdoor key. Maybe it leads to I don\'t know outside?</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		//note 3
		else if(input == 'take note 3' || input == 'take note three' || input == 'take note_three' || input == 'take note3'){
			if(currentroom == 'office' && note_three == false){
				currentroom = 'office';
					note_three = true;
				$('<p>You have picked up another note,this time its 1 line.<br /> Lets keep this short and simple, you won\'t survive. Plain and simple. There,bye <br />From,Anon</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		//skill one
		else if(input == 'take skill 1' || input == 'take skill one' || input == 'take skill_one' || input == 'take skill1'){
				if(currentroom == 'office' && skill_one == false){
					currentroom = 'office';
					skill_one = true;
				$('<p>You have picked up skill one or formally known as hacking skill. This allows you to hack certain things in-game.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		//masterbedroom_key
		else if(input == 'take masterbedroom key'|| input == 'take master bedroom key' || input == 'take masterbed room key' || input == 'take master bed room key'){
			if(currentroom == 'guestroom' && masterbedroom_key == false){
					currentroom = 'guestroom';
					masterbedroom_key = true;
				$('<p>You picked up a masterbed room key, seems to lead to some room on the upstairs.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		
		//skill 2
		else if(input == 'take skill_two' || input == 'take skill2' || input == 'take skill 2' || input == 'take skill two'){
			if(currentroom == 'guestroom' && skill_two == false){
				skill_two = true;
				currentroom = 'guestroom';
					$('<p>You picked up a door hack, at the moment nothing is working for hacks.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		//gun 
		else if(input =='take gun'){
			if(currentroom == 'masterbedroom' && gun == false){
			gun = true;
				$('<p>You picked up a gun, the markings are smeared, but faint smell of death reminses.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		//skill 3
		else if(input == 'take skill3' || input == 'take skill three' || input == 'take skill 3' || input == 'take skillthree'){
			if(currentroom == 'masterbedroom' && skill_three == false){
					skill_three = true;
					$('<p>You picked up another skill, called skill 3 or formally known as a flashlight. But no skills are working at the moment.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		
		//cash
		else if(input == 'take cash' ||input == 'take money' || input == 'take dough' || input == 'take cash money' || input == 'take bank' || input == 'take dat cash'){
			if(currentroom == 'masterbedroom' && cash == false){
				cash = true;
				$('<p>Ypu picked up some cash, lets count it later.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else if(input == 'take skill_four' || input == 'take skill 4' || input == 'take skill four' || input == 'take skill4' || input == 'take skillfour'){
				if(currentroom == 'attic' && skill_four == false){
				skill_four = true;
				$('<p>You picked up another skill, but those are\'nt working at the moment.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		else if(input == 'take front door key'|| input == 'take frontdoor key'|| input == 'Take Frontdoor key'|| input == 'take frontDoor key'|| input == 'take frontdoorkey' || input == 'take FrontDoor Key'|| input == 'take front doorkey'){
			if(currentroom == 'attic' && frontdoorKey == false){
			frontdoorKey = true;
				$('<p>You picked up the key to the front door! This is the way out of this crazy mansion.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		//else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
		}
		//end take

		//search
		else if (input.indexOf("search") > -1) {
			
			if (input == "search") {
				$('<p>Search what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
			}	//closet the beginning of the game.
			else if(input == 'search closet' || input == 'search Closet'|| input == 'Search closet' || input == 'Search Closet'){
				if(currentroom == 'closet' && phone == false && note == false){
					phone = true;
					note = true;
				$('<p>You found a old phone, looks bulky. A note lays on the ground also.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//kitchen
			else if(input =="search kitchen" ||input == 'search Kitchen' || input == 'Search kitchen'|| input == 'Search Kitchen'){
				if(currentroom == "kitchen" && cookiepan == false && knife == false && note_two == false ) {
					currentroom = 'kitchen';
					cookiepan = true;
					knife = true;
					note_two = true;
			$('<p>You found a cookiepan, looks old and rusty. Also you found a bloody knife and another note, note 2.</p>').insertBefore("#placeholder").fadeIn(1000);
					}	
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//office
			else if (input == "search office desk" || input == 'search officedesk' || input == 'Search office'|| input == 'search Office' || input == 'Search Office') {
				if (currentroom == "office" && bullets == false && note_three == false && skill_one == false && outdoor_key == false) {
					bullets = true;
					currentroom = 'office';
					note_three = true;
					skill_one = true;
					outdoor_key = true;
					$('<p>You found some bullets in the desk and a key leading outside. Another note falls out onto the floor.Note 3 it\'s labeled.Also a skill is found.(skill 1)</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			//guestroom
			else if (input == "search guest room"|| input =="search guestroom" || input =='Search guestroom' || input =='search Guestroom' || input == 'Search guest room' || input == 'search Guest room') {
				if (currentroom == "guestroom" && skill_two == false && masterbedroom_key == false) {
					skill_two = true;
					masterbedroom_key = true;
					$('<p>You found a key to the masterbedroom, and you found a skill.but skills don\'t work at the moment.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//Masterbedroom
			else if (input == "search Masterbedroom"|| input == "search master bedroom" || input == 'Search masterbedroom' || input == 'search Masterbedroom' || input == 'Search Masterbedroom' || input == 'Search Masterbed room') {
				if (currentroom == "Masterbedroom" && cash == false && gun == false) {
					currentroom = 'Masterbedroom';
					cash = true;
					gun =  true;
					skill_three = true;
					$('<p>You found some cash buried in the walls of the room,we can\'t count it now. You also found a gun and another skill, skill 3.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//attic 
			else if(input == 'search attic'|| input == 'Search attic'|| input == 'search Attic'|| input == 'Search Attic'){
				if(currentroom == 'attic' && frontdoorKey == false){
				frontdoorKey = true;
					$('<p>You found a strange key it emmits a way out of the house. It\'s imprinted with a writing reading: frontdoor key</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			/*
		//hobo
		else if(input =="search hobo"|| input=="search dead hobo"){
			if(currentroom == "attic" && frontdoorKey == false){
			frontdoorKey = true;
			currentroom = 'attic';
				//going into the attic when you kill the hobo you find the key to the front door and to leave. That makes you win the game.
			$('<p>You found the front door key! That\'s your way out of this house!Go downstairs and leave.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			*/
		//bushes for outside
		else if(input =="search bushs"||input=="search bushes"|| input == 'search bush'){
		if(currentroom == "outside"){
			crowbar = true;
		$('<p>You found a crowbar,this can open all the doors in the building.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		//
		//end search
		//kill
		//
		else if (input.indexOf("kill") > -1) {
			
			if (input == "kill") {
				$('<p>Kill what with what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
			//knife self
			else if (input == "kill self with knife"|| input == 'kill self with the knife' || input == 'kill me with knife') {
				if (knife == true) {
					$("#container").fadeOut(3000, function() {
						$("#killself").fadeIn(3000);
					});
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//gun
			else if (input == "kill self with gun"|| input == 'shoot self'|| input == 'killself with gun') {
				if (gun == true) {
					$("#container").fadeOut(3000, function() {
						$("#killself").fadeIn(3000);
					});
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			else if(input =="kill hobo"){
				if(currentroom == 'attic' && haskilledHobo == false){
					haskilledHobo = true;
					$('<p>You killed the hobo!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			else { 
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			else $('<p>You can\'t do that!</p>').insertBefore("#placeholder").fadeIn(1000);
		}
		//
		//end kill
		//
		//inventory
		//
		else if (input.indexOf("inventory") > -1) {
			if (input == "inventory") {
				//phone
				if (phone == true) {
					p = "Phone<br />";
				}
				else {
					p = "";
				}
				//note
				if (note == true) {
					n = "Note<br />";
				}
				else {
					n = "";
				}
				//
				//cookiepan
				if (cookiepan == true) {
					cp = "Cookiepan<br />";
				}
				else {
					cp = "";
				}
				//knife
				if(knife == true){
					kf ="Knife<br />";
				}
				else {
					kf="";
				}
				//note_two
				if(note_two == true){
					ntw="Note_two<br />";
				}
				else {
					ntw="";
				}
				//bullets
				if(bullets == true){
					b ="bullets<br />";
				}
				else {
					b ="";
				}
				//outdoor key
				if (outdoor_key == true) {
					ok = "outdoor key<br />";
				}
				else {
					ok = "";
				}
				if (note_three == true){
					ntt = "Note 3<br />";
				}
				else {
					ntt ="";
				}
				if (skill_one == true){
					sko = "Hacking Skill<br />";
				}
				else {
					sko = "";
				}
				if (masterbedroom_key == true){
					mbk = "Master bedroom key<br />";
				}
				else {
					mbk ="";
				}
				if (skill_two == true){
					skt = "Door Hack<br />";
				}
				else {
					skt = "";
				}
				if (gun == true){
					g = "Gun<br />";
				}
				else {
					g = "";
				}
				if (skill_three == true){
					sktr = "Flashlight<br />";
				}
				else {
					sktr = "";
				}
				if (cash == true){
					c = "cash<br />";	
				}
				else {
					c = "";
				}
				if (skill_four == true){
					skf = "Attic Key<br />";
				}
				else {
					skf = "";
				}
				if (frontdoorKey = true){
					fdk = "Frontdoor key<br />";
				}
				else {
					fdk = "";
				}
				//
				if (p == "" && n == "" && cp == ""&& kf == "" && ntw == "" && b =="" && ok =="" && ntt =="" && sko == "" && mbk == "" && skt == "" && g == "" && sktr == "" && c =="" && skf == ""&& fdk == "") {	//Add to this inventory and make it bigger.
					$('<p>Inventory:<br /><i>There is nothing in your inventory</i></p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					 $('<p>Inventory:<br />' + p + n + cp + kf + ntw + b + ok + ntt + sko + mbk + skt + g + sktr + c + skf + fdk +'</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
		}
		//
		//end inventory
		
		//unlock
		else if (input.indexOf("unlock") > -1) {
			if (input == "unlock" || input == "unlock door" || input == "unlock outside door" || input == "unlock outside") {
				$('<p>Unlock door with what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//go outside
			else if (input == "unlock outside with outdoorKey" || input == "unlock outside door with outdoorkey" || input == "unlock outdoor with out door key" || input == "unlock outdoor with outdoor key") {
				if (currentroom != "westhall") {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (outdoor == true) {
					$('<p>The door is already unlocked.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "westhall" && outdoor_key == true) {
					$('<p>You unlocked the door to the outside successfully. You can now explore the bushes around you. But watch out a tall face-less man might be out in the woods...</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>The door cannot be unlocked.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
		//unlock master bedroom
		else if(input =="unlock master bedroom with masterbedroom key" || input == "unlock masterbed room with master bedroom key" || input =="unlock masterbed room door with masterbed room key"){
			if(currentroom != "upstairs"){
				$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			else if (currentroom =="upstairs" && masterbedroom_key == true){
				$('<p>You are now in the master bed room</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>You do\'nt have a door key.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		//unlock attic
		else if(input =="unlock attic" || input =="open attic" ||input =="open attic door" ||input =="unlock attic door"){
			if(currentroom == "upstairs"){
				$('<p>You are now in the attic.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			if	(currentroom != 'upstairs'){
				$('<p>You can\'t do that!</p>').insertBefore("#placeholder").fadeIn(1000);
				}	
			}
		else if (input == "unlock frontdoor with frontdoor key" || input == "unlock front door with front door key" || input == "unlock frondoor with front door key"){
			if(currentroom == "westhall" && frontdoorKey == true){
				("#wingame").clone().insertBefore("#placeholder").fadeIn(1000);
		}
		//
		//end unlock
		//
		//maybe put in easter eggs here and there.
		//
		//go
		else if(input.indexOf("go") >-1){
			if(input == 'go'){
				$('<p>Go where? Be descriptive.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//Go from the closet to the east hall
			else if (input == "go west" && currentroom == "closet") {
				if (beentoWesthall == true) {
						$('<p>You are in the west hallway, there is a bloody door to the west leading to the kitchen, while to the east of you there is a locked door leading to the cold outside.</p>').insertBefore("#placeholder").fadeIn(1000);
						currentroom = "westhall";
					}
					else {
						$("#area_westhall").clone().insertBefore("#placeholder").fadeIn(1000);
						currentroom = "hallway";
						beentoWesthall = true;
					}
				else {
					$('<p>You can\'t go east here.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}				
			//go west to from the westhall to kitchen
			else if (input == "go west" && currentroom == "westhall") {
				if (beentoWesthall == true) {
						if (cookiepan == false) {
							cookiepan = "The stove is emitting strange heat.";
						}
						else {
							cookiepan = "";
						}
						if (knife == false) {
							knife = "A knife lays embedded in the wall.";
						}
						else {
							knife = "";
						}
						if(note_two == false) {
							note_two = "A strange note lies on the ground..";
						}
						else{
							note_two = "";
						}
						$('<p>You are back in the kitchen, the floor seems covered in blood.'+ cookiepan + knife + + note_two +'</p>').insertBefore("#placeholder").fadeIn(1000);
						currentroom = "kitchen";
					else {
						$("#area_kitchen").clone().insertBefore("#placeholder").fadeIn(1000);
						beentoKitchen = true;
						currentroom = "kitchen";
					}
				}
				else {
					$('<p>incandescent lighting brightens up the destroyed kitchen..</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//
			else if(input == "go east" && currentroom == "kitchen"){
				if(cookiepan == true && knife == true && note_two == true){
					$('<p>You are back in the westhall. To your west is the kitchen and to your east is the cold outside.</p>').insertBefore("placeholder").fadeIn(1000);
					}
					currentroom = "westhall";
					//Could add a check in here if they don't pick up all the idems but its their fault.
					}
			//go to outside from westhall
			else if (input == "go east" && currentroom == "westhall" && outdoor_key == true) {
					if (beentoWesthall == true && outdoor_key == true) {
						$('<p>You are outside. The ominous wind hails from the north.Shivering your bones..</p>').insertBefore("#placeholder").fadeIn(1000);
					}
					else {
						$('<p>the door is locked.</p>').insertBefore("#placeholder").fadeIn(1000);
						//$("#area_outside").clone().insertBefore("#placeholder").fadeIn(1000);
						//beentoOutside = true;
						//currentroom = "outside";
					}
				else {
					$('<p>Your at a crossways of the kitchen and outside.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
						currentroom = "outside";
						beentoOutside = true;
						$("area_outside").clone().insertBefore("#placeholder").fadeIn(1000);
			}
			else if(input == "go east" && currentroom == "westhall"){
				if(beentoWesthall == true){
				$('<p>Your back where you started. To the west is the westhall and to the north is the north hall.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else{
				$('<p>You are in the westhall.</p>').insertBefore("#placeholder").fadeIn(1000);
			    }
			}	
			//go to the northall from the westhall
			else if (input == "go north" && currentroom == "westhall") {
				if (beentoWesthall == true || beentoWesthall == false) { //added if they went north first then its fine.
					$('<p>You are now in the north hall. To your east is a cluddered office. To your west is a stair case leading upstairs.</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "northhall";
				}
				else {
					$("#area_northhall").clone().insertBefore("#placeholder").fadeIn(1000);
					beentoNorthhall = true;
					currentroom = "northhall";
				}
			}
			//
			//go to office from north hall
			else if (input == "go east" && currentroom == "northhall") {
			if (beentoNorthhall == true) {
				if(bullets == false){
					bullets = 'Some bullets lay on the desk of the office.';
				}
				else{	
					bullets = "";
				}
				if(outdoor_key == false){
					outdoor_key = "A key with strange markings reading \"Outdoor key\" is on the wooden chair.";
				}
				else {
					outdoor_key = "";
				}
				if(note_three == false){
					note_three = 'There lies a torn up note, the heading reads\'Note three\', seems important.'
				}
				else{	
					note_three = "";
				}
				if(skill_one == false){
					skill_one = "A pill bottle labeled skill one is on the top of the filing cabinet."
				}
				else{	
					skill_one = "";
				}
				$('<p>You are in the office, it seems cluddered. Papers everywhere, blood on the typewriters keys and a faint scent you can\'t describe.'+ bullets + outdoor_key + note_three + skill_one +'</p>').insertBefore("#placeholder").fadeIn(1000);
					$("#area_office").clone().insertBefore("#placeholder").fadeIn(1000);
					beentoOffice = true;
					currentroom = "office";
				}
			}
			//go north to the upstairs from the office
			else if(input == "go north" && currenroom == "office"){
				if(beentoOffice == true){
					$('<p>You are back in the north hall. To your west is the east hall. To your north is the staircase.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				$("#area_northhall").clone().insertBefore("#placeholder").fadeIn(1000);
				currentroom = "northhall";
			}
			//go through exit
			/*else if (input == "go north" && currentroom == "exit") {
				if (exitunlocked == true) {
					$("#container").fadeOut(3000, function() {
						$("#wingame").fadeIn(3000);
					});
				}
				else {
					$('<p>The door is locked.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			*/
			//
			//go north to the upstairs
			else if (input == "go north" && currentroom == "westhall") {
				if(beentoOffice == true){
				$('<p>You are now upstairs. To your west is the guestroom, to the east is the master bedroom.</p>').insertBefore("#placeholder").fadeIn(1000);
				currentroom = "upstairs";
					}
				$("area_upstairs").clone().insertBefore("#placeholder").fadeIn(1000);
				currentroom = "upstairs";
				}
			/*********************************
			Finally this is the upstairs part.
			**********************************/
			//go west to the guestroom
			else if (input == "go west" && currentroom == "upstairs") {
			if (beentoOffice == true) {
				if(masterbedroom_key == true){
					masterbedroom_key = "A large circualar key with imprints on it. It reads:'Master bedroom key'";
				}
				else{	
					masterbedroom_key = "";
				}
				if (skill_two == true){
					skill_two = "A strange glow emmits from a glass jar. A label is written on it, reading: 'Skill two' drink with caution.";
				}
				else{	
					skill_two = "";
				}
				else {
					$("#area_guestroom").clone().insertBefore("#placeholder").fadeIn(1000);
					beentoGuestroom = true;
					currentroom = "guestroom";
					}
				}
			}
			//Go back out to the upstairs "hallway"
			else if(input == "go east" && currentroom == "guestroom"){
				if(beentoUpstairs == true){
					$('<p>You are back out in the upstairs. To your west is the guestroom and to your east is the master bedroom.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//go to east to the masterbedroom
			else if (input == "go east" && currentroom == "upstairs") {
				if (masterbedroom_key == true && beentoGuestroom == true){
					if (gun == true){
							gun = "A loaded gun, seems to be a 44. pistol. Made in the 1800's.";
					}
					else{	
							gun = "";
					}
					if (skill_three == true){
							skill_three = "A pill bottle, half empty. The name of it is 'Skill three', seems generic.";
					}
					else{
							skill_three = "";
					}
					if (cash == true){
							cash = "2 rolls of twenty dollars bills lie on the bed.";
					}
					else{	
							cash = "";
					}
					if(frontdoorKey == true){
						frontdoorKey = "The key to get out of this house! Go downstairs to the westhall to leave. The key has some imprints on it. It reads:'Well, you found the key. Good job. You have made it out of the house alive.";
					}
					else{
						frontdoorKey = "";
					}
					$('<p>You are in the master bedroom.</p>').insertBefore("#placeholder").fadeIn(1000);
					beentoMasterbedroom = true;
					currentroom = "masterbedroom";
					}
				}
			else if(input == "go west" && currentroom == "masterbedroom"){
				if (gun == false){
						gun = "The gun is still there.";
					}
				else{	
						gun = "";
					}
				if (skill_three == false){
						skill_three = "Skill three still lies there.";
					}
				else{
						skill_three = "";
					}
				if (cash == false){
						cash = "The roll of cash still lies there.";
					}
				else{
						cash = "";
					}
				if (frontdoorKey == false){
						frontdoorKey = "The frontdoor key is still there.";
					}
				else{
						frontdoorKey = "";
					}
				}
			//go back to the upstairs from the master bedroom
			else if (input == "go west" && currentroom == "masterbedroom"){
				if (beentoMasterbedroom == true){
					$('<p>You are now back in the upstairs. To your west is the guestroom, to your east is the master bedroom. To your north is the stairs to the westhall.The door is still locked, maybe you have a key?</p>').insertBefore("#placeholder").fadeIn(1000);
					}
					currentroom = "upstairs";
				}
			else if (input == "go north" && currentroom == "upstairs") {
				if(masterbedroom_key == true){
					$('<p>You are now downstairs on the north hall. The front door creaks.That is the only way out.</p>').insertBefore("#placeholder").fadeIn(1000);
						}
				currentroom = "northhall";
					}
			else $('<p>You can\'t go that way.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		//}
		//
		//end go
			else $('I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000);
		$("#console").scrollTop($("#console")[0].scrollHeight);
		$("#command_line").val("");
	});
});
