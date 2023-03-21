describe('The Main Page', () => {
    beforeEach(function (){
        cy.intercept('GET', '/projects', {fixture: 'project_mocks.json'})
        cy.intercept('https://path.to/image*', {fixture: 'dog.jpg'})
    })

    it('sucessfully loads', () => {
        cy.visit('/')
        cy.contains('Featured Projects')
        //Overlay shouldn't low
        cy.get('[class="project--overlay"]').should('not.exist')
    })


    it('sucessfully clicks and loads up project', () => {
        cy.visit('/')
        cy.contains('Featured Projects')
        cy.get('[alt="Project Name"]').first().click()

        // Check overlay items all exist.
        cy.get('[class="project--overlay"]').should('exist')
        cy.get('[class="project--title"]').and("contain", 'Project Name')
        cy.get('[class="project--data"]').and("contain", 'Project description 1 here.')
        cy.get('[href="https://path.to/github1"]')
        cy.get('[href="https://path.to/project1"]')
        cy.get('[class="project--related--item"]').should('have.length', 6)
    })

    it('sucessfully clicks a project, and closes project via X button', () => {
        cy.visit('/')
        cy.contains('Featured Projects')
        cy.get('[alt="Project Name"]').first().click()
        cy.get('[class="project--overlay"]').should('exist')
        cy.get('[alt="X icon to close"]').click()
        cy.get('[class="project--overlay"]').should('not.exist')
    })
    it('sucessfully clicks a project, and selects a featured project', () => {
        cy.visit('/')
        cy.contains('Featured Projects')
        cy.get('[alt="Project Name"]').first().click()
        // cy.get('[alt="Project Name2"]').parent().click()
        cy.get('*[class^="project--related--item"]').last().click()
    })
    it('sucessfully clicks a project, and closes project by clicking off', () => {
        cy.visit('/')
        cy.contains('Featured Projects')
        cy.get('[alt="Project Name"]').first().click()
        cy.window().then((win) => {
            const posX = 50;
            const posY = 220;
            const options = {
                button: 0,
                force: true,
                mutplie: false,
                timeout: 4000,
            };

        const element = win.document.elementFromPoint(posX, posY) as HTMLElement;
        cy.wrap(element).trigger('click', options);
        })
    })

})