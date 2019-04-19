Feature: Play a game
  As a user
  In order to have fun
  I would like to play the game Paper-Rock-Scissors

    Scenario: User visits the site to play the game
      Given I visit the site
      Then I should see "Paper"
      Then I should see "Rock"
      Then I should see "Scissors"
      Then I should see "Game"
      And I should see "Player"
      And I should see "Computer"
      And I should see "And the Winner is"
      And I should see "Please Select"
      When I click "play"
      Then I should see "Paper" or "Rock" or "Scissors"
      