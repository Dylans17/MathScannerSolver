# MathScannerSolver
Creates a webserver which hosts a site inputting math via MathPix API and provides methods to display and solve a small subset of math problems.

## Setup
1. Clone the repository

        git clone https://github.com/Dylans17/MathScannerSolver.git
        cd MathScannerSolver/Code

2. Edit the provided .env file and fill in the required values
3. Run the application

        node index.js

4. (Optional) If you want to keep your own repository, then you do not want to track the .env file in git.

        git update-index --skip-worktree .env
