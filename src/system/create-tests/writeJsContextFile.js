const path = require("node:path");
const { writeFile } = require("node:fs/promises");
const { join } = require("./join");
const { prettyJs } = require("./prettyJs");

async function writeJsContextFile(post) {
  const contextPath = path.join(
    "src",
    "www",
    "__test__",
    post.contextName + ".js"
  );

  const contextContent = makeContextContent(post);

  try {
    await writeFile(contextPath, prettyJs(contextContent), { flag: "wx" });
    return true;
  } catch (e) {
    if (e.code !== "EEXIST") console.error(e);
  }

  return false;
}

function makeContextContent(post) {
  let contextContent = "";

  contextContent += makeContextHeader(post);
  contextContent += makeContextBody(post);
  contextContent += makeContextFooter();

  return contextContent;
}

function makeContextHeader(post) {
  return join(
    `import { mainView, getByTestId } from "./queries";`,
    `import * as userSimulator from "./userSimulator";`,
    ``,
    `export class ${post.contextName} {`
  );
}

function makeContextBody(post) {
  return join(...post.contextMethods.flatMap(makeContextMethod));
}

function makeContextMethod({ name, arguments: args, text }) {
  const formalArguments = args.map(({ name }) => `${name}`);
  const methodSignature = `${name}(${formalArguments.join(", ")})`;

  return [
    ``,
    `  async ${methodSignature} {`,
    `    // text: ${text}`,
    `    // code: this.${name}(${args.map((a) => a.value).join(", ")})`,
    //  ...args.map(({ name, value }) => `    //    ${name} <= ${value}`),
    args.length && ``,
    args.some(({ name }) => name === "expected") && [
      `    var actual = expected; // FIXME`,
      `    expect(actual).toEqual(expected);`,
      ``,
    ],
    `    throw new Error("The method ${methodSignature} is not implemented yet.");`,
    `  }`,
  ];
}

function makeContextFooter() {
  return join(`}`);
}

exports.writeJsContextFile = writeJsContextFile;
