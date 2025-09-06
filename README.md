# 🌿 Odisha Explorer Hub

Welcome to the Odisha Explorer Hub, an interactive single-page web application designed to be your digital guide to the beautiful state of Odisha, India. Discover its serene temples, rich cultural heritage, natural wonders, and learn essential information for a safe and enjoyable visit.

![Odisha Explorer Hub Screenshot](https://via.placeholder.com/800x400.png?text=Odisha+Explorer+Hub+Homepage)
*(You can replace this placeholder with a real screenshot of your application)*

## ✨ Features

*   **Interactive Single-Page Application:** Smooth navigation between sections without page reloads.
*   **Tour Guide:**
    *   Highlights major tourist destinations like the Jagannath Temple, Chilika Lake, and the Konark Sun Temple.
    *   Includes an interactive map (powered by Leaflet.js) with markers for key locations.
*   **Learn Odia:**
    *   A "Lesson of the Day" section for common phrases.
    *   Interactive flashcards for learning basic Odia vocabulary.
    *   A fun, multiple-choice quiz to test your knowledge about Odisha.
*   **Culture Hub:**
    *   Showcases the rich arts and crafts of the state, including Pattachitra, Silver Filigree, Odissi dance, and Sambalpuri textiles.
*   **Safety & Preparedness:**
    *   **Live Weather Checker:** Fetches and displays real-time weather conditions for any city using the OpenWeatherMap API.
    *   **Emergency Contacts:** A quick-reference list of important emergency numbers.
    *   **Preparedness Checklist:** An interactive checklist for cyclone preparedness.
    *   **District-Specific Info:** Provides emergency information for selected districts.
*   **Stunning UI & Animations:**
    *   A beautiful, modern "forest theme" design.
    *   An elegant page-load animation.
    *   An interactive fireflies animation that follows the mouse cursor, creating an immersive background effect.
*   **Responsive Design:** The layout adapts gracefully to different screen sizes, from desktops to mobile phones.

## 🛠️ Technologies Used

*   **Frontend:** HTML5, CSS3, Vanilla JavaScript
*   **Libraries:** [Leaflet.js](https://leafletjs.com/) for the interactive map.
*   **APIs:** [OpenWeatherMap API](https://openweathermap.org/api) for live weather data.
*   **Styling:** CSS Flexbox, CSS Grid, CSS Variables, and Responsive Media Queries.

## 🚀 Setup and Installation

This is a static web project. To run it locally, you can simply open the `index.html` file in your web browser. However, for the weather feature to work correctly (due to browser security policies regarding API calls from local files), it's recommended to use a live server.

1.  **Clone the repository (or download the files):**
    ```bash
    git clone https://github.com/your-username/OdishaExplorerHub.git
    cd OdishaExplorerHub
    ```

2.  **Get an OpenWeatherMap API Key:**
    *   Sign up for a free account on OpenWeatherMap.
    *   You will receive an API key.

3.  **Add the API Key to the code:**
    *   Open the `index.html` file.
    *   Find the `updateWeather` function in the `<script>` section.
    *   Replace `'YOUR_API_KEY_HERE'` with your actual OpenWeatherMap API key.

4.  **Run with a Live Server:**
    *   If you have VS Code, you can use the Live Server extension. Right-click on `index.html` and select "Open with Live Server".
    *   Alternatively, you can use any simple local server. If you have Python installed:
        ```bash
        # For Python 3
        python -m http.server
        ```
    *   Open your browser and navigate to `http://localhost:8000`.

## 🔗 How to Link to a GitHub Repository

If you have this project locally and want to push it to a new GitHub repository, follow these steps in your terminal:

1.  **Create a New Repository on GitHub:**
    *   Go to GitHub and log in.
    *   Click the `+` icon in the top-right corner and select **"New repository"**.
    *   Give your repository a name (e.g., `OdishaExplorerHub`).
    *   **Important:** Do *not* initialize the new repository with a `README`, `.gitignore`, or `license` file.
    *   Click **"Create repository"**.

2.  **Push Your Existing Code from the Command Line:**
    *   Navigate to your project's root directory in your terminal.
    *   Initialize a Git repository:
        ```bash
        git init -b main
        ```
    *   Add all the files to be tracked:
        ```bash
        git add .
        ```
    *   Commit your files:
        ```bash
        git commit -m "Initial commit: Add Odisha Explorer Hub project files"
        ```
    *   Link your local repository to the remote one you created on GitHub. **Replace `YOUR_GITHUB_USERNAME` and `YOUR_REPOSITORY_NAME`** with your details from the GitHub page.
        ```bash
        git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
        ```
    *   Push your code to GitHub:
        ```bash
        git push -u origin main
        ```

Your code is now live on GitHub!