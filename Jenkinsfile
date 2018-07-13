Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
				echo 'Building...'
                sh 'npm install'
            }
        }
		stage('test') {
			steps {
				echo 'Testing...'
				sh 'npm test'
			}
		}
		stage('deploy') {
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
            echo 'I am unstable :/'
        }
        failure {
            echo 'I failed :('
        }
        changed {
            echo 'Things were different before...'
        }
    }
}