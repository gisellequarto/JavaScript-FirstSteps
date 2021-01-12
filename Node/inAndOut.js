const anonymous = process.argv.indexOf('-a') !== -1;
//console.log(anonymous);

if(anonymous) {
    process.stdout.write('Hello Anonymous!\n');
    process.exit();
} else {
    process.stdout.write('Write your name: ');
    process.stdin.on('data', data => {
        const name = data.toString().replace('\r\n', ''); // the enter goes with the data - so we replace it
        process.stdout.write(`Hello ${name}!\n`);
        process.exit();
    })
}