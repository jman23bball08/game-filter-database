console.log("testing")


const games = [
    {
      title: 'Scavenger Hunt',
      duration: 'Short',
      minPlayers: 1,
      idealPlayers: 10,
      maxPlayers: 999,
      playerDynamic: '1 vs. Game',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Exploration / adventure',
      cd1: 'Observation / Deduction',
      cd2: 'Applied Knowledge',
      instinct: 'Feel',
      intent: 'Why'
    },
    {
      title: 'Codenames',
      duration: 'Medium',
      minPlayers: 2,
      idealPlayers: 6,
      maxPlayers: 12,
      playerDynamic: 'Many vs. Many',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Medium',
      physical: true,
      digital: true,
      genre: 'Party',
      cd1: 'Communication',
      cd2: 'Observation / Deduction',
      instinct: 'Think',
      intent: 'What'
    },
    {
      title: 'Fishbowl',
      duration: 'Medium',
      minPlayers: 4,
      idealPlayers: 8,
      maxPlayers: 16,
      playerDynamic: 'Many vs. Many',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Party',
      cd1: 'Communication',
      cd2: 'Adaptability',
      instinct: 'Feel',
      intent: 'How'
    },
    {
      title: 'Visionary',
      duration: 'Short',
      minPlayers: 2,
      idealPlayers: 4,
      maxPlayers: 6,
      playerDynamic: 'Many vs. Game',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Party',
      cd1: 'Communication',
      cd2: 'Creativity',
      instinct: 'Act',
      intent: 'How'
    },
    {
      title: 'Minute 2 Win It',
      duration: 'Short',
      minPlayers: 1,
      idealPlayers: 6,
      maxPlayers: 12,
      playerDynamic: '1 vs. Game',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Dexterity',
      cd1: 'Dexterity',
      cd2: 'Speed',
      instinct: 'Act',
      intent: 'What'
    },
    {
      title: 'The Mind',
      duration: 'Medium',
      minPlayers: 3,
      idealPlayers: 5,
      maxPlayers: 8,
      playerDynamic: 'Many vs. Game',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Easy',
      physical: true,
      digital: false,
      genre: 'Cooperative',
      cd1: 'Communication',
      cd2: 'Observation / Deduction',
      instinct: 'Think',
      intent: 'How'
    },
    {
      title: 'PPT Karaoke',
      duration: 'Medium',
      minPlayers: 2,
      idealPlayers: 8,
      maxPlayers: 16,
      playerDynamic: '1 vs. Many',
      playCmplx: 'Medium',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Medium',
      physical: true,
      digital: true,
      genre: 'Presentation',
      cd1: 'Adaptability',
      cd2: 'Applied Knowledge',
      instinct: 'Act',
      intent: 'Why'
    },
    {
      title: 'Flight Plan',
      duration: 'Medium',
      minPlayers: 3,
      idealPlayers: 5,
      maxPlayers: 6,
      playerDynamic: 'Many vs. Game',
      playCmplx: 'Medium',
      facilitateCmplx: 'Medium',
      customizeCmplx: 'Hard',
      physical: true,
      digital: true,
      genre: 'Challenge / simulation',
      cd1: 'Critical thinking',
      cd2: 'Observation / Deduction',
      instinct: 'Think',
      intent: 'How'
    },
    {
      title: "Where's the Fire",
      duration: 'Medium',
      minPlayers: 2,
      idealPlayers: 5,
      maxPlayers: 8,
      playerDynamic: 'Many vs. Game',
      playCmplx: 'Medium',
      facilitateCmplx: 'Medium',
      customizeCmplx: 'Medium',
      physical: true,
      digital: false,
      genre: 'Cooperative',
      cd1: 'Communication',
      cd2: 'Observation / Deduction',
      instinct: 'Act',
      intent: 'How'
    },
    {
      title: 'Blurbs & Curbs',
      duration: 'Medium',
      minPlayers: 6,
      idealPlayers: 20,
      maxPlayers: 40,
      playerDynamic: 'Many vs. Many',
      playCmplx: 'Medium',
      facilitateCmplx: 'Hard',
      customizeCmplx: 'Hard',
      physical: true,
      digital: true,
      genre: 'Cooperative',
      cd1: 'Roleplaying',
      cd2: 'Observation / Deduction',
      instinct: 'Feel',
      intent: 'What'
    },
    {
      title: 'Chickens & Blobfish',
      duration: 'Short',
      minPlayers: 6,
      idealPlayers: 20,
      maxPlayers: 40,
      playerDynamic: 'Many vs. Game',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Easy',
      physical: true,
      digital: false,
      genre: 'Cooperative',
      cd1: 'Communication',
      cd2: 'Observation / Deduction',
      instinct: 'Act',
      intent: 'How'
    },
    {
      title: 'Escape Rooms',
      duration: 'Long',
      minPlayers: 2,
      idealPlayers: 4,
      maxPlayers: 6,
      playerDynamic: 'Many vs. Game',
      playCmplx: 'Medium',
      facilitateCmplx: 'Hard',
      customizeCmplx: 'Hard',
      physical: true,
      digital: true,
      genre: 'Cooperative',
      cd1: 'Observation / Deduction',
      cd2: 'Critical thinking',
      instinct: 'Think',
      intent: 'How'
    },
    {
      title: 'Chameleon',
      duration: 'Short',
      minPlayers: 3,
      idealPlayers: 5,
      maxPlayers: 8,
      playerDynamic: '1 vs. 1',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Party',
      cd1: 'Communication',
      cd2: 'Betting / Bluffing',
      instinct: 'Feel',
      intent: 'How'
    },
    {
      title: 'Taskmaster',
      duration: 'Medium',
      minPlayers: 3,
      idealPlayers: 5,
      maxPlayers: 8,
      playerDynamic: 'Flex',
      playCmplx: 'Easy',
      facilitateCmplx: 'Medium',
      customizeCmplx: 'Medium',
      physical: true,
      digital: false,
      genre: 'Challenge / simulation',
      cd1: 'Critical thinking',
      cd2: 'Dexterity',
      instinct: 'Act',
      intent: 'How'
    },
    {
      title: 'Wits and Wagers',
      duration: 'Medium',
      minPlayers: 3,
      idealPlayers: 6,
      maxPlayers: 10,
      playerDynamic: '1 vs. 1',
      playCmplx: 'Easy',
      facilitateCmplx: 'Medium',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Trivia',
      cd1: 'Applied Knowledge',
      cd2: 'Betting / Bluffing',
      instinct: 'Think',
      intent: 'What'
    },
    {
      title: 'Telestrations // Gartic Phone',
      duration: 'Short',
      minPlayers: 3,
      idealPlayers: 8,
      maxPlayers: 12,
      playerDynamic: 'Many vs. Game',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Party',
      cd1: 'Communication',
      cd2: 'Creativity',
      instinct: 'Feel',
      intent: 'Why'
    },
    {
      title: 'The Crew',
      duration: 'Medium',
      minPlayers: 3,
      idealPlayers: 4,
      maxPlayers: 5,
      playerDynamic: 'Many vs. Game',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Hard',
      physical: true,
      digital: true,
      genre: 'Cooperative',
      cd1: 'Critical thinking',
      cd2: 'Strategy development',
      instinct: 'Act',
      intent: 'How'
    },
    {
      title: 'Dictionary',
      duration: 'Short',
      minPlayers: 3,
      idealPlayers: 6,
      maxPlayers: 10,
      playerDynamic: '1 vs. 1',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Party',
      cd1: 'Communication',
      cd2: 'Betting / Bluffing',
      instinct: 'Feel',
      intent: 'How'
    },
    {
      title: 'Scattergories',
      duration: 'Short',
      minPlayers: 2,
      idealPlayers: 6,
      maxPlayers: 12,
      playerDynamic: '1 vs. 1',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Word',
      cd1: 'Applied Knowledge',
      cd2: 'Speed',
      instinct: 'Think',
      intent: 'Why'
    },
    {
      title: 'Mad Lib Scene',
      duration: 'Long',
      minPlayers: 4,
      idealPlayers: 8,
      maxPlayers: 12,
      playerDynamic: 'Flex',
      playCmplx: 'Easy',
      facilitateCmplx: 'Medium',
      customizeCmplx: 'Medium',
      physical: true,
      digital: true,
      genre: 'Presentation',
      cd1: 'Creativity',
      cd2: 'Interpersonal / Social',
      instinct: 'Think',
      intent: 'How'
    },
    {
      title: 'The Barter Puzzle',
      duration: 'Medium',
      minPlayers: 4,
      idealPlayers: 6,
      maxPlayers: 8,
      playerDynamic: 'Many vs. Many',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Medium',
      physical: true,
      digital: false,
      genre: 'Negotiation / trading',
      cd1: 'Interpersonal / Social',
      cd2: 'Speed',
      instinct: 'Act',
      intent: 'How'
    },
    {
      title: 'Watch Where You Step // Minefield',
      duration: 'Medium',
      minPlayers: 2,
      idealPlayers: 4,
      maxPlayers: 8,
      playerDynamic: 'Many vs. Game',
      playCmplx: 'Easy',
      facilitateCmplx: 'Medium',
      customizeCmplx: 'Medium',
      physical: true,
      digital: false,
      genre: 'Exploration / adventure',
      cd1: 'Communication',
      cd2: 'Observation / Deduction',
      instinct: 'Act',
      intent: 'How'
    },
    {
      title: 'Company Concentration',
      duration: 'Short',
      minPlayers: 2,
      idealPlayers: 4,
      maxPlayers: 6,
      playerDynamic: 'Many vs. Game',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Medium',
      physical: true,
      digital: true,
      genre: 'Memory',
      cd1: 'Memory',
      cd2: 'Strategy development',
      instinct: 'Think',
      intent: 'How'
    },
    {
      title: 'Spaghetti Tower',
      duration: 'Medium',
      minPlayers: 2,
      idealPlayers: 6,
      maxPlayers: 10,
      playerDynamic: 'Many vs. Many',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Medium',
      physical: true,
      digital: false,
      genre: 'Presentation',
      cd1: 'Construction',
      cd2: 'Risk Taking',
      instinct: 'Think',
      intent: 'What'
    },
    {
      title: 'Sneak a Peek',
      duration: 'Medium',
      minPlayers: 4,
      idealPlayers: 6,
      maxPlayers: 12,
      playerDynamic: 'Many vs. Game',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Medium',
      physical: true,
      digital: true,
      genre: 'Challenge / simulation',
      cd1: 'Construction',
      cd2: 'Memory',
      instinct: 'Act',
      intent: 'Why'
    },
    {
      title: 'Photo Contest',
      duration: 'Async',
      minPlayers: 4,
      idealPlayers: NaN,
      maxPlayers: 40,
      playerDynamic: '1 vs. 1',
      playCmplx: 'Medium',
      facilitateCmplx: 'Medium',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Presentation',
      cd1: 'Observation / Deduction',
      cd2: 'Creativity',
      instinct: 'Feel',
      intent: 'Why'
    },
    {
      title: 'Gift Giving Challenge',
      duration: 'Async',
      minPlayers: 4,
      idealPlayers: 10,
      maxPlayers: 20,
      playerDynamic: '1 vs. 1',
      playCmplx: 'Easy',
      facilitateCmplx: 'Medium',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Presentation',
      cd1: 'Observation / Deduction',
      cd2: 'Interpersonal / Social',
      instinct: 'Feel',
      intent: 'Why'
    },
    {
      title: 'Geoguessr // What is this',
      duration: 'Short',
      minPlayers: 2,
      idealPlayers: 6,
      maxPlayers: 12,
      playerDynamic: 'Flex',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Deduction',
      cd1: 'Applied Knowledge',
      cd2: 'Observation / Deduction',
      instinct: 'Think',
      intent: 'What'
    },
    {
      title: 'A to Z',
      duration: 'Short',
      minPlayers: 2,
      idealPlayers: 4,
      maxPlayers: 6,
      playerDynamic: '1 vs. 1',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Word',
      cd1: 'Applied Knowledge',
      cd2: 'Speed',
      instinct: 'Act',
      intent: 'Why'
    },
    {
      title: 'Trivia // Quizbowl',
      duration: 'Medium',
      minPlayers: 4,
      idealPlayers: 8,
      maxPlayers: 16,
      playerDynamic: 'Flex',
      playCmplx: 'Easy',
      facilitateCmplx: 'Medium',
      customizeCmplx: 'Medium',
      physical: true,
      digital: true,
      genre: 'Trivia',
      cd1: 'Applied Knowledge',
      cd2: 'Critical thinking',
      instinct: 'Think',
      intent: 'What'
    },
    {
      title: 'Battle of the Spies',
      duration: 'Medium',
      minPlayers: 4,
      idealPlayers: 8,
      maxPlayers: 12,
      playerDynamic: 'Many vs. Many',
      playCmplx: 'Easy',
      facilitateCmplx: 'Medium',
      customizeCmplx: 'Medium',
      physical: true,
      digital: true,
      genre: 'Strategy',
      cd1: 'Critical thinking',
      cd2: 'Strategy development',
      instinct: 'Think',
      intent: 'What'
    },
    {
      title: 'Family Feud',
      duration: 'Medium',
      minPlayers: 4,
      idealPlayers: 6,
      maxPlayers: 10,
      playerDynamic: 'Many vs. Many',
      playCmplx: 'Easy',
      facilitateCmplx: 'Medium',
      customizeCmplx: 'Medium',
      physical: true,
      digital: true,
      genre: 'Trivia',
      cd1: 'Applied Knowledge',
      cd2: 'Observation / Deduction',
      instinct: 'Feel',
      intent: 'What'
    },
    {
      title: 'Apples to Apples // Cards Vs Humanity',
      duration: 'Medium',
      minPlayers: 4,
      idealPlayers: 6,
      maxPlayers: 8,
      playerDynamic: '1 vs. 1',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Medium',
      physical: true,
      digital: false,
      genre: 'Party',
      cd1: 'Interpersonal / Social',
      cd2: 'Adaptability',
      instinct: 'Feel',
      intent: 'What'
    },
    {
      title: 'Taboo',
      duration: 'Short',
      minPlayers: 4,
      idealPlayers: 6,
      maxPlayers: 12,
      playerDynamic: 'Many vs. Many',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Party',
      cd1: 'Communication',
      cd2: 'Adaptability',
      instinct: 'Act',
      intent: 'What'
    },
    {
      title: 'Pictionary ',
      duration: 'Short',
      minPlayers: 4,
      idealPlayers: 6,
      maxPlayers: 8,
      playerDynamic: 'Many vs. Many',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Party',
      cd1: 'Communication',
      cd2: 'Creativity',
      instinct: 'Think',
      intent: 'How'
    },
    {
      title: 'Listography',
      duration: 'Short',
      minPlayers: 3,
      idealPlayers: 6,
      maxPlayers: 10,
      playerDynamic: '1 vs. 1',
      playCmplx: 'Easy',
      facilitateCmplx: 'Easy',
      customizeCmplx: 'Easy',
      physical: true,
      digital: true,
      genre: 'Party',
      cd1: 'Applied Knowledge',
      cd2: 'Creativity',
      instinct: 'Think',
      intent: 'Why'
    }
]
  
  

