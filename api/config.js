// pages/api/config.js
import dotenv from 'dotenv';
dotenv.config();

export default (req, res) => {
    // 仅发送前端需要的环境变量，确保安全
    res.json({
        range: process.env.ENV_RANGE || 6, // 默认值为6个月
        cellSize: process.env.ENV_CELL_SIZE || 10 // 默认格子大小为10
    });
};
