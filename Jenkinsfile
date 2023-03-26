pipeline{
    agent any
    stages{
        stage("Inicio"){
            steps{
                echo "Construir proyecto"
            }
        }
        stage("Build"){
            steps{
                
                sh "npm i"
                sh "npm install cypress --save-dev"
                sh "docker build -t appruebas --no-cache ."
                sh "docker run -d --name react -p 8007:3000 appruebas"
            }
        }
        stage("Testing"){
            steps{
                sh "npx cypress  run  --spec cypress/e2e/tests/*.cy.js"
            }
        }
        stage("Deploy"){
            steps{
                sh "docker stop appruebas"
                sh "docker rm appruebas"
                sh "docker rmi appruebas"
                sh "docker build -t reactapp --no-cache ."
            }
        }
    }

      post{
        always{
            sh "docker stop appruebas"
            sh "docker rm appruebas"
            sh "docker rmi appruebas"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}