// function filterGames(durationFilter, dynamicFilter, minPlayers, maxPlayers) {
//     return games.filter(game => {
//         // Check if the game's duration matches any selected duration filters
//         //console.log(game.duration)
//         const durationMatch = durationFilter.length === 0 || durationFilter.includes(game.duration);
//         // Check if the game's dynamic matches any selected dynamic filters
//         const dynamicMatch = dynamicFilter.length === 0 || dynamicFilter.includes(game.dynamic);
//         // Check if num players matches
//         const playersMatch = game.minPlayers <= minPlayers && game.maxPlayers >= maxPlayers;
  
//         return durationMatch && dynamicMatch && playersMatch;
//     });
// }

function scoreGames(duration, playerDynamic, players, genre, coreDynamic, playCmplx, facilitateCmplx, customCmplx, instinct, intent, setup) {
    const scoredGames = games.map((game) => {
        let score = 0;

        // Calculate the score based on matching criteria

        //Duration X/10
        if (duration.length === 0 || duration.includes(game.duration)){
            score += 10;
        }

        //Players X/25
        if (playerDynamic.length === 0 || playerDynamic.includes(game.playerDynamic)){
            score += 5;
        }
        if (game.minPlayers <= players && game.maxPlayers >= players || players === -1){
            score += 20;
        }

        //Game Classification X/15
        if (genre.length === 0 || genre.includes(game.genre)){
            score += 5;
        }
        if (coreDynamic.length === 0){
            score += 10;
        }
        if (coreDynamic.includes(game.cd1)){
            score += 6;
        }
        if (coreDynamic.includes(game.cd2)){
            score += 4;
        }

        //Complexity X/20
        if (playCmplx === "" || game.playCmplx === playCmplx){
            score += 7;
        }
        if (facilitateCmplx === "" || game.facilitateCmplx === facilitateCmplx){
            score += 7;
        }
        if (customCmplx === "" || game.customizeCmplx === customCmplx){
            score += 6;
        }

        //Pressure Matrix X/15
        if (instinct.length === 0 || instinct.includes(game.instinct)){
            score += 8;
        }
        if (intent.length === 0 || intent.includes(game.intent)){
            score += 7;
        }

        //Setup X/15
        if (setup === "Both"){
            score += 15;
        }
        else if(setup === "Physical" && game.physical){
            score += 15;
        }
        else if(setup === "Digital" && game.digital){
            score += 15;
        }

        // You can add more criteria here and adjust the scoring logic as needed

        return { ...game, score };
    });

    // Sort the games in descending order based on their scores
    scoredGames.sort((a, b) => b.score - a.score);

    return scoredGames;
}


