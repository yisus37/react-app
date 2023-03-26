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
                sh "docker build -t reactApp/yisus37 --no-cache ."
                sh "docker run -d --name react -p 8007:300 reactApp/yisus37"
            }
        }
        stage("Testing"){
            steps{
                sh "npm run pruebas"
            }
        }
    }

    
}
