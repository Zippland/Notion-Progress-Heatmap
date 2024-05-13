# Notion-Progress-Heatmap

[Chinese Readme](README.md)

[English Readme](README_EN.md)

## One-Click Deployment
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FZippland%2FNotion-Progress-Heatmap&env=ENV_DATABASE_ID&env=ENV_NOTION_TOKEN&project-name=notion-progress-heatmap&repository-name=notion-progress-heatmap)

## Project Overview

Notion-Progress-Heatmap is used for tracking the collective completion rates of multiple tasks. It is a cloud-deployed application based on the Notion API and the Vercel platform. The main functionality of this project is to fetch data from the Notion database and display daily progress records on a webpage in the form of a heatmap.

For tracking the completion of individual tasks, use: [Notion-Checkbox-Heatmap](https://github.com/Zippland/Notion-Checkbox-Heatmap)

![image](https://github.com/Zippland/Notion-Progress-Heatmap/assets/126135306/63b0375e-7526-4863-8a87-cf56dcf75047)

**Automatic switch to night mode**:
![image](https://github.com/Zippland/Notion-Progress-Heatmap/assets/126135306/fef9ffdc-9509-4980-8f03-05f1210a35d2)

## Technology Stack

- **HTML/CSS**: For frontend display.
- **JavaScript**: For frontend logic.
- **Node.js**: Backend API services.
- **Vercel**: Cloud deployment and hosting services.
- **Notion API**: Source of data.

## Project Structure

```
/
├── api
│   └── database.js       # Serverless function, handling interaction with the Notion API
├── public
│   └── index.html        # Main page
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Feature Description

- **Data Display**: Fetch data through the Notion API and display it on the webpage in heatmap form.
- **Automatic Refresh**: The page regularly updates data from the Notion database to ensure real-time data accuracy.

## How to Use

### Step 1: Preparation

1. **Register for a Notion account**: If you do not have a Notion account, register one on the [Notion website](https://www.notion.so/).
2. **Create a Notion database**: Create a task table that includes at least the `Date` and `Progress` attributes. The `Date` attribute is used to record the date daily, and the `Progress` represents the daily task completion rate (value range from 0-1).
3. **Obtain Notion API key**: To allow the application to access the Notion database, create an integration and obtain the corresponding key. Go to the "Integration" section in Notion settings, create a new integration, and note the generated "Internal Integration Token".
4. **Get database ID**: In the URL of your Notion database page, copy the part after "`https://www.notion.so/`" and before the `?` (excluding the `?`). This part of the URL is your database ID.

### Step 2: Deploy to Vercel

1. **Register for a Vercel account**: Visit the [Vercel website](https://vercel.com/) and register an account.
2. **Create a new Vercel project**: In the Vercel dashboard, select "New Project" and create a project by importing the repository from GitHub.
3. **Configure environment variables**: In the settings of your Vercel project, find the "Environment Variables" section and add the following two variables:
   - `ENV_NOTION_TOKEN`: Your Notion internal integration token.
   - `ENV_DATABASE_ID`: Your Notion database ID.
4. **Deploy the project**: After setting up the environment variables, return to the project dashboard and click the "Deploy" button. Vercel will automatically deploy your application.

### Step 3: Access and Use

Once deployed, Vercel will provide a URL for you to access your Notion progress heatmap. Open this URL, and you will see the data fetched from the Notion database displayed on the webpage in heatmap form.

In Notion, insert a web view of the page using the `\embed` command.

![image](https://github.com/Zippland/Notion-Progress-Heatmap/assets/126135306/9298c5aa-bd5e-49d2-979f-546f3bf469f0)


## Frequently Asked Questions

**Q

1: How do I ensure the security of my Notion data?**

A1: Ensure that your Notion API key and database ID are used only when necessary and are well protected. Do not share them with untrusted parties.

**Q2: How do I update the data display?**

A2: The webpage automatically refreshes the data every 30 seconds. You can also manually update the displayed data by simply refreshing the webpage.

**Q3: What if the data does not update?**

A3: Confirm that your Notion database has new data entries, and check the logs of the Vercel project to ensure there are no backend errors.
