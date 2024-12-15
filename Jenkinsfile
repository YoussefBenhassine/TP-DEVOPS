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
                bat 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Dockerize Application') {
            steps {
                bat 'docker build -t tp-devops:1.0 .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker_cred', passwordVariable: 'docker_credPassword', usernameVariable : 'docker_credUser')]){
                    bat "docker login -u ${env.docker_credUser} -p ${env.docker_credPassword}"
                    bat 'docker tag tp-devops:1.0 youssef003/devops:1.0'
                    bat 'docker push youssef003/devops:1.0'
                    bat 'docker logout'
                }
            }
        }

        stage('Deploy Docker Container') {
            steps {
                bat 'docker stop tp-devops || echo "Container not found"'
                bat 'docker rm tp-devops || echo "Container not found"'
                bat 'docker run -d -p 80:80 --name tp-devops youssef003/devops:1.0'
            }
        }
    }
} 