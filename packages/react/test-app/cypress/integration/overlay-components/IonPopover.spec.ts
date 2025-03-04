describe('IonPopover', () => {
  beforeEach(() => {
    cy.visit('/overlay-components/popover');
  });

  it('display popover', () => {
    //show popover
    cy.get('ion-button').contains('Show Popover').click();
    cy.get('ion-popover ion-list-header').contains('Ionic');

    //close popover
    cy.get('ion-item').contains('Close').click();
  });

  it('display popover and call dismiss to close it', () => {
    //show popover
    cy.get('ion-button').contains('Show Popover, hide after 250 ms').click();
    cy.get('ion-popover ion-list-header').contains('Ionic');
  });

});
