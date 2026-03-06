import { 
    Plugin, moment 
} from 'obsidian';


export default class CustomCommand extends Plugin {
    async onload() {
        this.addCommand({
            id: 'today',
            name: 'Create Daily Note Link',
            editorCallback: (editor, view) => {
                const dailyNotesPlugin = (this.app as any).internalPlugins.plugins['daily-notes'];
                const format = dailyNotesPlugin?.instance?.options?.format || 'YYYY-MM-DD';
                
                const today = moment().format(format);
                const dailyNoteLink = `[[${today}]]`;
                
                editor.replaceSelection(dailyNoteLink);
            },
        });
    }

    onunload() { }
}