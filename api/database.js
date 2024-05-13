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

const processData = (data) => {
    const progressMap = new Map();

    data.forEach(item => {
        if (item.properties.Date && item.properties.Progress) {
            if (item.properties.Progress.formula.number !== null && item.properties.Progress.formula.number > 0) {
                const dateObject = new Date(item.properties.Date.created_time);
                dateObject.setDate(dateObject.getDate() + 1); // Add one day to the date
                const date = dateObject.toISOString().split('T')[0]; // Format back to YYYY-MM-DD
                const progress = Math.round(item.properties.Progress.formula.number * 100); // Convert from 0-1 to 0-100
                progressMap.set(date, progress);
            }
        }
    });

    return Array.from(progressMap).map(([date, progress]) => ({ date, progress }));
};
