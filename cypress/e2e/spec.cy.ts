const dashboardItems = [
  'Success Ratio',
  'Engagement',
  'Number of times your links were opened',
  'Total of active WannaGos',
  'Total of people going to your WannaGos',
  "People that can't go to your WannaGos",
  'Total of people that have suggestions',
  'Total of expired WannaGos',
  'Total of people going to your WannaGos'
]


describe('Visit WannaGo page', () => {
  it('Opens WannaGo page', () => {
    cy.visit('http://localhost:3001/')
  })
})

describe('Find plan it!', () => {
  it('Find content "Plan it!"', () => {
    cy.contains('Plan it!')
  })
})

describe('Click on plan it! button', () => {
  it('Click on "Plan it!" and redirect', () => {
    cy.contains('Plan it!').click()
    cy.url().should('include', '/wannaGo/VerticalStepperPage')
  })
})

describe('Create a new WannaGo', () => {
  it('Successfully create a new WannaGo', () => {
    cy.contains('Let people know who sends the plan')
      .get('#owner-name')
      .type('Danny DV.')
      .should('have.value', 'Danny DV.')

    cy.contains('Continue').click()

    cy.contains('Add a title to your plan')
      .get('#plan-title')
      .type('Hiking together')
      .should('have.value', 'Hiking together')

    cy.contains('Continue').click()

    cy.contains('Add an address')
      .get('#plan-location')
      .type('Parc del Garraf')
      .should('have.value', 'Parc del Garraf')

    cy.contains('Continue').click()

    cy.contains('When is it?')
      .get('#plan-date')
      .click()
      .type('2022-10-29T09:00')
      .should('have.value', '2022-10-29T09:00')

    cy.contains('Finish').click()
    cy.get('#share-it').click()

    cy.url().should('include', '/wannago/id=')
  })
})

describe('Check wannaGo', () => {
  it('Check wannaGo and share it', () => {
    cy.contains('What: Hiking together')
    cy.contains('Where: Parc del Garraf')
    cy.contains('When:October 29, 2022, At 09:00AM')

    cy.contains('/wannago/guest-link/id=')

    cy.get('.buttonCopy').click()
    cy.contains('Copied')
    cy.get('.guestLink').click()
  })
})


describe('Sign up', () => {
  it('Sign up', () => {
    cy.get('.signup').click()
    cy.url().should('include', '/user/signup')
    cy.contains('Sign Up')
    cy.contains('Already have an account?')
      .get('[href="/user/login"]')

    cy.contains('Name')
      .get('#name').click()
      .type('Legacy')

    cy.contains('Email')
      .get('#email').click()
      .type('legacy@test.com')
    
    cy.contains('Password')
      .get('#password')
      .type('123456')

    cy.contains('Password Confirmation')
      .get('#password-confirm')
      .type('123456')
    
    cy.get('.signup-button').click()
    cy.contains('Failed to create an account')

  })
})

describe('Log in', () => {
  it('Log In', () => {
    cy.get('.login').click()
    cy.url().should('include', '/user/login')
    cy.contains('Log in')
      .get('[href="/user/forgot-password"]')
    cy.contains('Need an account?')
      .get('[href="/user/signup"]')
    

    cy.contains('Email')
      .get('#email').click()
      .type('legacy@test.com')

    cy.contains('Password')
      .get('#password')
      .type('123456')
    
    cy.get('#login-button').click()
    cy.url().should('include', '/user/dashboard')
  })
})

describe('User dashboard', () => {
  it('User dashboard contents', () => {
    cy.visit('http://localhost:3001/user/dashboard')
    cy.get('[href="/"]')
    cy.get('[href="/user/update-profile"]')
    cy.get('[href="/user/dashboard"]')
    cy.get('#logout-button')

    cy.contains('Welcome Legacy!')
    cy.contains('These are your wannagos:')

    dashboardItems.forEach((item) => {
      cy.contains(item)
    })
  })
})

describe('Update profile', () => {
  it('Check update profile options', () => {
    cy.get('[href="/user/update-profile"]').click()
    cy.url().should('include', '/user/update-profile')

    cy.get('[href="/user/dashboard"]')
    cy.contains('Cancel')
    cy.get('[href="/user/dashboard"]')
    cy.get('.signup-button')

    cy.contains('Name')
      .get('#name').click()
    cy.contains('Email')
      .get('#email').click()
    cy.contains('Password')
      .get('#password').click()
    cy.contains('Password Confirmation')
      .get('#password-confirm').click()
    
    cy.get('#logout-button').click()
    cy.url().should('eq', 'http://localhost:3001/')
  })
})
