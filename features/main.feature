Feature: Play a game
  As a user
  In order to have fun
  I would like to play the game Paper-Rock-Scissors

    Scenario: User visits the site to play the game
      Given I visit the site
      Then I should see "Paper - Rock - Scissors Game"
      And I should see "Player"
      And I should see "Computer"
      And I should see "Winner"
      And I should see "Result"
      When I click "play"
      Then I should see "Paper" or "Rock" or "Scissors"
      