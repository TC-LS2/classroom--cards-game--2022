const path = require("node:path");
const { writeFile } = require("node:fs/promises");
const { join } = require("./join");
const { prettyJs } = require("./prettyJs");

async function writeJsTestFile(post) {
  const testContent = await makeTestContent(post);

  await writeFile(
    path.join("src", "www", "__test__", post.testName + ".spec.js"),
    prettyJs(testContent)
  );

  return true;
}
exports.writeJsTestFile = writeJsTestFile;

async function makeTestContent(post) {
  let testContent = ``;
  testContent += makeTestHeader(post);
  testContent += makeTestBody(post);
  testContent += makeTestFooter();

  return testContent;
}

function makeTestHeader(post) {
  const idValue = JSON.stringify(post.id);
  const md5Value = JSON.stringify(post.md5);

  return join(
    `import { runBeforeTestStarts, runWhenTestSuccessful } from './fixtures';`,
    `import { ${post.contextName} } from './contexts/${post.contextName}';`,
    ``,
    `// !!! IMPORTANT !!!`,
    `// This test file is AUTOGENERATED by yarn create-tests`,
    `// If you need to update it, run yarn create-tests`,
    `// DO NOT MODIFY manually. Keep running yarn create-tests instead,`,
    `// while editing your posts.`,
    ``,
    `test('${post.id}.md', async () => {`,
    `  await runBeforeTestStarts(${idValue}, ${md5Value});`,
    ``,
    `  const context = new ${post.contextName}();`
  );
}

function makeTestFooter() {
  return join(``, `await runWhenTestSuccessful();`, `})`);
}

function makeTestBody(post) {
  return join(...post.testCalls.map(makeTestCall));
}

function makeTestCall(call) {
  const methodCall = `await context.${call.name}(${call.arguments
    .map((a) => a.value)
    .join(", ")});`;

  return `  ${methodCall}`;
}