# Notion Progress Heatmap

[Chinese Readme](README)
[English Readme](README_EN)

## Project Overview

The Notion Progress Heatmap is a cloud-deployed application based on the Notion API and the Vercel platform. The main functionality of this project is to fetch data from the Notion database and display daily progress records in the form of a heatmap on a webpage. The project uses a serverless architecture, making it easy to deploy and maintain.

![image](https://github.com/Zippland/Notion-Progress-Heatmap/assets/126135306/11a4e22f-2388-428a-b051-160e1a415930)

## Technology Stack

- **HTML/CSS**: For frontend page presentation.
- **JavaScript**: For frontend logic handling.
- **Node.js**: Backend API service.
- **Vercel**: Cloud deployment and hosting services.
- **Notion API**: Source of data.

## Project Structure

```
/
├── api
│   └── database.js       # Serverless function, handling interactions with the Notion API
├── public
│   └── index.html        # Main page
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Feature Description

- **Data Display**: Fetch data through the Notion API and display it on the webpage in the form of a heatmap.
- **Automatic Refresh**: The page automatically updates data from the Notion database periodically to ensure the timeliness of the data.

## How to Use

### Preparation

1. **Register a Notion account**: If you don't have a Notion account yet, please register one at [Notion's official website](https://www.notion.so/).
2. **Create a Notion database**: Create a task table that includes at least the `Date` and `Count` properties. The `Date` property is used to record the date of each day, and `Count` is used to calculate the number of tasks completed that day (please complete this using Notion functions on your own).
3. **Get the Notion API key**: To allow the application to access your Notion database, you need to create an integration and get the corresponding key. Go to the “Integration” section in Notion settings, create a new integration, and note the generated "Internal Integration Token".
4. **Get the database ID**: In the URL of your Notion database page, copy the part after “`https://www.notion.so/`” and before the `?` (not including the `?`), which is your database ID.

### Deploying to Vercel

1. **Register a Vercel account**: Visit [Vercel's official website](https://vercel.com/) and register an account.
2. **Create a new Vercel project**: In the Vercel dashboard, select "New Project", then create a project by importing your repository from GitHub.
3. **Configure environment variables**: In the settings of your Vercel project, find the “Environment Variables” section and add the following two variables:
   - `ENV_NOTION_TOKEN`: Your Notion internal integration token.
   - `ENV_DATABASE_ID`: Your Notion database ID.
4. **Deploy the project**: After setting up the environment variables, return to the project dashboard and click the "Deploy" button. Vercel will automatically deploy your application.

### Accessing and Using

After deployment, Vercel will provide a URL for you to access your Notion Progress Heatmap. Open this URL to see data fetched from your Notion database displayed in a heatmap on the webpage.

In Notion, use the `\embed` command to insert a web view.
![image](https://github.com/Zippland/Notion-Progress-Heatmap/assets/126135306/9298c5aa-bd5e-49d2-979f-546f3bf469f0)

## Frequently Asked Questions

**Q1: How can I ensure my Notion data is secure?**

A1: Make sure to use your Notion API key and database ID only when necessary and keep them secure. Do not share them with untrusted parties.

**Q2: How can I update the data display?**

A2: The webpage automatically refreshes the data every 30 seconds. You can also manually update the display by simply refreshing the webpage.

**Q3: What if the data doesn't update?**

A3: Check if your Notion database has new data entries, and inspect the Vercel project logs to identify any backend errors.
