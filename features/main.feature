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
      And I should see "Player Chooses"
      And I should see "Computer Chooses"
      And I should see "And the Winner is"
      And I should see "Score"
      And I should see "Player 0"
      And I should see "Computer 0"
      When I click "scissors"
      Then I should see "Scissors"
      Then the session storage length must be 1
      When I click "rock"
      Then I should see "Rock"
      Then the session storage length must be 2
      When I click "paper"
      Then I should see "Paper"
      Then the session storage length must be 3
      When I click "reset"
      Then the session storage length must be 0
      And I should see "Player 0"
      And I should see "Computer 0"
      