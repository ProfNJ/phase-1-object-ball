let games = {
    home: {

        teamName : "Brooklyn Nets",
        colors : ['Black', 'White'],
        players: {
            'Alan Anderson' : {
                
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,

            },
            'Reggie Evans' : {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,

            },
            'Brook Lopez' : {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,

            },
            'Mason Plumlee' : {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,

            },
            'Jason Terry' : {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,

            }
        }
    },
   
    away: {

        teamName : "Charlotte Hornets",
        colors : ['Turquoise', 'Purple'],
        players: {
            'Jeff Adrien' : {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,

            },
            'Bismak Biyombo' : {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,

            },
            'DeSagna Diop' : {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,

            },
            'Ben Gordon' : {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,

            },
            'Brendan Heywood' : {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,

            }
        }
    }

}

function gameObject(){
    return games;
}

function homeTeamName(){
    return gameObject()['home']['teamName']
  }
  
function numPointsScored(name){
    return playerSearch(games, name, 'points');

}

function shoeSize(name){
    return playerSearch(games, name, 'shoe');
}

function teamColors(tName){
    return teamSearch(games, tName, 'colors');
}

function playerNumbers(tName){
    return rosterSearch(games, tName, 'number');
}

function playerStats(name){
    return fullStats(games, name);
}

function bigShoeRebounds(){
    let a = findLargestPlayerByShoeSize(games);
    if (typeof a == 'object'){
        return a['rebounds'];
    }
}

function mostPointsScored(){
    return findTopScorer(games)['points'];
}

function winningTeam(){
    return findWinningTeam(games);
}

function playerWithLongestName(){
    return findLongName(games).key;
}




function playerSearch(trg, key, term){
    if (typeof trg == "object"){ 
        for (const t in trg){
            
            let p = trg[t].players;
            
            for (const x in p){
                if(x == key){
                    
                    return p[x][term];
                    
                }
            }
        }
    }
}


function rosterSearch(trg, key, term){
    let arr=[];
    if (typeof trg == "object" && trg == key){ 
        for (const t in trg){
            console.log(t);
            let p = trg[t].players;
            console.log(p);
            for (const x in p){
                if(x[term]){
                    console.log(`Found ${x} Stat`);
                    console.log(x);
                    arr.push(x[term]);
                    
                }
            }
        }
    }
    return arr;
}

function fullStats(trg, key){
    if (typeof trg == "object"){ 
        for (const t in trg){
            console.log(t);
            let p = trg[t].players;
            console.log(p);
            for (const x in p){
                if(x == key){
                    console.log('Found Player');
                    console.log(x);
                    return p[x];
                    
                }
            }
        }
    }
}


function teamSearch(trg, key, term){
    if (typeof trg == "object"){ 
        for (const t in trg){
            console.log(t);
            if(t == key){
                console.log('Found Stat');
                console.log(t);
                return t[term];
                
            }
            
        }
    }

}

function genTeamSearch(trg, term){
    let arr = [];
    if (typeof trg == "object"){ 
        for (const t in trg){
            console.log(t);
            if(t[term]){
                console.log('Found Stat');
                console.log(t);
                arr.push(t[term]);
                
            }
            
        }
    }
    return arr;

}

function findLargestPlayerByShoeSize(trg){
    let count = 0;
    let pl = 0;
    if (typeof trg == "object"){ 
        for (const t in trg){
            let p = trg[t].players;
            console.log(p);
            for (const x in p){
                console.log(x);
                sized = shoeSize(x);
                console.log(`${x} 's Size: ${sized}`);
                if (count < sized){
                    
                    count = sized;
                    console.log(`Current Count: ${count}`);
                    pl = p[x];
                    console.log(`Current Best: ${x}`);
                }
               
            }
        }
    }
    return pl;

}

function findTopScorer (trg){
    let count = 0;
    let pl = 0;
    if (typeof trg == "object"){ 
        for (const t in trg){
            let p = trg[t].players;
            console.log(p);
            for (const x in p){
                console.log(x);
                sized = numPointsScored(x);
                console.log(`${x} 's Stat: ${sized}`);
                if (count < sized){
                    
                    count = sized;
                    console.log(`Current Count: ${count}`);
                    pl = p[x];
                    console.log(`Current Best: ${x}`);
                }
               
            }
        }
    }
    return pl;


}

function findLongName (trg){
    let count = 0;
    let pl = 0;
    if (typeof trg == "object"){ 
        for (const t in trg){
            let p = trg[t].players;
            console.log(p);
            for (const x in p){
                console.log(x);
                sized = p[x].length();
                console.log(`${x} 's Stat: ${sized}`);
                if (count < sized){
                    
                    count = sized;
                    console.log(`Current Count: ${count}`);
                    pl = p[x];
                    console.log(`Current Best: ${x}`);
                }
               
            }
        }
    }
    return pl;


}

function findWinningTeam(trg){
    count = 0;
    tm = 0;
    if (typeof trg == "object"){ 
        for (const t in trg){
            tName = trg[t]['teamName'];
            console.log(tName);
            teamCount = 0;
            let p = trg[t].players;
            console.log(p);
            for (const x in p){
                pts = numPointsScored(x);
                teamCount += pts;
                console.log(`Team Score: ${teamCount}`);
            }
            if (count < teamCount){
                count = teamCount;
                tm = tName;
            }
        }
    }
    return tm;

}