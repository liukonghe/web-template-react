pipeline {
    agent {
        docker {
            image 'node:12-alpine3.12'
            args '-u root:root -p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
