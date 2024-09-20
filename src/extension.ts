// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

//------------ staring point
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "100-nextjs-snippets" is now active!');

	const disposable = vscode.commands.registerCommand('100-nextjs-snippets.helloWorld', () => {
	
		vscode.window.showInformationMessage('Hello World from 100 Nextjs Snippets !');
	});

	context.subscriptions.push(disposable);
}

//---------------------- end starting point



// This method is called when your extension is deactivated
export function deactivate() {}


