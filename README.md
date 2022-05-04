# <center>![MathScannerSolver logo](https://i.imgur.com/Y5x0y3P.png)</center>
# <center>User Manual</center>

<details>
  <summary> How to Install (click to expand) </summary>

### I. Installing Node Dependency
  1. Click [here](https://nodejs.org/en/download/) to download the latest version of Node.
  2. Select the installation that is most appropriate for your system. For most users, this will be the *64-bit Windows Installer (.msi)* file.
  3. Once the download has finished, open the corresponding installation file.
  4. Follow the prompts to completion to install Node.js on your machine.

### II. Installing Git
  1. Click [here](https://git-scm.com/downloads) to download the latest version of Git.
  2. Select the installation that is most appropriate for your system and follow the corresponding instructions.

### III. Cloning the Repository
1.  Open the Windows run command, either by pressing the *Windows key + R key* at the same time, or by typing *"Run"* into the Windows search bar and selecting the Run app from the list.
2.  Type *"cmd"* into the run box and then press the *"OK"* button to open the Windows Command Prompt.
3.  Enter the following into the Command prompt and then press the *Enter* key:
```bash
git clone https://github.com/Dylans17/MathScannerSolver.git
```

### IV. Installing npm Dependencies and build React
1. Input each of the following lines into the Windows Command Prompt, press the *Enter* key after each line:
```bash
cd MathScannerSolver/Code  
npm install  
npm run build
```

### V. Running the application
1. Verify that your Command Prompt is in the *"Code"* folder of MathScannerSolver. If it is not, use the cd command followed by the location of the code folder to change to the proper directory.
2. In the Windows Command Prompt enter the following, and then press the *Enter* key:
```bash
node index.js
```
3. If successful, the command prompt should indicate that it is listening on port 9000.
![Command Prompt listening](https://i.imgur.com/ylGjuVC.png)

4. To test the application, the enter the following, and then press the *Enter* key:
```bash
npm run test
```

### VI. Adding Optional MathPix Information
1. After creating an account with MathPix, navigate to the [ocr-api page](https://accounts.mathpix.com/ocr-api)
2. Create an API key to use for the application and copy and paste that information into the .env file located within the *"Code"* folder of MathScannerSolver.
3. Then when running the application, you will no longer receive warnings about the .env file and will be able to use the ocr components.

### VII. Accessing the website
1. Open your internet browser of choice
2. Enter *"localhost: 9000"* into the browser's navigation bar and press the *Enter* key.
3. If successful, you should see the MathScannerSolver page loaded.

![Home Page](https://i.imgur.com/yuqnVfI.png)

</details>


<details>
<summary>How to Use (click to expand)</summary>

## Uploading an image

1. On the front page, press the *"Upload Your Picture"* button.
2. The page should display a drag 'n' drop box that looks like: ![Drag 'n' Drop your image here](https://i.imgur.com/L6agY9G.png)
3. You can either drag an image over the box and release it, or click on the box and navigate to the desired picture.
4. After a picture has been chosen, it will be displayed.
5. If you wish, press the edit icon above your image to manually edit your input and press the *Set* button when finished.

![Set Button](https://i.imgur.com/y65QxRY.png)

6. You will be brought to a screen showing the image you uploaded, above it the result will be displayed.

## Taking a Picture

1. On the home screen, press the *"Take a Picture"* button.
2. A pop up box may appear asking for permission to use your picture, select *Yes* to enable your camera.
3. A screen showing your camera should appear, with a small circle in the middle of the camera frame.
![Camera Picture](https://i.imgur.com/fw8aHRV.png)
4. Press the small circle and a picture will be taken and uploaded.
5. You can choose to take another picture, or hit the next key to display your results.

## Inputting an Equation

1. At the home screen, press the *"Type an Equation"* to be brough to the input equation page.
2. In the following screen, input the equation you wish to be solved into the input box.
![](https://i.imgur.com/wdYIFtX.png)
3. You can press the *"Add another Equation"* button at any time to add another equation.
4. Once satisfied with your input, you can press the *"Submit"* button to submit your input.
5. Upon submission, you will be taken to the results page.
![](https://i.imgur.com/UH1VjX2.png)
</details>

<details>

  <summary>FAQ (click to expand) </summary>

### What is MathScannerSolver?
>MathScannerSolver creates a webserver which hosts a site inputting math either via text or through uploading images, and provides methods to display and solve a small subset of math problems.

### Who created MathScannerSolver?
>Group 8, consisting of Dylan Strickley, Carlos Garcia Gomez, Jonathan O'Berry, Abigail Beneduce, Pam Viana, and Sarah Baron are the creators of MathScannerSolver.

### How does MathScannerSolver work?
>MathScannerSolver works by using our custom LaTeX parser and solver to resolve the answer to user input. LaTeX strings from image input is found by using the MathPix API to pull LaTeX from uploaded images.

### What languages is MathScannerSolver written in?
>MathScannerSolver is primarily written in REACT for the Frontend and JavaScript for the backend. Additionally, MathScannerSolver uses ANTLR as a parser generator.

### Why was MathScannerSolver created?
>MathScannerSolver was created as a University project as Group 8 found there to be a lack of a proper LaTeX solver written in JavaScript.

</details>

<details>
  <summary>React Information (click to expand)</summary>

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
</details>
