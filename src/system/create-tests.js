const chokidar = require("chokidar");
const { glob } = require("glob");
const { update } = require("./create-tests/update");
const { watchPath } = require("./create-tests/watchPath");

if (process.env.CI === "1") updateAll();
else chokidar.watch(watchPath).on("add", update).on("change", update);

async function updateAll() {
  const files = glob.sync(watchPath + "/*.md");
  const updates = files.map(update);
  const posts = await Promise.all(updates);

  if (posts.some((p) => p.failed)) process.exit(1);
}