// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "run-this-line" is now active!');

	const disposable = vscode.commands.registerCommand('run-this-line.run', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			// No open text editor
			return;
		}

		const languageId = editor.document.languageId;

		// This command works for any language supported by the Positron console.
		if (languageId === 'r' || languageId === 'python') {
			vscode.commands.executeCommand('workbench.action.positronConsole.executeCode');
		} else {
			vscode.window.showInformationMessage(`'Run This Line' is not supported for ${languageId} files.`);
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
