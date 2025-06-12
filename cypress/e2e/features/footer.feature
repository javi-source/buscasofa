Feature: Footer con información de los autores

  Scenario: Mostrar los nombres de los desarrolladores en el footer
    Given el usuario está en la página principal
    Then debería ver el nombre "Javier García"
    And debería ver el nombre "Javier López"
