describe('The Main Page', () => {
    beforeEach(function (){
        cy.intercept('GET', '/projects', {fixture: 'project_mocks.json'})
        cy.intercept('https://path.to/image*', {fixture: 'dog.jpg'})
    })

    it('sucessfully loads', () => {
        cy.visit('/')
        cy.contains('Featured Projects')
    })

    it('sucessfully clicks and loads up project', () => {
        cy.visit('/')
        cy.contains('Featured Projects')
        cy.get('[alt="Project Name"]').first().click()
    })

    it('sucessfully clicks a project, and closes project via X button', () => {
        cy.visit('/')
        cy.contains('Featured Projects')
        cy.get('[alt="Project Name"]').first().click()
        cy.get('[alt="X icon to close"]').click()
    })
    it('sucessfully clicks a project, and closes project by clicking off', () => {
        cy.visit('/')
        cy.contains('Featured Projects')
        cy.get('[alt="Project Name"]').first().click()
        cy.get('h5').contains('Featured Projects').click(5,300)
    })

})