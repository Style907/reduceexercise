const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

function extractValue(arr, str){
   return arr.reduce(function(val, next){val.push(next[str]); return val},[])
}

function vowelCount(str){
    const vowels = 'aeiou'

    return str.split('').reduce(function(val, next){
        if(vowels.indexOf(next) !== -1){
            if(val[next]){val[next]++ }
            else{val[next] = 1} 
        }
            return val }, {})
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    },arr);
}

function partition(arr, cb){
    return arr.reduce(function(acc,next){
        if(cb(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}