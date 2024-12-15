pipeline {
    agent any 

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'sudo apt install npm'
                sh 'npm test '
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }
        }
    }
} 