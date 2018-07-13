pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
				echo 'Building...'
                sh 'npm install'
            }
        }
		stage('Test') {
			steps {
				echo 'Testing...'
				sh 'npm test'
			}
		}
		stage('Deploy') {
			steps {
				echo 'Deploying...'
				echo 'Not yet implemented'
			}
		}
    }
	post {
        always {
            echo 'One way or another, I have finished'
        }
        success {
            echo 'I succeeeded!'
        }
        unstable {
            echo 'I am unstable'
        }
        failure {
            echo 'I failed'
        }
        changed {
            echo 'Things were different before...'
        }
    }
}