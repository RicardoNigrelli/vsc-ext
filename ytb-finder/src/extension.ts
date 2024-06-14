import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "ytb-finder" is now active!');

  const disposable = vscode.commands.registerCommand(
    "ytb-finder.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from ytb-finder!");
    }
  );

  const goodbye = vscode.commands.registerCommand("ytb-finder.goodbye", () => {
    vscode.window.showInformationMessage("Good bye from ytb-finder!");
  });

  context.subscriptions.push(disposable);
  context.subscriptions.push(goodbye);
}

export function deactivate() {}
