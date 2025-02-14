pipeline {
    agent any

    environment {
        GITHUB_REPO = "https://github.com/sanvi-verma/your-portfolio-repo.git"  // Update with your actual repo
        FIREBASE_DEPLOY_TOKEN = "4/0ASVgi3JG-kgFImM4p30jIqQQe_zwRWYVZ
yShYR-9uyMlzehI3GvyRC3B3sKydNLOgsuqvw"  // Replace with your token
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
                git branch: 'main', url: "${GITHUB_REPO}"
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies...'
                    sh 'npm install'
                }
            }
        }

        stage('Build App') {
            steps {
                script {
                    echo 'Building app...'
                    sh 'npm run build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    echo 'Running tests (dummy test stage)...'
                    sh 'echo "Tests complete!"'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Use the token to authenticate and deploy
                sh 'firebase deploy --token $FIREBASE_DEPLOY_TOKEN'
            }
        }
    }

    post {
        success {
            echo '✅ Deployment Successful!'
        }
        failure {
            echo '❌ Deployment Failed!'
        }
    }
}
