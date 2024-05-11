// api/database.js
import fetch from 'node-fetch';
import { processData } from './utils.js';  // 假设您将 processData 函数移至 utils.js

export default async (req, res) => {
    const token = process.env.ENV_NOTION_TOKEN;
    const databaseId = process.env.ENV_DATABASE_ID;
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Notion-Version': '2021-05-13',
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    const processedData = processData(data.results);
    res.status(200).json(processedData);
};
