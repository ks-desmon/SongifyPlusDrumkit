			var songs = [										 //variables song array hai of objects ka  
		{
        'name': 'Badri Ki Dulhania (Title Track)',				
        'artist': 'Neha Kakkar, Monali Thakur',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
	   'image':'song1.jpg'
		},
		{
        'name': 'Humma Song',
        'artist': ' Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
		'image':'song2.jpg'
		},
		{
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
		'image':'song3.jpg'
		},
		{
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
		'image':'song4.jpg'
		}] 
		function addSongNameClickEvent(songObj,position)				//var fileName = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3']; 					
		{
			var songName = songObj.fileName; // New Variable
			var id="#song"+position										// ek var id create krega for selected song
			$(id).click(function() {									// jb us id pe click hoga tb
			var audio = document.querySelector('audio');				//audio select hogi
			var currentSong = audio.src;								// usse ek variable current song me dalege and check krege ki kya wo 
			if(currentSong.search(songName) != -1)						// ussi song name ki hai jo abhi play ho rha hai ya nhi 
			{
			toggleSong();												//agr nhi hai to toggle funn chla do
			}
			else {
			audio.src = songName;										//wrna nya audio source song name me daalo and play lr do
			toggleSong();
			changeCurrentSongDetails(songObj);							// or uski detail bhi change ke do
			}
			});
		}
		function changeCurrentSongDetails(songObj) 
		{
			$('.current-song-image').attr('src','img/' + songObj.image)		//adding song source
			$('.current-song-name').text(songObj.name)						//adding song name 
			$('.current-song-album').text(songObj.album)					//adding album name
		}
																			/* for (var i = 0; i < fileName.length ; i++) 
																			{
																				addSongNameClickEvent(fileName[i],i+1)
																			}  */	
																			/* $('#song1').click(function() {
																					var audio = document.querySelector('audio');
																					audio.src = fileNames[0];
																					audio.play();
																					//toggleSong();
																					var currentSong = audio.src;
																					if(currentSong.search(fileNames[0]) != -1)
																						{
																							console.log('If statement executing');
																							toggleSong();
																						}
																						else
																						{
																							console.log('else statement executing');
																							audio.src = fileNames[0];
																							toggleSong();
																						}
																				});
																				$('#song2').click(function() {
																					var audio = document.querySelector('audio');
																					audio.src = fileNames[1];
																					audio.play();
																					toggleSong();
																					if(audio.src == fileNames[1])

																						var currentSong = audio.src;
																					if(currentSong.search(fileNames[1]) != -1)	
																						{
																						toggleSong();
																						}
																						else {
																						audio.src = fileNames[1];
																						toggleSong();
																						}
																				});																			
																				$('#song3').click(function() {
																					var audio = document.querySelector('audio');
																					audio.src = fileNames[2];
																					audio.play();
																					toggleSong();
																					if(audio.src == fileNames[2])
																					var currentSong = audio.src;
																					if(currentSong.search(fileNames[2]) != -1)	
																						{
																							toggleSong();
																						}
																						else {
																							audio.src = fileNames[2];
																							toggleSong();
																						}

																				});
																				
																				$('#song4').click(function() {
																					var audio = document.querySelector('audio');
																					audio.src = fileNames[3];
																					audio.play();
																					toggleSong();
																					if(audio.src == fileNames[3])
																					var currentSong = audio.src;
																					if(currentSong.search(fileNames[3]) != -1)	
																						{
																							toggleSong();
																						}
																						else {
																							audio.src = fileNames[3];
																							toggleSong();
																						}
																				});
																				
																			 */	
		function fancyTimeFormat(time)										//time duration ko : me show krne ke liye 
		{																	// Hours, minutes and seconds
		var hrs = ~~(time / 3600);
		var mins = ~~((time % 3600) / 60);
		var secs = time % 60;												// Output like "1:01" or "4:03:59" or "123:03:59"
		var ret = "";
		if (hrs > 0) 
			{
				ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
			}
		ret += "" + mins + ":" + (secs < 10 ? "0" : "");
		ret += "" + secs;
		return ret;
		}
		function updateCurrentTime()									//song ki duration ka time update krta hai  
		{
			var song = document.querySelector('audio');					// song select kiya 
			var currentTime = Math.floor(song.currentTime);				//currentTime se song ka time kiya usse var me daLA 
			currentTime = fancyTimeFormat(currentTime);					// formate change kiya 
			var duration = Math.floor(song.duration);					//ye song ki duration leta hai 
			duration = fancyTimeFormat(duration)
			$('.time-elapsed').text(currentTime);						//dono ko add kra diya 
			$('.song-duration').text(duration);					
		}
																		/* var songName1 = 'Badri Ki Dulhania (Title Track)';
																		var songName2 = 'Humma Song';
																		var songName3 = 'Nashe Si Chadh Gayi';
																		var songName4 = 'The Breakup Song'; 
																		var songList = ['Badri Ki Dulhania (Title Track)','Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song']; 
																		var artistList = ['Neha Kakkar',' Monali Thakur',' Ikka Singh', 'Dev Negi'];
																		var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
																		var durationList = ['2:56','3:15','2:34','2:29']; 
																		 */
	

		window.onload = function() {									// ye funn window ke load hone pr khud chlta hai 
			changeCurrentSongDetails(songs[0]);
																		/* for(var i=0;i<=songList.length;i++){
																			var name= "#song"+ (i+1);
																			var song=$(name);
																		song.find('.song-name').text(songList[i]); 
																		song.find('.song-artist').text(artistList[i]);
																		song.find('.song-album').text(albumList[i]); // Added
																		song.find('.song-length').text(durationList[i]); 
																		} */
			 for(var i =0; i < songs.length;i++) 						//	har song ko travel krne ke kiya for loop
			{
				var obj = songs[i];
				var name = '#song' + (i+1);
				var song = $(name);
				song.find('.song-name').text(obj.name);						// har song ki info add ki
				song.find('.song-artist').text(obj.artist);
				song.find('.song-album').text(obj.album);
				song.find('.song-length').text(obj.duration);
				addSongNameClickEvent(obj,i+1);								
			}	 	
																	/*$('#song1 .song-artist').text(artistList[0]);
																	$('#song2 .song-artist').text(artistList[1]);
																	$('#song3 .song-artist').text(artistList[2]);
																	$('#song4 .song-artist').text(artistList[3]); */
			updateCurrentTime();									// ye current time update krta HAI 
			//$('#songs').DataTable();
			$('#songs').DataTable({paging: false});					//data tables me songs ko load kraya 
			setInterval(function() {								//har interval pr ye time update krta hai 
			updateCurrentTime();
			},1000);
			}
		function toggleSong() 
		{
			var song = document.querySelector('audio');				// song select kiya 
			if(song.paused == true) {								//pause hai to 
			//console.log('Playing');					
			$('.play-icon').removeClass('fa-play').addClass('fa-pause');	// icon change hiya by assind and removing class
			song.play();											// play kiya 
			}
			else {													// other wise 
			//console.log('Pausing');
			$('.play-icon').removeClass('fa-pause').addClass('fa-play');
			song.pause();											// play ko pause kr diya 	
			}
		}
		$('.welcome-screen button').on('click', function() {
			var name = $('#name-input').val();									
			if (name.length > 2) {									//	agar input text ki lingth do se jyada huui 
				var message = "Welcome, " + name;
				$('.audio').attr('src','song1.mp3');
				$('.main .user-name').text(message);						
				$('.welcome-screen').addClass('hidden');			// welcome class hide ho jayegi
				$('.main').removeClass('hidden');					// and main se hide class remove ho jayegi
				setTimeout(function() {								//har interval pr ye time update krta hai
			$('.main .user-name').addClass('swing');
			},3000);
			} else {
				$('#name-input').addClass('error');
			}
		});
		$('.play-icon').on('click', function() 
		{
			toggleSong();
			
		});
		$('body').on('keypress', function(event)
		{
			var target = event.target;
			if (event.keyCode == 32  && target.tagName !='INPUT')
				{
				toggleSong();
				
				setTimeout(function(){ $('.main .username').addClass('swing');}, 3000);
																	//setTimeout(function(){ $('.key9').removeClass('playing');}, 100);
				}
		});
		var currentSongNumber = 1;
		var willLoop = 0;
		var willShuffle = 0; 										// will use this soon
		$('.fa-repeat').on('click',function() 
		{
			$('.fa-repeat').toggleClass('disabled')
			willLoop = 1 - willLoop;
		});
		$('.fa-random').on('click',function()
		{
			$('.fa-random').toggleClass('disabled')
			willShuffle = 1 - willShuffle;
		});
																		/* 		
																				function timeJump() {
																					var song = document.querySelector('audio')
																					song.currentTime = song.duration - 2;													// this is use to skip the duration of the song
																				}
																		 */		
	$('audio').on('ended',function() 
	{
		var audio = document.querySelector('audio');
		if (willShuffle == 1) 
		{
			var nextSongNumber = randomExcluded(1,4,currentSongNumber); 		// Calling our function from Stackoverflow
			var nextSongObj = songs[nextSongNumber-1];
			audio.src = nextSongObj.fileName;
			toggleSong();
			changeCurrentSongDetails(nextSongObj);
			currentSongNumber = nextSongNumber;
		}
		else if(currentSongNumber < 4) 
		{
			var nextSongObj = songs[currentSongNumber];
			audio.src = nextSongObj.fileName;
			toggleSong();
			changeCurrentSongDetails(nextSongObj);
			currentSongNumber = currentSongNumber + 1;
		}
		else if(willLoop == 1) 
		{
			var nextSongObj = songs[0];
			audio.src = nextSongObj.fileName;
			toggleSong();
			changeCurrentSongDetails(nextSongObj);
			currentSongNumber =  1;
		}
		else 
		{
			$('.play-icon').removeClass('fa-pause').addClass('fa-play');
			audio.currentTime = 0;
		}
	})