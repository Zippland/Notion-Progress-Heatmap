import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const app = express();
app.use(cors());

// 确保express已经通过import引入
app.use(express.static('public'));  // 'public'是你的静态文件目录的名字


const port = 3000;
const token = process.env.ENV_NOTION_TOKEN;
const databaseId = process.env.ENV_DATABASE_ID;

// 处理这些数据，并填补缺失的日期
const processData = (data) => {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() -120);  // 从今天往前数120天
    const endDate = new Date();

    const progressMap = new Map();

    // 填充从API获取的数据
    data.forEach(item => {
        if (item.properties.Date && item.properties.Count) {
            if(item.properties.Count.formula.number > 0){
                const date = new Date(item.properties.Date.created_time).toISOString().split('T')[0];
                const count = item.properties.Count.formula.number || 0;  // 提取 formula 类型的 number
                progressMap.set(date, count);
            }
        }
    });

    return Array.from(progressMap).map(([date, progress]) => ({ date, progress }));
};




app.get('/database', async (req, res) => {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Notion-Version': '2021-05-13',
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();

    // 打印 Notion API 原始响应数据查看
    console.log("Raw Notion API Data:", JSON.stringify(data, null, 2));

    const processedData = processData(data.results);
    
    // 打印处理后的数据查看
    console.log("Processed Data:", JSON.stringify(processedData, null, 2));

    res.json(processedData);
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
