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

        stage('Dockerize Application') {
            steps {
                sh 'docker build -t tp-devops:1.0 .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker_cred', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable : 'DOCKERHUB_USERNAME')]){
                    sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
                    sh 'docker tag tp-devops:1.0 youssef003/tp-devops:1.0'
                    sh 'docker push youssef003/tp-devops:1.0'
                    sh 'docker logout'
                }
            }
        }

        stage('Deploy Docker Container') {
            steps {
                sh 'docker run -d -p 80:80 --name tp-devops youssef003/tp-devops:1.0'
            }
        }
    }
} 