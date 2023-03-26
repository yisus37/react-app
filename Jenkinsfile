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
                /* sh "npm install cypress --save-dev" */
                sh "docker --context docker-desa build -t yisus377/reactapp --no-cache ."
                sh "docker --context docker-desa run -d --name webpruebas -p 8009:3000 yisus377/reactapp"
            }
        }
        stage("Testing"){
            steps{
                sh "npx cypress  run  --spec cypress/e2e/tests/*.cy.js"
            }
        }
        stage("Deploy"){
            steps{
                sh "docker --context docker-desa push yisus377/reactapp"
                sh "cd /home/yisus37/Escritorio/devs/appweb/"
                sh "docker compose pull appweb"
                sh "docker compose up -d appweb"
            }
        }
    }

      post{
        always{
            sh "docker --context docker-desa stop webpruebas"
            sh "docker --context docker-desa rm webpruebas"
            sh "docker --context docker-desa rmi yisus377/reactapp"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}
