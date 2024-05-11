import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

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
    
    res.json(processedData);
};

const processData = (data) => {
    const progressMap = new Map();

    data.forEach(item => {
        if (item.properties.Date && item.properties.Count) {
            if(item.properties.Count.formula.number > 0){
                const date = new Date(item.properties.Date.created_time).toISOString().split('T')[0];
                const count = item.properties.Count.formula.number || 0;
                progressMap.set(date, count);
            }
        }
    });

    return Array.from(progressMap).map(([date, progress]) => ({ date, progress }));
};
