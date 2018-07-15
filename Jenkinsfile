pipeline {
    agent any
	
	environment {
		WORKSPACE = '/vagrant/bitbucket/cs6261_project5'
	}
	
    stages {
        stage('Build') {
            steps {
				echo 'Building...'
                sh 'npm install'
            }
        }
		stage('Unit Test') {
			steps {
				echo 'Unit Testing...'
				sh 'npm test'
			}
		}
		stage('E2E Test') {
			steps {
				echo 'E2E Testing...'
				sh 'webdriver-manager update'
				sh 'webdriver-manager start &'
				sh 'docker build --tag jenkins_image docker_testenv/.'
				sh 'docker run --name=testenv -d -v $WORKSPACE/app:/app -p 8000:8000 jenkins_image'
				sh 'protractor protractor.conf.js'
				sh 'docker stop testenv'
				sh 'docker rm testenv'
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