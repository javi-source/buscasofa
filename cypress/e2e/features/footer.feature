Feature: Footer con información de los autores

  Scenario: Mostrar los nombres de los desarrolladores en el footer
    Given el usuario está en la página principal
    Then debería ver el nombre "Elena Nuñez Malledo"
    And debería ver el nombre "Ignacio Castejón Mallén"
    And debería ver el nombre "Javier Marina Marín"
    And debería ver el nombre "Juan Camilo Lotero Gonzalez"
    And debería ver el nombre "Pablo García Ferrer"
