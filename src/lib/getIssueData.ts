import fs from 'fs/promises';
import path from 'path';

export function getIssueData(id: string) {
    const filePath = path.join(process.cwd(), 'content', 'issues', `${id}.json`);
    const content: any = fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
}
