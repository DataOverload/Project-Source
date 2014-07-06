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
beentoEasthall = false;
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
	//$("alpha").fadeIn(2000);
	$("form").submit(function() {
		var input = $("#command_line").val();
		//Dev what?
		 if(input.indexOf("dev") >-1){
			if(input == 'dev'){
			$("<p>Dev what? Be specific.</p>").insertBefore("#placeholder").fadeIn(1000);
		}
			}
		else if(input =="where am I?"||input=='Where am i?'|| input=='where am i?'||input=='where am i'){
			$('<p>' + currentroom + '</p>').insertBefore("#placeholder").fadeIn(1000);
		
			}
		/*
		else(input == ''){
			$('<p>I don\'t understand' + input + '.</p>').insertBefore("#placeholder").fadeIn(1000);
		}
	*/
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
			//
			//end of closet Idems
			/****************************************************************************/
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
			//
			
			//knife
			else if (input == "take knife") {
				if (currentroom == "kitchen" && knife == false) {
					currentroom = 'kitchen';
					knife = true;
					$('<p>You have picked up a knife, it seems used and has some stains on it.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//note 2
			else if (input == "take note two"|| input == "take note_two"|| input == "take note 2") {
				if (currentroom == "kitchen" && note_two == false) {
				currentroom = 'kitchen';
					note_two = true;
					$('<p>You picked up another note it reads:Well, you have found yet another note I have left around the house, well I\'ll keep this one short and sweet. I would watch your back, I think there is a man living up in the attic, but that\'s all the info I have at the moment.<br />From,<br /> Anon</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		/*********************************************************************/
									//Outside Idems
		
		/*********************************************************************/
							//Office Idems
		//outdoor_key
		else if(input =='take outdoor_key' || input =='take outdoor key' || input == 'take out door key' || input == 'take Outdoor key' || input == 'take outdoor Key' || input == 'take outDoor key'){
			if(currentroom == 'office' && outdoor_key == false){
			currentroom = 'office';
			outdoor_key = true;
				$('<p>You have picked up an outdoor key. Maybe it leads to I don\'t know outside?</p>').insertBefore("#placeholder").fadeIn(1000);
			}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
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
			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
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
			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		/**************************************************************
									//Guestroom 
						masterbedroom_key = false;
								skill_two = false;
		***************************************************************/
		//masterbedroom_key
		else if(input == 'take masterbedroom key'|| input == 'take master bedroom key' || input == 'take masterbed room key' || input == 'take master bed room key'){
			if(currentroom == 'guestroom' && masterbedroom_key == false){
					currentroom = 'guestroom';
					masterbedroom_key = true;
				$('<p>You picked up a masterbed room key, seems to lead to some room on the upstairs.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
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
			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		
		/****************************************************************
								//master bedroom
								gun = false;
							skill_three = false;
								cash = false;
		*****************************************************************/
		//gun 
		else if(input =='take gun'){
			if(currentroom == 'masterbedroom' && gun == false){
			currentroom = 'masterbedroom';
			gun = true;
				$('<p>You picked up a gun, the markings are smeared, but faint smell of death reminses.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		//skill 3
		else if(input == 'take skill3' || input == 'take skill three' || input == 'take skill 3' || input == 'take skillthree'){
			if(currentroom == 'masterbedroom' && skill_three == false){
				skill_three = true;
				currentroom = 'masterbedroom';
					$('<p>You picked up another skill, called skill 3 or formally known as a flashlight. But no skills are working at the moment.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		
		//cash
		else if(input == 'take cash' ||input == 'take money' || input == 'take dough' || input == 'take cash money' || input == 'take bank' || input == 'take dat cash'){
			if(currentroom == 'masterbedroom' && cash == false){
				cash = true;
				currentroom = 'masterbedroom';
				$('<p>Ypu picked up some cash, lets count it later.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		
			/********************************************************
				//attic
				skill_four = false;
			*********************************************************/
			else if(input == 'take skill_four' || input == 'take skill 4' || input == 'take skill four' || input == 'take skill4' || input == 'take skillfour'){
				if(currentroom == 'attic' && skill_four == false){
					skill_four = true;
					currentroom = 'attic';
				$('<p>You picked up another skill, but those are\'nt working at the moment.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		//end take
		//
		
		
		
		
		
		//
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
			//

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
			//

			else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
			//Masterbedroom
			else if (input == "search Masterbedroom"|| input="search master bedroom" || input == 'Search masterbedroom' || input == 'search Masterbedroom' || input == 'Search Masterbedroom' || input == 'Search Masterbed room') {
				if (currentroom == "Masterbedroom" && cash == false && gun == false) {
					currentroom = 'Masterbedroom';
					cash = true;
					gun =  true;
					skill_three = true;
					$('<p>You found some cash buried in the walls of the room,we can\'t count it now. You also found a gun and another skill, skill 3.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
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
			//

			else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		//bushes for outside
		else if(input =="search bushs"||input=="search bushes"){
		if(currentroom == "garden"){
			crowbar = true;
		$('<p>You found a crowbar,this can open all the doors in the building.</p>').insertBefore("#placeholder").fadeIn(1000);
		}
				
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		//
		//end search
		//
		
		
		
		*/
		
		//
		//kill
		//
		else if (input.indexOf("kill") > -1) {
			
			if (input == "kill") {
				$('<p>Kill what with what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			/*
			//shank self
			else if (input == "kill self with shank") {
				if (shank == true) {
					$("#container").fadeOut(3000, function() {
						$("#killself").fadeIn(3000);
					});
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			
			else if (input == "kill self with knife") {
				if (knife == true) {
					$("#container").fadeOut(3000, function() {
						$("#killself").fadeIn(3000);
					});
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			
			else if (input == "kill self with phone") {
				if (phone == true) {
					$("#container").fadeOut(3000, function() {
						$("#killself").fadeIn(3000);
					});
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//
			*/
			else $('<p>You can\'t do that!</p>').insertBefore("#placeholder").fadeIn(1000);
			
		
		}
		//
		//end kill
		//
		
		
		
		
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
				//
				
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
				else{
					kf="";
				}
				//note_two
				if(note_two == true){
					ntw="Note_two<br />";
				}
				else{
					ntw="";
				}
				//bullets
				if(bullets == true){
					b ="bullets<br />";
				}
				else{
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
				else{
					skt = "";
				}
				if (gun == true){
					g = "Gun<br />";
				}
				else{
					g = "";
				}
				if (skill_three == true){
					sktr = "Flashlight<br />";
				}
				else{
					sktr = "";
				}
				if (cash == true){
					c = "cash<br />";	
				}
				else{
					c = "";
				}
				if (skill_four == true){
					skf = "Attic Key<br />";
				}
				else{
					skf = "";
				}
				//
				if (p == "" && n == "" && cp == ""&& kf == "" && ntw == "" && b =="" && ok =="" && ntt =="" && sko == "" && mbk == "" && skt == "" && g == "" && sktr == "" && c =="" && skf == "") {	//Add to this inventory and make it bigger.
					$('<p>Inventory:<br /><i>There is nothing in your inventory</i></p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					 $('<p>Inventory:<br />' + p + n + cp + kf + ntw + b + ok + ntt + sko + mbk + skt + g + sktr + c + skf +'</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			else $('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000);
		}
		//
		//end inventory
		//
		//
		//unlock
		//
		
		else if (input.indexOf("unlock") > -1) {
			if (input == "unlock" || input == "unlock door" || input == "unlock outside door" || input == "unlock outside") {
				$('<p>Unlock door with what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
				}
			/*
			//outside
			else if (input == "unlock outside with outdoorKey" || input == "unlock outside door with outdoorkey" || input == "unlock outdoor with out door key" || input == "unlock outdoor with outdoor key") {
				if (currentroom != "westhall") {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (outdoor == true) {
					$('<p>The door is already unlocked.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "westhall" && outdoorKey == true) {
					cellunlocked = true;
					$('<p>You unlocked the door to the outside successfully. You can now explore the bushes around you.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>The door cannot be unlocked.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//leave outside
			else if (input == "leave outside"|| input=="go inside"|| input == "go back inside") {
				if (currentroom != "outside") {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (gobackWestHall == true) {
					$('<p>You are back in the westhall</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "westhall" && outdoor == false) {
					//exitunlocked = true;
					$('<p>You are in the west hall.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>You are outside still.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			else $('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000);
			
		}
		//unlock attic
		else if(input =="unlock master bedroom" || input == "unlock masterbed room" || input =="unlock masterbed room door")
			if(currentroom !="upstairs"){
				$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			else if (currentroom =="upstairs" && doorKey == true){
				$('<p>You are now in the master bed room</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>You do\'nt have a door key.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else $('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000);
			
		}
		//unlock attic
		else if(input =="unlock attic" || input =="open attic" ||input =="open attic door" ||input =="unlock attic door"){
			if(currentroom !="upstairs"){
				$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			else if(currentroom =="upstairs" && atticKey = true){
				$('<p> You are now in the attic.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>You don\'t have a attic key.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else $('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000);
			
		}
		//
		//end unlock
		//

		*/	
		else if(input.indexOf("use") >-1){
			if(input == "use"){
			$('<p>use what? Be descriptive</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		}
		//
		//go
		//
		else if (input.indexOf("hack") > -1) {
			if (input == "hack") {
				$('<p>hack what? Be descriptive.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		}
			/*
			//go from closet to east hallway
			else if (input == "go east" && currentroom == "closet") {
				if (doorUnlocked == true) {
					if (beentohallway == true) {
						if (note == false) {
							hallnote = " The note is still here. ";
						}
						else {
							hallnote = "";
						}
						if (phone == false) {
							hallphone = " The bright screen of the phone lights up the hallway. ";
						}
						else {
							hallphone = "";
						}
						$('<p>You are back in the hallway. The hallway continues to the north and west. The office is to the north. ' + hallnote + hallphone + '</p>').insertBefore("#placeholder").fadeIn(1000);
						currentroom = "hallway";
					}
					else {
						$("#area_hallway").clone().insertBefore("#placeholder").fadeIn(1000);
						currentroom = "hallway";
						beentohallway = true;
					}
				}
				else {
					$('<p>The door is locked.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}		
			//
			
			
			//go to torture room from hallway
			else if (input == "go east" && currentroom == "hallway") {
				if (torch == true) {
					if (beentorture == true) {
						if (searchtable == false) {
							torturetable = "The table seems to emit a strange energy. ";
						}
						else {
							torturetable = "";
						}
						if (whip == false) {
							torturewhip = "The whip remains stationed on the wall. ";
						}
						else {
							torturewhip = "";
						}
						$('<p>You are back in the room of strange devices. To the south is a doorway, and to the west is the hallway you came from. ' + torturetable + torturewhip + '</p>').insertBefore("#placeholder").fadeIn(1000);
						currentroom = "torture";
					}
					else {
						$("#area_torture").clone().insertBefore("#placeholder").fadeIn(1000);
						beentorture = true;
						currentroom = "torture";
					}
				}
				else {
					$('<p>It seems awful dark that way...</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//
			
			//go to westhall from hallway
			else if (input == "go west" && currentroom == "hallway") {
				if (torch == true) {
					if (beentowesthall == true) {
						$('<p>You are back at the west hallway. To the east is where you came from. To the north and south are dark rooms.</p>').insertBefore("#placeholder").fadeIn(1000);
						currentroom = "westhall";
					}
					else {
						$("#area_westhall").clone().insertBefore("#placeholder").fadeIn(1000);
						beentowesthall = true;
						currentroom = "westhall";
					}
				}
				else {
					$('<p>It seems awful dark that way...</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//
			
			//go to exit from westhallway
			else if (input == "go north" && currentroom == "westhall") {
				if (beentoexit == true) {
					$('<p>You are back at the room with the strange door. To the south is the hallway you came from.</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "exit";
				}
				else {
					$("#area_exit").clone().insertBefore("#placeholder").fadeIn(1000);
					beentoexit = true;
					currentroom = "exit";
				}
			}
			//
			
			//go to westhallway from exit
			else if (input == "go south" && currentroom == "exit") {
				if (beentowesthall == true) {
					$('<p>You are back at the west hallway. To the north and south are dark rooms. The hallway continues east.</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "westhall";
				}
				else {
					$("#area_westhall").clone().insertBefore("#placeholder").fadeIn(1000);
					beentowesthall = true;
					currentroom = "westhall";
				}
			}
			//
			
			//go through exit
			else if (input == "go north" && currentroom == "exit") {
				if (exitunlocked == true) {
					$("#container").fadeOut(3000, function() {
						$("#wingame").fadeIn(3000);
					});
				}
				else {
					$('<p>The door is locked.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//
			
			
			//go back to hallway from west hall
			else if (input == "go east" && currentroom == "westhall") {
				if (note == false) {
					hallnote = " The note is still here. ";
				}
				else {
					hallnote = "";
				}
				if (torch == false) {
					halltorch = " The torch continues to light the dim hallway. ";
				}
				else {
					halltorch = "";
				}
				$('<p>You are back in the main hallway. The hallway continues to the east and west. The jail room is to the south.' + hallnote + halltorch + '</p>').insertBefore("#placeholder").fadeIn(1000);
				currentroom = "hallway";
			}
			//
			
			//go to bonus room from westhall
			else if (input == "go south" && currentroom == "westhall") {
				if (beentobonus == true) {
					if (powder == false) {
						bonuscrate = "The lone crate in the corner looks untouched.";
					}
					else {
						bonuscrate = "";
					}
					$('<p>You are back in the small storage room. You came from the north. ' + bonuscrate + '</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "bonus";
				}
				else {
					$("#area_bonus").clone().insertBefore("#placeholder").fadeIn(1000);
					beentobonus = true;
					currentroom = "bonus";
				}
			}
			//
			
			//go to westhall from bonus room
			else if (input == "go north" && currentroom == "bonus") {
					$('<p>You are back in the hallway. To the north and south are dark rooms. The hallway continues east.</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "westhall";
			}
			//
			
			//go back to hallway from torture room
			else if (input == "go west" && currentroom == "torture") {
				if (note == false) {
					hallnote = " The note is still here. ";
				}
				else {
					hallnote = "";
				}
				if (torch == false) {
					halltorch = " The torch continues to light the dim hallway. ";
				}
				else {
					halltorch = "";
				}
				$('<p>You are back in the main hallway. The hallway continues to the east and west. The jail room is to the south.' + hallnote + halltorch + '</p>').insertBefore("#placeholder").fadeIn(1000);
				currentroom = "hallway";
			}
			//
			
			
			//go to morgue from torture room
			else if (input == "go south" && currentroom == "torture") {
				if (beenmorgue == true) {
					if (zombiedead == false) {
						morguezombie = "The zombie is still here!";
					}
					else {
						morguezombie = "The zombie remains on the floor rotting in a cesspool of it's juices.";
					}
					$('<p>You are back in the morgue. To the north is the doorway to the room of strange devices. ' + morguezombie + '</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "morgue";
				}
				else {
					$("#area_morgue").clone().insertBefore("#placeholder").fadeIn(1000);
					beenmorgue = true;
					currentroom = "morgue";
				}
			}
			//
			
			//go to torture room from morgue
			else if (input == "go north" && currentroom == "morgue") {
				if (searchtable == false) {
					torturetable = "The table seems to emit a strange energy. ";
				}
				else {
					torturetable = "";
				}
				if (whip == false) {
					torturewhip = "The whip remains stationed on the wall. ";
				}
				else {
					torturewhip = "";
				}
				$('<p>You are back in the room of strange devices. To the south is a doorway, and to the west is the hallway. ' + torturetable + torturewhip + '</p>').insertBefore("#placeholder").fadeIn(1000);
				currentroom = "torture";
			}
			//
			
			
			*/
			//else $('<p>You can\'t go that way.</p>').insertBefore("#placeholder").fadeIn(1000);
		//}
		//
		//end go
				
		$("#console").scrollTop($("#console")[0].scrollHeight);
		$("#command_line").val("");
	});
});
