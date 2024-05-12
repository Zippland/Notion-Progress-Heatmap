# Notion-Progress-Heatmap

[Chinese Readme](README.md)

[English Readme](README_EN.md)

## One-Click Deployment
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FZippland%2FNotion-Progress-Heatmap&env=ENV_DATABASE_ID&env=ENV_NOTION_TOKEN&project-name=notion-progress-heatmap&repository-name=notion-progress-heatmap)

## Project Overview

The Notion Progress Heatmap is a cloud-deployed application based on the Notion API and Vercel platform. The primary function of this project is to fetch data from a Notion database and display it on a webpage in the form of a heatmap. The project uses a serverless architecture, making it easy to deploy and maintain.

![image](https://github.com/Zippland/Notion-Progress-Heatmap/assets/126135306/73af35ed-9224-4e7b-b79f-77a4aacdaa8a)

## Technology Stack

- **HTML/CSS**: For frontend display.
- **JavaScript**: For frontend logic.
- **Node.js**: For backend API services.
- **Vercel**: For cloud deployment and hosting.
- **Notion API**: As a data source.

## Project Structure

```
/
├── api
│   └── database.js       # Serverless function, handling interaction with Notion API
├── public
│   └── index.html        # Main page
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Features

- **Data Display**: Fetch data via Notion API and display it on a webpage in heatmap format.
- **Automatic Refresh**: The page regularly updates data from the Notion database to ensure data is current.

## How to Use

### Step 1: Preparation

1. **Register a Notion Account**: If you do not already have a Notion account, please register one at [Notion's official website](https://www.notion.so/).
2. **Create a Notion Database**: Create a task table with at least the properties `Date` and `Progress`, where `Date` is used to record each day's date, and `Progress` represents the completion rate of tasks for the day (value range 0-1).
3. **Obtain a Notion API Key**: To allow the application access to your Notion database, create an integration and obtain the corresponding key. Go to the "Integration" section in Notion settings, create a new integration, and note down the generated "Internal Integration Token".
4. **Obtain the Database ID**: In the URL of your Notion database page, copy the part following "`https://www.notion.so/`" (up to and excluding the `?`), this segment of the URL is your database ID.

### Step 2: Deploy to Vercel

1. **Register a Vercel Account**: Visit [Vercel's official website](https://vercel.com/) and register an account.
2. **Create a Vercel Project**: In the Vercel dashboard, select "New Project", then create a project by importing a repository from GitHub.
3. **Configure Environment Variables**: In your Vercel project's settings, find the "Environment Variables" section and add the following two variables:
   - `ENV_NOTION_TOKEN`: Your Notion Internal Integration Token.
   - `ENV_DATABASE_ID`: Your Notion database ID.
4. **Deploy the Project**: After configuring the environment variables, go back to the project dashboard and click the "Deploy" button. Vercel will automatically deploy your application.

### Step 3: Access and Use

Once deployed, Vercel will provide a URL for accessing your Notion Progress Heatmap. Open this URL to see the data fetched from the Notion database displayed as a heatmap on the webpage.

In Notion, insert a webpage view using the `\embed` command.

![image](https://github.com/Zippland/Notion-Progress-Heatmap/assets/126135306/9298c5aa-bd5e-49d2-979f-546f3bf469f0)

## Frequently Asked Questions

**Q1: How can I ensure the security of my Notion data?**

A1: Ensure that your Notion API key and database ID are used only when necessary and kept secure. Do not share them with untrusted parties.

**Q2: How can I update the data displayed?**

A2: The webpage automatically refreshes the data every 30 seconds. You can also manually update the data displayed by simply refreshing the webpage.

**Q3: What if the data does not

 update?**

A3: Ensure your Notion database has new data entries, and check the Vercel project logs to identify any backend errors.
