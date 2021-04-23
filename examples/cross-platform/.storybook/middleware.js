const exec = require("child_process");
const bodyParser = require("body-parser");

// TODO: android button not working but iOS does
// TODO: use typescript
// TODO: ensure this always works (it was saying emulator was not started before even though it was)
// TODO: iOS support
// TODO: move this to a package
// TODO: documentation
// TODO: responses
// TODO: rotations
// TODO: screenshots
// TODO: determine whether to use local controller somehow
const expressMiddleWare = (app) => {
    app.use(bodyParser.json());
    app.post("/deepLink", (req, res) => {
        const link = req.body.url;
        console.error(process.cwd());
        exec.execSync(
            `adb shell 'am start -W -a android.intent.action.VIEW -c android.intent.category.BROWSABLE -d "${link}"'`,
            {
                stdio: "inherit"
            }
        );
        res.json({ custom: "response" });
    });

    app.post("/updateConfig", (req, res) => {
        res.json({ custom: "response" });
    });
};
module.exports = expressMiddleWare;
