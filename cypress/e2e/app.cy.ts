describe('The Main Page', () => {
    it('sucessfully loads', () => {
        cy.visit('/')

        cy.contains('Featured Projects')
        cy.get('[alt="Project Name"]').first().click()
        cy.get('[alt="X icon to close"]').click()
    })

    // it('sucessfully clicks and loads up project', () => {
    //     cy.visit('/')
    //     cy.contains('Featured Projects')
    //     cy.get('[alt="Sorting Visualizer"]').first().click()
    // })

    // it('sucessfully clicks a project, and closes project via X button', () => {
    //     cy.visit('/')
    //     cy.contains('Featured Projects')
    //     cy.get('[alt="Sorting Visualizer"]').first().click()
    //     cy.get('[alt="X icon to close"]').click()
    // })

})