// Code for displaying the results in the webpage
document.getElementById("filterForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get Duration
    const durationCheckboxes = document.querySelectorAll('input[name="duration"]:checked');
    const duration = Array.from(durationCheckboxes).map(checkbox => checkbox.value);
  
    // Get Player Dynamic
    const playerDynamicCheckboxes = document.querySelectorAll('input[name="playerDynamic"]:checked');
    const playerDynamic = Array.from(playerDynamicCheckboxes).map(checkbox => checkbox.value);
    
    // Get Player Count
    let players = -1
    const playerB4 = document.getElementById("players").value
    if (playerB4 === ""){
        players = -1
    }
    else{
        players = parseInt(playerB4, 10);
    }
    
    // const minPlayers = parseInt(document.getElementById("minPlayers").value, 10);
    // const maxPlayers = parseInt(document.getElementById("maxPlayers").value, 10);

    // Get Genre
    const genreCheckboxes = document.querySelectorAll('input[name="genre"]:checked');
    const genre = Array.from(genreCheckboxes).map(checkbox => checkbox.value);

    // Get Core Dynamic
    const cdCheckboxes = document.querySelectorAll('input[name="coreDynamic"]:checked');
    const coreDynamic = Array.from(cdCheckboxes).map(checkbox => checkbox.value);

    // Get Complexities
    const playCmplx = document.getElementById("playCmplx").value;
    const facilitateCmplx = document.getElementById("facilitateCmplx").value;
    const customCmplx = document.getElementById("customizeCmplx").value;

    // Get Pressure Matrix
    const instinctCheckboxes = document.querySelectorAll('input[name="instinct"]:checked');
    const instinct = Array.from(instinctCheckboxes).map(checkbox => checkbox.value);

    const intentCheckboxes = document.querySelectorAll('input[name="intent"]:checked');
    const intent = Array.from(intentCheckboxes).map(checkbox => checkbox.value);

    // Setup
    const setup = document.getElementById("setup").value;

  
    // const filteredGames = filterGames(durationFilter, playerDynamicFilter, minPlayers, maxPlayers);
    const scoredGames = scoreGames(duration, playerDynamic, players, genre, coreDynamic, playCmplx, facilitateCmplx, customCmplx, instinct, intent, setup);
  
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    const threshold = 0;
    testLink = "https://www.youtube.com/watch?v=elvOZm0d4H0"
  
    if (scoredGames.length === 0) {
      resultsDiv.innerHTML = "<p>No matching games found.</p>";
    } else {
        console.log("============New batch============\n");
        scoredGames.forEach(game => {
            console.log(game.title, game.score);
            if (game.score >= threshold){
                resultsDiv.innerHTML += `<p><a href="${testLink}" target="_blank">${game.title}</a>, Score: ${game.score}</p>`;
            }
      });
    }
    if (resultsDiv.innerHTML === ""){
            resultsDiv.innerHTML = `<p>No games with a score higher than ${threshold} found.</p>`;
    }
});
