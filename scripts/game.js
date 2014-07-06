// JavaScript Document
//SETS ALL VARIABLES FOR THE GAME
test = ['this','is','a','array','test'];
//current room
currentroom = 'main frame';
//rooms
debugUser = 'Nicky';
errorSet = false;
//Idems
pistol = false;
shank = false;
phone = false;
Sniper = false;
Machinegun =false;
c4 = false;
bullets = false;
$(document).ready(function() {
	$("#compass").fadeIn(2000);
	$("#message_begin").fadeIn(3000);
	$("#area_main").fadeIn(3000);
	$("#command_line").fadeIn(2000);
	$("alpha").fadeIn(2000);
	$("form").submit(function() {
		var input = $("#command_line").val();
		//Dev what?
		 if(input.indexOf("dev") >-1){
			if(input == 'dev'){
			$("<p>Dev what? Be specific.</p>").insertBefore("#placeholder").fadeIn(1000);
		}
			}
	else if(input =="Hack James account" || input=="hack james account" || input=="hack james bank account"||input =="hack Sandra\'s bank account"||input =="hack kile\'s bank account"||input =="hack Robert\'s bank account"){			
			$( input + '<p>has:<br>10,000 dollars in their bank account.</p>').insertBefore("#placeholder").fadeIn(1000);		
		}
		else if(input == "Credits" || input =="credits"){
				$('<p><center>Mod editor:Nicky Laczko<br>Creative designer:Some Random Dude<br>Original creator: I forget his name.</center></p>').insertBefore("#placeholder").fadeIn(1000);
			console.log('credits have been requested.');
			}
		else if(input =="where am I?"||input=='Where am i?'|| input=='where am i?'||input=='where am i'){
			$('<p>' + currentroom + '</p>').insertBefore("#placeholder").fadeIn(1000);
		
			}
		else if(input == 'My username is JS dev'||input == 'js dev'|| input == 'my username is js dev'){
			$('<p>You are logged in as JavaScript dev.</p>').insertBefore("#placeholder").fadeIn(1000);
			console.log('dev has checked in. Please allow him to use the git code.');
			}
		else if(input =='git gud'){
			console.log('git gud has been requested. github.com/rivalnick/make repo for this code');
			$('<p>Please check inspect the element and check the console</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		else if(input == 'joke'|| input =='Joke'){
			$('<p>2 hippos walk into a bar and one says JOKE, THIS ISNT A JOKE GAME...</p>').insertBefore("#placeholder").fadeIn(1000);
			console.log('Joke has been requested. What were you excepting a joke? rood.');
			}
		else if(input == 'description' || input == 'desc'){
			$('<p>A text adventure game based around nothing at the moment.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		/*
		else(input == ''){
			$('<p>I do\'nt understand' + input + '.</p>').insertBefore("#placeholder").fadeIn(1000);
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
			/*
			//unloaded gun
			else if (input == "take gun") {
				if (currentroom == "closet" && gun == false) {
					gun = true;
					$('<p>You picked up a gun, but it has no ammo.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//Phone
			else if (input == "take phone" || input == "take cell phone") {
				if (currentroom == "closet" && phone == false) {
					Phone = true;
					$('<p>You picked up some a phone, the brand is smeared off.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//shank
			else if (input == "take shank") {
				if (currentroom == "office" && shank == false) {
					shank = true;
					$('<p>You picked up a shank.Looks old and rusted.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//doorKey
			else if (input == "take doorkey" || input == "take Master bedroom key") {
				if (currentroom == "guestroom" && doorKey == false) {
					doorKey = true;
					$('<p>You picked up a key. Now you can enter the master bedroom.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//note
			else if (input == "take note" || input == "read note") {
				if (currentroom == "closet" && note == false) {
					note = true;
					$('<p>You picked up a note. It reads:Welcome to my glorious mansion, It seems you have emerged from the slumber. Don\'t worry. Things will get more interesting as you go along, watch out, this house has been abanded for years.Who knows who lives here now. Good luck getting out.<br /><br />Sincerely,<br/>~ Anonymous<br /><br />P.S.Watch your back, or you\'ll loose your head.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//atticKey
			else if (input == "take attic key"|| input == "attickey") {
				if (currentroom == "upstairs" && atticKey == false) {
					atticKey = true;
					$('<p>You picked up the key to the attic.Maybe try upstairs.</p>').insertBefore("#placeholder").fadeIn(1000);
					if (currentroom == "upstairs" && atticKey == true) {
						$('<p>Look up there might be a door there.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		//outdoorKey
		else if(input =="take out door key"|| input =="take outdoor key") {
			if(currentroom == "westhallway" && outdoorKey == false){
				outdoorKey = true;
				$('<p>You picked up the key to outside. Something is engraved on it... But its too hard to read.</p>').insertBefore("#placeholder").fadeIn(1000);
				
			}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		
		//cookiepan
		/*
		else if(input == "take cookie pan"|| input == "take cookie sheet") {
			if(currentroom == 'kitchen' && cookiepan == false){
				cookiepan= true;
				$('<p>You picked up a cookie pan, looked indented with a head print, and looks stained with blood. But do\'nt worry, keep it with you.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		*
		//knife
		else if(input =="take knife"){
			if(currentroom =="kitchen" && knife == false){
				knife = true;
			$('<p>You picked up a knife, it\'s rusty but still workable.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		*
		//money 
		else if(input =="take money"||input =="grab money"){
			if(currentroom =="attic" && money == false){
			money = true;
				$('<p>you picked up some cash, going through it you looted 2,000 dollars.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		//
		//end take
		//
		
		
		
		
		
		//
		//search
		/*/
		else if (input.indexOf("search") > -1) {
			
			if (input == "search") {
				$('<p>Search what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		}
			/*
			//office
			else if (input == "search office desk") {
				if (currentroom == "office" && bullets == false && shank == false) {
					bullets = true;
					shank = true;
					searchdesk = true;
					$('<p>You found some bullets in the desk and a bloody shank, looks used.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//Masterbedroom
			else if (input == "search Masterbedroom"|| input="search master bedroom") {
				if (currentroom == "Masterbedroom") {
					doorKey = true;
					$('<p>You found a old wooden key in one of the shelves.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//guestroom
			else if (input == "search guest room"|| input =="search guestroom") {
				if (currentroom == "guestroom") {
				doorKey = true;
				atmhack= true;
					$('<p>you found a skill that might connect to the phone and the master bedroom key.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		//kitchen
			else if(input =="search kitchen"){
				if(currentroom == "kitchen") {
					chocolatechipCookies = true;
			$('<p>you found some chocolate chip cookies, yum!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
				
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		//hobo
		else if(input =="search hobo"|| input=="search dead hobo"){
			if(currentroom == "attic"){
				tvhack = true;
			$('<p>You found a tv hack, that lets you control the tv\'s in the house.</p>').insertBefore("#placeholder").fadeIn(1000);
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
				//gun
				if (pistol == true) {
					p = "Pistol<br />";
				}
				else {
					p = "";
				}
				//
				
				//shank
				if (shank == true) {
					sh = "Shank<br />";
				}
				else {
					sh = "";
				}
				//
				//phone
				if (phone == true) {
					ph = "Phone<br />";
				}
				else {
					ph = "";
				}
				//
				
				
				//Sniper
				if(Sniper == true){
					sn ="Sniper Rifle<br />";
				}
				else{
					sn="";
				}
				//Machinegun
				if(Machinegun == true){
					mg="Machine Gun<br />";
				}
				else{
					mg="";
				}
				//c4
				if(c4 == true){
					c ="C4<br />";
				}
				else{
					c ="";
				}
				//bullets
				if (bullets == true) {
					bl = "Bullets<br />";
				}
				else {
					bl = "";
				}
				//
				console.log("make the inventory bigger.");
				if (p == "" && sh == "" && ph == ""&& sn == "" && mg == "" && c =="" && bl =="") {	//Add to this inventory and make it bigger.
					$('<p>Inventory:<br /><i>There is nothing in your inventory</i></p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					 $('<p>Inventory:<br />'+ p + sh + ph + sn + mg + c + bl +'</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			else $('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000);
		}
		//
		//end inventory
		//
		else if(input == 'durp' || input =='durp dino'){
				$('<p>So now your a durp master, congrats! Now you have the power to:<br>Durp Doctor<br>Durp Dive</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		else if(input =='durp doctor'|| input == 'Durp Doctor' || input == 'durp Doctor' || input == 'Durp doctor'){
				$("<p>You have changed clothes and now are wearing a Dino costume with some scrubs on.</p>")
				}
		else if(input =='durp hacker'|| input =='Durp hacker'||input =='durp Hacker' || input == 'Durp Hacker'){
				$('<p>You have transformed into the durp hacker, congrats. User has been given 20 gold for finding bug in system.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
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
				else $('<p>You do\'nt have a attic key.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else $('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000);
			
		}
		//
		//end unlock
		//
		
		
		
		
		
		
		
		//
		//go
		//
		*/
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