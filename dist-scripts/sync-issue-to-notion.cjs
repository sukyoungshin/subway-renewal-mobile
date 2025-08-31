"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const node_fetch_1 = __importDefault(require("node-fetch"));
const { GH_TOKEN, NOTION_TOKEN, NOTION_DB_ID, OWNER, REPO } = process.env;
if (!GH_TOKEN || !NOTION_TOKEN || !NOTION_DB_ID || !OWNER || !REPO) {
    throw new Error('환경변수가 설정되지 않았습니다.');
}
// GitHub Issues 가져오기
async function getGithubIssues() {
    const res = await (0, node_fetch_1.default)(`https://api.github.com/repos/${OWNER}/${REPO}/issues?state=all`, {
        headers: { Authorization: `token ${GH_TOKEN}` },
    });
    if (!res.ok)
        throw new Error(`GitHub API error: ${res.statusText}`);
    return (await res.json());
}
// Notion DB 안의 Number 값 가져오기
async function getExistingIssueNumbers() {
    const res = await (0, node_fetch_1.default)(`https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${NOTION_TOKEN}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28',
        },
    });
    if (!res.ok)
        throw new Error(`Notion API error: ${res.statusText}`);
    const data = (await res.json());
    // DB에 있는 Number 값 추출
    return data.results
        .map((page) => page.properties?.Number?.number)
        .filter((n) => n !== null && n !== undefined);
}
// Notion에 새 페이지 생성
async function createNotionPage(issue) {
    const res = await (0, node_fetch_1.default)('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${NOTION_TOKEN}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify({
            parent: { database_id: NOTION_DB_ID },
            properties: {
                Number: { number: issue.number },
                Title: { title: [{ text: { content: issue.title } }] },
                State: { status: { name: issue.state } },
                URL: { url: issue.html_url },
            },
        }),
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Notion API error: ${res.status} ${res.statusText} - ${text}`);
    }
    return res.json();
}
// 동기화 실행
async function syncGithubIssues() {
    const issues = await getGithubIssues();
    const onlyIssues = issues.filter((issue) => !issue.pull_request);
    const existingIssueNumbers = await getExistingIssueNumbers();
    for (const issue of onlyIssues) {
        if (existingIssueNumbers.includes(issue.number)) {
            console.log(`Skip duplicate issue #${issue.number}: ${issue.title}`);
            continue;
        }
        await createNotionPage(issue);
        console.log(`Synced issue #${issue.number}: ${issue.title}`);
    }
}
syncGithubIssues().catch(console.error);
