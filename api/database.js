import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

export default async (req, res) => {
    const token = process.env.ENV_NOTION_TOKEN;
    const databaseId = process.env.ENV_DATABASE_ID;

    try {
        const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Notion-Version': '2021-05-13',
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Notion API error: ${response.status} ${JSON.stringify(data)}`);
        }

        const processedData = processData(data.results);
        res.json(processedData);
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: error.message });
    }
};


import dotenv from 'dotenv';
dotenv.config();

const timeZoneOffset = process.env.TIME_ZONE_OFFSET ? parseInt(process.env.TIME_ZONE_OFFSET) * 60 * 60000 : 0; // 默认偏移为0

const processData = (data) => {
    const progressMap = new Map();

    data.forEach(item => {
        if (item.properties.Date && item.properties.Count) {
            if(item.properties.Count.formula.number > 0){
                const utcDate = new Date(item.properties.Date.created_time);
                const localDate = new Date(utcDate.getTime() + timeZoneOffset); // 使用环境变量调整时区
                const formattedDate = localDate.toISOString().split('T')[0];
                const count = item.properties.Count.formula.number || 0;
                progressMap.set(formattedDate, count);
            }
        }
    });

    return Array.from(progressMap).map(([date, progress]) => ({ date, progress }));
};


