
var cl = readln.createInterface( process.stdin, process.stdout );
var question = function(q) {
    return new Promise( (res, rej) => {
        cl.question( q, answer => {
            res(answer);
        })
    });
};
(async function main() {
    var answer;
    while ( answer != 'yes' ) {
        answer = await question('Are you sure? ');
    }
    console.log( 'finally you are sure!');
})();