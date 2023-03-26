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
                sh "docker build -t reactapp --no-cache ."
                sh "docker run -d --name react -p 8007:3000 reactapp"
            }
        }
        stage("Testing"){
            steps{
                sh "npx cypress  run  --spec cypress/e2e/tests/*.cy.js"
            }
        }
        stage("Build"){
            steps{
                echo "deploy"
            }
        }
    }

    
}
