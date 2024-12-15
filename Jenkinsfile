// Jenkinsfile
def appName = "tp-devops"
def dockerHubRepo = "youssef003/${appName}"
def dockerImage = "${dockerHubRepo}:latest"

def buildNode = "node:16-alpine"

pipeline {
    agent any 

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            agent { docker { image buildNode } }
            steps {
                sh 'npm install'
            }
        }

        stage('Build Application') {
            agent { docker { image buildNode } }
            steps {
                sh 'npm run build'
            }
        }

        stage('Dockerize Application') {
            steps {
                sh 'docker build -t ${dockerImage} .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withDockerRegistry([ credentialsId: 'dockerhub-credentials', url: '' ]) {
                    sh 'docker push ${dockerImage}'
                }
            }
        }

        stage('Deploy Docker Container') {
            steps {
                sh 'docker run -d -p 80:80 --name ${appName} ${dockerImage}'
            }
        }
    }

    post {
        always {
            sh 'docker rm -f ${appName} || true'
            sh 'docker rmi ${dockerImage} || true'
        }
    }
} 