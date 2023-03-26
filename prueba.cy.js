
/* dsb , it ,ctx , spy(specify), bf(before) bfe(before) ,
af(after) , afe(aftereach)

    "cyopen": "cypress open",
    "pruebas": "cypress run --spec app_front/cypress/e2e/prueba.cy.js --browser chrome",
    "pruebas-run": "cypress run" 
    npx cypress open
*/
describe('Test pruebal - conjunto', () => {
    /**
     * before (una vez al principio)
     * beforeEach (antes de cada tst)
     * afterEach (despues de cada test)
     * after  (una vez al final del test)
     */
    beforeEach(() => {// se ejecuta en cada prueba
        cy.visit("http://zero.webappsecurity.com/")
        
    });

    it('validar inicio', () => {//es un test
        cy.get('.active > img').should("be.visible")//esta visible
        cy.get('.active > .custom > h4').contains("texto")//verificar si esta el texto escrito
    });

    it('Test - transferencia', () => {
        cy.get("btn").click() //puchar boton
        cy.get("input").type("text") //escribir en el input
        cy.get("input", {timeout:1000}).type("text") //que espere 1 segundo
        cy.get("input").type("text {enter}") //escribir en el input y da enter
        cy.get("select").select("2") //seleccionar un select con su opcion
        cy.get('.active > img').should("not.be.visible")//no esta visible
        cy.get('li').should("have.length",2)//si hay dos elementos
        cy.get('list iten').should("have.length",2).and($li=>{
            expect($li.get(0).textContent,"first-item").to.equal("text")
        })// de la lista sacar el primer item html li y comparar texto

        
        let add=(a,b)=>a+b
        expect(add(1,2)).to.eq(3) //usar funciones y validar la respuesta
    });
    /* it.only - que  ejecute solo este paso*/
    /* it.skype - que no se ejecute*/
});

//COMPONENTES TEST
/* 
import app from "url"
describe('Test pruebal - conjunto', () => {
it('descripcion', () => {
    cy.mount(<app/>)
    cy.get(".clase").click()
});
}); 
*/
