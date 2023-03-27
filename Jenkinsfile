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
                 echo "========pipeline executed successfully ========"
                 /*sh "npm i" */
                /* sh "npm install cypress --save-dev" */
                 /*sh "docker --context docker-desa build -t yisus377/reactapp --no-cache ." */
                 /*sh "docker --context docker-desa run -d --name webpruebas -p 8009:3000 yisus377/reactapp" */
            }
        }
        stage("Testing"){
            steps{
                 echo "========pipeline executed successfully ========"
                 /*sh "npx cypress  run  --spec cypress/e2e/tests/*.cy.js" */
            }
        }
        stage("Deploy"){
            steps{
                 /*sh "docker login -u yisus377 -p 1arrepientete97" */
                 /*sh "docker --context docker-desa push yisus377/reactapp" */
                sh "cd /var/lib/jenkins/workspace/compose-tms"
                sh "ls"
                sh "pwd"
                sh "docker compose pull appweb"
                sh "docker compose up -d appweb"
            }
        }
    }

      post{
        always{
            echo "========pipeline executed successfully ========"
             /*sh "docker --context docker-desa stop webpruebas"  */
             /*sh "docker --context docker-desa rm webpruebas"  */
             /*sh "docker --context docker-desa rmi yisus377/reactapp" */
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}
