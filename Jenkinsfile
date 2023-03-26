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
                sh "npm start"
            }
        }
        stage("Testing"){
            steps{
                sh "npm run pruebas"
            }
        }
    }

    
}
